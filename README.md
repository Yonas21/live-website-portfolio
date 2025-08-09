# Yonas Alem – Portfolio (Next.js 14 + Tailwind CSS)

A fast, accessible, and SEO-friendly personal site built with Next.js App Router and Tailwind CSS. It showcases experience, case studies, and projects with dark mode by default, a refined light theme, and a mobile-first bottom navigation.

## Quick start

Prerequisites:
- Node.js 18+ and npm

Install and run locally:
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

Production build:
```bash
npm run build
npm start
```

Lint and type-check:
```bash
npm run lint
```

## Features
- Dark mode (default) + polished light mode (localStorage persistence)
- Mobile bottom navigation with icons, smooth scrolling, and active indicators
- Sections: Hero, About, Metrics, Logos, Experience, Endorsements, How I Work, Case Studies, Projects, Contact
- Accessibility: skip link, motion-reduce support, keyboard-focus rings, semantic headings
- SEO: OpenGraph/Twitter metadata, canonical, JSON‑LD (Person, WebSite, Breadcrumbs)
- PWA basics: `manifest.webmanifest`, maskable SVG icon

## Configuration

### Theme
- Dark by default to prevent FOUC; user preference saved to `localStorage`.
- Implementation in `src/app/theme/ThemeProvider.tsx` (toggles the `dark` class on `<html>` and persists `theme`).

### Loader
- Shown briefly on first visit only. Configure duration with `NEXT_PUBLIC_LOADER_MS` (ms). Default ~900ms.

### Calendar / CTAs
- Hero has a "Book a Call" link to Cal.com. Update link in `src/app/components/Hero.tsx`.
- Email CTA uses `mailto:`; update the address in the same file.

### SEO
- Edit metadata and JSON‑LD in `src/app/layout.tsx`.
- Update the canonical domain in `metadata.metadataBase` and JSON‑LD URLs.

### Icons / Manifest
- App icon: `src/app/icon.svg`
- Manifest: `src/app/manifest.webmanifest`

## Project structure
```
src/app/
  components/
    About.tsx
    AppLoader.tsx
    BottomNav.tsx
    CaseStudies.tsx
    Contact.tsx
    Endorsements.tsx
    Experience.tsx
    Footer.tsx
    Hero.tsx
    HowIWork.tsx
    Logos.tsx
    Metrics.tsx
    Navbar.tsx
    ScrollProgress.tsx
    motion.tsx
    useActiveSection.ts
  theme/ThemeProvider.tsx
  globals.css
  layout.tsx
  page.tsx
  robots.txt
  sitemap.ts
```

## Styling
- Tailwind configured with `darkMode: 'class'` in `tailwind.config.js`.
- Global colors and gradients in `src/app/globals.css`.
- Brand color palette in Tailwind config under `theme.extend.colors.brand`.

## Accessibility checklist
- Skip to content link before main
- Clear focus styles on interactive elements
- Reduced motion: animated blobs honor `prefers-reduced-motion`
- Color contrast verified for key text/button states

## Deployment
- Recommended: Vercel (first-class Next.js support)
- Steps:
  1. Push repo to GitHub
  2. Import into Vercel
  3. Set project name and domain
  4. Build command: `next build` (default)  
     Output: Next.js App Router (static + server)

## Customizing sections
- Content lives inside each component (e.g., skills in `About.tsx`, project list in `Projects.tsx`).
- Case study template in `CaseStudies.tsx`: update problem, solution, results, and the diagram block.

## Notes
- Mobile bottom nav anchors use offset scrolling and `scroll-mt-24` so headings aren’t hidden by fixed UI.
- For additional analytics/monitoring, integrate your preferred provider (e.g., Vercel Analytics, Plausible) in `layout.tsx`.

## License
This project is provided as-is. Feel free to adapt it for your personal site.
