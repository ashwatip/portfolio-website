# Ashwati Palanivel - Portfolio

An interactive portfolio for Ashwati Palanivel, a Computer Science and
Artificial Intelligence student at Purdue University Indianapolis.

The site features a scroll-reactive Indianapolis photograph, an expandable
paper resume, a fountain pen, and draggable interest stickers.

## Live sites

- GitHub Pages: <https://ashwatip.github.io/portfolio-website/>
- Public Sites deployment:
  <https://indy-paper-trail-portfolio.ramalakshmi-s.chatgpt.site/>

## Development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

The main content is in `app/page.tsx`, visual styling is in
`app/globals.css`, and images are under `public/assets`.

## Build

```bash
# Sites / vinext build
npm run build

# Static GitHub Pages build
npm run build:pages
```

Pushing to `main` automatically publishes the static build through the workflow
in `.github/workflows/pages.yml`.
