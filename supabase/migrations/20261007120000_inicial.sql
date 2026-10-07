-- Estrutura inicial do site do IBP no Supabase.
-- Rode este arquivo inteiro no SQL Editor do projeto (ou com `npx supabase db push`).
-- É idempotente: rodar de novo não apaga nem duplica nada.

-- ============ ADMINISTRADORES ============
-- Só quem estiver nesta lista pode editar o site. Estar logado não basta: se o cadastro
-- público ficar ligado por engano no Supabase, um desconhecido conseguiria criar conta,
-- mas continuaria sem permissão de escrita.
-- Para liberar alguém: crie o usuário em Authentication > Users e depois rode
--   insert into public.admins (user_id) select id from auth.users where email = 'pessoa@exemplo.com';

create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  criado_em timestamptz not null default now()
);

alter table public.admins enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

drop policy if exists "admin le admins" on public.admins;
create policy "admin le admins" on public.admins for select
  using (public.is_admin());

-- ============ EVENTOS ============

create table if not exists public.eventos (
  id bigint generated always as identity primary key,
  slug text unique not null,
  titulo text not null default '',
  periodo text not null default '',
  resumo text not null default '',
  imagem text not null default '',
  horario text not null default '',
  local text not null default '',
  endereco text not null default '',
  programacao jsonb not null default '[]'::jsonb,
  paragrafos jsonb not null default '[]'::jsonb,
  cta text not null default '',
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);

create or replace function public.tocar_atualizado_em()
returns trigger
language plpgsql
as $$
begin
  new.atualizado_em = now();
  return new;
end;
$$;

drop trigger if exists eventos_atualizado_em on public.eventos;
create trigger eventos_atualizado_em
  before update on public.eventos
  for each row execute function public.tocar_atualizado_em();

grant select on public.eventos to anon, authenticated;
grant insert, update, delete on public.eventos to authenticated;

alter table public.eventos enable row level security;

drop policy if exists "leitura publica" on public.eventos;
drop policy if exists "admin escreve" on public.eventos;

create policy "leitura publica" on public.eventos for select
  using (true);

create policy "admin escreve" on public.eventos for all
  using (public.is_admin()) with check (public.is_admin());

-- ============ STORAGE (cartazes dos eventos) ============

insert into storage.buckets (id, name, public)
values ('eventos', 'eventos', true)
on conflict (id) do nothing;

drop policy if exists "leitura publica eventos" on storage.objects;
drop policy if exists "admin envia eventos" on storage.objects;
drop policy if exists "admin apaga eventos" on storage.objects;

create policy "leitura publica eventos" on storage.objects for select
  using (bucket_id = 'eventos');

create policy "admin envia eventos" on storage.objects for insert
  with check (bucket_id = 'eventos' and public.is_admin());

create policy "admin apaga eventos" on storage.objects for delete
  using (bucket_id = 'eventos' and public.is_admin());

-- ============ CONTEÚDO INICIAL ============
-- O evento que antes era criado automaticamente pelo site (seed). A imagem fica em
-- public/eventos/ do próprio site, por isso o caminho começa com "/".

insert into public.eventos
  (slug, titulo, periodo, resumo, imagem, horario, local, endereco, programacao, paragrafos, cta)
values (
  '2-edicao-do-ibp-em-foco',
  '2ª Edição do IBP em Foco',
  'Janeiro de 2027',
  '12, 19 e 26/01 às 19h30 — palestras abertas ao público e entrega de certificados.',
  '/eventos/ibp-em-foco-2.jpg',
  '19h30',
  'Assembleia de Deus Ministério Belém de Paulínia',
  'Av. Antônio Batista Piva, 399, Jd. Primavera, Paulínia/SP',
  '[
    {"data": "12 de janeiro", "dia": "Terça-feira", "tema": "Ensino Como Prioridade na Igreja de Cristo", "palestrante": "Pr Rubens da Virgens", "igreja": "AD Jaguariúna/SP"},
    {"data": "19 de janeiro", "dia": "Terça-feira", "tema": "Doutrina Bíblica de Missões", "palestrante": "Pr Sérgio Rodrigo Costa", "igreja": "AD Hortolândia/SP"},
    {"data": "26 de janeiro", "dia": "Terça-feira", "tema": "Santidade Bíblica e os Dilemas Contemporâneos", "palestrante": "Pr Alessandro Morais Santos", "igreja": "AD Itupeva/SP"}
  ]'::jsonb,
  '[
    "Em janeiro, teremos a 2ª edição do IBP em Foco, um evento preparado especialmente para promover conhecimento, edificação e crescimento por meio da Palavra de Deus.",
    "Serão três terças-feiras de palestras, abertas aos alunos e ao público em geral, com temas voltados à instrução e ao aprofundamento da fé cristã.",
    "Além das palestras, teremos um momento muito especial: a entrega dos certificados de conclusão dos cursos do IBP.",
    "Para celebrar essa conquista, será preparado um espaço exclusivo para os formandos, com painel para fotos e kit completo de formatura, incluindo beca, capelo e canudo.",
    "A Diretoria do IBP estará à disposição dos alunos para participar das fotografias e registrar esse momento tão importante de sua trajetória acadêmica.",
    "Será um tempo de aprendizado, comunhão, celebração e gratidão a Deus por tudo o que Ele tem realizado por meio do Instituto Bíblico de Paulínia."
  ]'::jsonb,
  'Participe conosco da 2ª edição do IBP em Foco!'
)
on conflict (slug) do nothing;
