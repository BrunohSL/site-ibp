import { supabase } from "@/lib/supabase";

export type Palestra = {
  data: string;
  dia: string;
  tema: string;
  palestrante: string;
  igreja: string;
};

export type Evento = {
  id: number;
  slug: string;
  titulo: string;
  periodo: string;
  resumo: string;
  imagem: string;
  horario: string;
  local: string;
  endereco: string;
  programacao: Palestra[];
  paragrafos: string[];
  cta: string;
};

export type EventoInput = Omit<Evento, "id" | "slug">;

const BUCKET = "eventos";
const COLUNAS =
  "id, slug, titulo, periodo, resumo, imagem, horario, local, endereco, programacao, paragrafos, cta";

// O site é estático: a página de um evento é sempre a mesma e lê o slug da URL.
export function eventoHref(slug: string): string {
  return `/eventos/ver?e=${encodeURIComponent(slug)}`;
}

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function uniqueSlug(base: string, ignoreId?: number): Promise<string> {
  const root = slugify(base) || "evento";
  const { data, error } = await supabase
    .from("eventos")
    .select("id, slug")
    .like("slug", `${root}%`);
  if (error) throw error;

  const usados = new Set(
    (data ?? []).filter((e) => e.id !== ignoreId).map((e) => e.slug)
  );
  let candidate = root;
  let n = 2;
  while (usados.has(candidate)) {
    candidate = `${root}-${n}`;
    n += 1;
  }
  return candidate;
}

export async function listEventos(): Promise<Evento[]> {
  const { data, error } = await supabase
    .from("eventos")
    .select(COLUNAS)
    .order("id", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function getEventoBySlug(slug: string): Promise<Evento | null> {
  const { data, error } = await supabase
    .from("eventos")
    .select(COLUNAS)
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function getEventoById(id: number): Promise<Evento | null> {
  const { data, error } = await supabase
    .from("eventos")
    .select(COLUNAS)
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function createEvento(input: EventoInput): Promise<void> {
  const slug = await uniqueSlug(input.titulo.trim() || "evento");
  const { error } = await supabase.from("eventos").insert({ ...input, slug });
  if (error) throw error;
}

export async function updateEvento(
  atual: Evento,
  input: EventoInput
): Promise<void> {
  const slug =
    input.titulo.trim() && input.titulo !== atual.titulo
      ? await uniqueSlug(input.titulo, atual.id)
      : atual.slug;
  const { error } = await supabase
    .from("eventos")
    .update({ ...input, slug })
    .eq("id", atual.id);
  if (error) throw error;
}

export async function deleteEvento(evento: Evento): Promise<void> {
  const { error } = await supabase.from("eventos").delete().eq("id", evento.id);
  if (error) throw error;
  await removerImagem(evento.imagem);
}

export async function enviarImagem(arquivo: File): Promise<string> {
  const extensao = arquivo.name.match(/\.[a-z0-9]+$/i)?.[0] ?? ".jpg";
  const caminho = `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 8)}${extensao.toLowerCase()}`;
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(caminho, arquivo, { contentType: arquivo.type || undefined });
  if (error) throw error;
  return supabase.storage.from(BUCKET).getPublicUrl(caminho).data.publicUrl;
}

// Só apaga imagens que vieram do Storage; as que ficam em public/ fazem parte do site.
export async function removerImagem(url: string): Promise<void> {
  const marcador = `/storage/v1/object/public/${BUCKET}/`;
  const i = url.indexOf(marcador);
  if (i === -1) return;
  const caminho = decodeURIComponent(url.slice(i + marcador.length));
  await supabase.storage.from(BUCKET).remove([caminho]);
}
