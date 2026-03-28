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
