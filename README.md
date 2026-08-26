# Site oficial — Leonardo Assunção de Oliveira

Site literário oficial do autor Leonardo Assunção de Oliveira, desenvolvido com Next.js, TypeScript, Tailwind CSS e Framer Motion.

## Executar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Validação

```bash
npm run lint
npm run typecheck
npm run build
```

## Editar conteúdo

- Textos: adicione arquivos `.mdx` em `content/textos/`, copiando a estrutura de frontmatter dos exemplos existentes. Os quatro textos atuais são demonstrativos e devem ser substituídos antes da publicação editorial.
- Livros: edite os dados centralizados em `lib/site.ts`. A estrutura das páginas e dos componentes já aceita a evolução para uma coleção.
- Compra, contatos e redes: preencha `purchaseUrl` e `siteConfig.social` em `lib/site.ts`. Nenhuma URL foi presumida.
- Imagens: os ativos oficiais ficam em `public/images/`. Prefira WebP otimizado e preserve os arquivos-fonte.
- Domínio: copie `.env.example` para `.env.local` e defina `NEXT_PUBLIC_SITE_URL`. Isso ativa URLs canônicas, sitemap completo e referências absolutas de compartilhamento.

## Rotas

- `/` — página inicial
- `/livros` e `/livros/as-coisas-que-aprendi-em-silencio`
- `/textos` e `/textos/[slug]`
- `/sobre`
- `/contato`

## Deploy na Vercel

Importe o repositório na Vercel, configure `NEXT_PUBLIC_SITE_URL` com o domínio final e execute o deploy. O projeto não depende de banco de dados ou serviços externos.
