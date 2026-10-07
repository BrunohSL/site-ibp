# Site do Instituto Bíblico de Paulínia

## Como funciona

- **Next.js em modo estático** (`output: "export"`): `npm run build` gera a pasta `out/` só com
  HTML/CSS/JS. Não existe servidor — o site fica hospedado de graça na **Cloudflare Pages**.
- **Supabase (plano gratuito)** guarda o que muda pelo painel: a tabela `eventos`, as imagens
  dos cartazes (bucket `eventos`) e as contas de quem administra o site.
- Páginas institucionais, cursos, equipe e artigos são conteúdo fixo em `src/lib/*.ts` e
  `src/app/(site)/`. Mudou o texto, é só fazer commit — a Cloudflare publica sozinha.
- Eventos são carregados no navegador direto do Supabase. Por isso a página de um evento é
  `/eventos/ver?e=<slug>`: um evento criado no painel aparece na hora, sem publicar de novo.

### Segurança

A chave do Supabase que vai no site (`NEXT_PUBLIC_SUPABASE_ANON_KEY`) é **pública** por design.
Quem protege os dados são as regras de RLS em `supabase/migrations/`:

- qualquer visitante **lê** eventos e imagens;
- só quem está na tabela `admins` **cria, edita ou apaga**. Estar logado não basta.

## Rodar localmente

```bash
cp .env.example .env.local   # e preencha com as chaves do Supabase
npm install
npm run dev                  # http://localhost:3000  — painel em /admin
```

Para testar sem mexer no banco de produção, dá pra subir um Supabase local (precisa de Docker):

```bash
npx supabase start           # aplica as migrations e mostra URL e chaves locais
npx supabase stop
```

## Colocar no ar (uma vez só)

### 1. Supabase

1. Crie uma conta em <https://supabase.com> (de preferência com um e-mail da igreja) e um
   projeto novo, região **South America (São Paulo)**.
2. Em **SQL Editor**, cole e rode o conteúdo de
   `supabase/migrations/20261007120000_inicial.sql`.
3. Em **Authentication > Sign In / Providers**, **desligue "Allow new users to sign up"**.
4. Em **Authentication > Users > Add user**, crie a conta de cada pessoa que vai administrar
   (marque "Auto Confirm User"). Depois libere cada uma no **SQL Editor**:

   ```sql
   insert into public.admins (user_id)
   select id from auth.users where email = 'pessoa@exemplo.com';
   ```

5. Em **Authentication > URL Configuration**, coloque a URL do site em **Site URL** e em
   **Redirect URLs** adicione `https://<seu-dominio>/admin/redefinir-senha` (e a URL
   `*.pages.dev` enquanto o domínio não estiver apontado). Sem isso o "esqueci minha senha"
   não funciona.
6. Em **Project Settings > API Keys**, copie a URL do projeto e a chave pública
   (publishable/anon). **Nunca** use a `service_role`/secret no site.

### 2. GitHub

Crie um repositório (pode ser **privado**) e envie o código:

```bash
git add -A && git commit -m "Site do IBP"
git remote add origin git@github.com:<usuario>/ibp.git
git push -u origin master
```

### 3. Cloudflare Pages

1. Crie uma conta em <https://dash.cloudflare.com>.
2. **Workers & Pages > Create > Pages > Connect to Git** e escolha o repositório.
3. Configuração do build:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
4. Em **Environment variables**, adicione `NEXT_PUBLIC_SUPABASE_URL` e
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
5. Salve. Cada `git push` publica uma versão nova; branches diferentes ganham uma URL de
   prévia própria.

### 4. Domínio

Quando o domínio for transferido:

1. Adicione o domínio na Cloudflare (**Add a site**, plano Free) e troque os servidores DNS
   no Registro.br pelos que a Cloudflare indicar.
2. No projeto do Pages, **Custom domains > Set up a custom domain**.
3. Atualize **Site URL** e **Redirect URLs** no Supabase (passo 1.5).
4. Se o domínio tinha e-mail (ex.: `contato@...`), recrie os registros MX na Cloudflare ou
   use o **Email Routing** (grátis) para encaminhar para um Gmail.

## Mudanças no banco

Nunca edite uma migration que já foi aplicada. Crie uma nova:

```bash
npx supabase migration new nome-da-mudanca   # cria supabase/migrations/<data>_nome.sql
```

E rode o SQL dela no SQL Editor (ou use `npx supabase link` + `npx supabase db push`).

## Limites do plano gratuito do Supabase

- O projeto **pausa após 7 dias sem nenhum acesso**. Com o site no ar isso dificilmente
  acontece; se acontecer, é só clicar em "Restore" no painel.
- 500 MB de banco e 1 GB de arquivos: sobra para cartazes de eventos. Prefira imagens JPG
  de até ~500 KB.
