# Harun Torlak — Portfolio (Astro)

Personal portfolio website built with Astro. It includes a homepage hero, a work/projects page, and an about/contact page, with a modern, minimal UI and lightweight animations.

## Pages

- `/` — Home (hero + snapshot + links)
- `/work` — Projects
- `/about` — About + Contact

## Features

- Responsive layout (desktop → mobile)
- Scroll-reveal animations (IntersectionObserver)
- Subtle cursor “glow” effect on non-touch devices
- Astro view transitions for smoother navigation
- Contact buttons:
  - Email button opens **Gmail compose** (instead of `mailto:`)
  - Phone button uses `tel:`

## Tech Stack

**Languages**

- Astro (`.astro`)
- TypeScript
- JavaScript
- HTML / CSS

**Frameworks & Tools**

- [Astro](https://astro.build/)
- Node.js + npm

## Project Structure

```
public/                Static assets
src/pages/             Routes (index/about/work)
src/components/        UI components (Hero, Header, etc.)
src/layouts/           Base layout wrapper
src/styles/            Global + animation styles
src/scripts/           Small client-side helpers
```

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build production output:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customization

- Update contact info (email/phone) in `src/components/Hero.astro` and `src/pages/about.astro`.
- Update global styling in `src/styles/global.css`.