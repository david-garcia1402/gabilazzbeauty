# Gabrieli Lazzarotto · Lash Designer

Site institucional (landing page) de **Gabrieli Lazzarotto — Lash Designer | Maquiadora**, Jaraguá do Sul - SC.
100% estático, mobile first, pronto para deploy na Cloudflare.

## Stack

- [Vite 8](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (tema com as cores da marca: vinho, dourado e creme)
- [Motion](https://motion.dev) (animações e reveals)
- [Embla Carousel](https://www.embla-carousel.com) (carrossel do catálogo, com autoplay e arraste)
- [Lucide](https://lucide.dev) (ícones)

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist/
npm run preview  # serve o build localmente
```

## Deploy na Cloudflare

### Cloudflare Pages (recomendado)

1. Conecte o repositório em **Workers & Pages → Create → Pages → Connect to Git**.
2. Configure:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20 ou superior (variável `NODE_VERSION=20`, se necessário)
3. Cada push na branch principal publica automaticamente. O arquivo `public/_headers` já define cache e headers de segurança.

### Cloudflare Workers (Static Assets)

```bash
npm run deploy:workers   # build + `wrangler deploy` usando wrangler.jsonc
```

## Estrutura

```
src/
  data/site.ts        # contato, endereço, serviços/preços, avaliações, políticas
  components/         # seções da página (Hero, About, Catalog, Process, Reviews, Studio, Faq, Cta, Footer)
  components/ui/      # Button, Reveal, SectionHeading, WhatsAppIcon
  assets/             # fotos reais do catálogo (WebP) e logo
public/               # favicon, manifest, _headers, robots, sitemap, og-image
```

## Atualizando conteúdo

Todo o conteúdo editável (telefone, endereço, preços, descrições, depoimentos, políticas) fica em `src/data/site.ts`.
As fotos dos procedimentos ficam em `src/assets/services/` e são referenciadas no mesmo arquivo.
