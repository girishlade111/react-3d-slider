# React 3D Slider — Scroll-Driven 3D Image Carousel

A React/Next.js demo page that renders images as **cards floating in 3D space**, driven entirely by page scroll and pure CSS 3D transforms. Scrolling the tall page moves the whole slider rig vertically, while each card sits rotated in 3D (rotateX/rotateY/rotateZ with `preserve-3d`). Hovering a card slides it outward with a smooth cubic-bezier transition — a nice study in CSS-only 3D motion without any WebGL.

## What it does

- Displays a set of image cards arranged on a rotated 3D plane (fixed-position `.slider` container with `translate3d(-50%, -50%, 0) rotateX(0deg) rotateY(-25deg) rotateZ(-120deg)`).
- **Scroll-driven animation**: page scroll (`800vh` body) shifts the slider vertically via a passive scroll listener.
- **Hover interaction**: mousing over a card slides it out from the stack; mouse-out returns it.
- Cards are stacked with negative margins, a white/translucent border, rounded corners and per-card 3D rotation.

## Features

- Pure CSS 3D transforms — no Three.js / WebGL dependency
- Scroll-driven vertical movement of the whole slider
- Hover-to-reveal card interaction with smooth transitions
- Dark background, responsive card sizing
- Fully client-side, zero backend

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) + shadcn/ui primitives (Radix UI)
- Plain CSS 3D transforms (`app/slider.css`)
- TypeScript

## Quick start

```bash
# install dependencies
pnpm install

# dev server
pnpm dev
# open http://localhost:3000 — scroll the page to move the slider

# static production build (outputs to ./out)
pnpm build
```

## Project structure

```
react-3d-slider/
├── app/
│   ├── page.tsx        # client component: card list + scroll/hover handlers
│   ├── images.ts       # list of image URLs used as card sources
│   ├── slider.css      # 3D transforms, card layout, scroll-area styles
│   ├── layout.tsx      # root layout + theme provider
│   └── globals.css     # global styles
├── components/
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts
├── public/             # static assets
└── next.config.mjs     # output: 'export' for static hosting
```

## Customizing the images

Edit the URL array in `app/images.ts` to use your own images (local files in `public/` or remote URLs). Cards automatically map over whatever you put there.

## Environment variables

None.

## Deployment

Static export (`output: 'export'` in `next.config.mjs`) — host anywhere static:

1. `pnpm build` → `out/` directory
2. Deploy `out/` to GitHub Pages, Cloudflare Pages, Vercel, or Netlify.

`basePath: '/react-3d-slider'` is set for the GitHub Pages subpath deployment. Remove it and rebuild if deploying to a root domain.

## License

MIT.

---

Built by Girish Lade — https://ladestack.in
