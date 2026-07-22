# System patterns

## Architecture
- Vite SPA with React Router (`/` Home; sections via hash anchors)
- Presentational section components under `src/components/`
- Content separated into `src/data/` (company, projects, services)
- Shared `ScrollReveal` for Framer Motion viewport animations

## Design tokens
- Defined in `src/index.css` via Tailwind `@theme`
- Accent: electric blue `#2B7FFF` (logo-aligned)
- Fonts: Space Grotesk (display) + DM Sans (body)

## Contact
- Client validation + `mailto:` submit (no backend)
