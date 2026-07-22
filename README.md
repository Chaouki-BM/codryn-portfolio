# Codryn Portfolio

Modern dark-mode portfolio site for **Codryn** — React + Vite, Tailwind CSS, React Router, and Framer Motion.

## Before you deploy — replace placeholders

| Placeholder | Where | What to put |
|-------------|--------|-------------|
| `REPO_NAME` | [`vite.config.js`](vite.config.js) `base: '/REPO_NAME/'` | Your GitHub repository name (e.g. `codryn-portfolio`) |
| `FORM_ID` | [`src/data/company.js`](src/data/company.js) `formspreeId` | Your Formspree form id from [formspree.io](https://formspree.io) |
| Custom domain (optional) | [`vite.config.js`](vite.config.js) | If you use a custom domain, **remove** `base` or set `base: '/'` |

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).  
With `base: '/REPO_NAME/'`, local URLs may look like `http://localhost:5173/REPO_NAME/`.

## Build for production

```bash
npm run build
npm run preview
```

Output is in `dist/`.

## Deploy to GitHub Pages

1. Replace `REPO_NAME` and `FORM_ID` (see table above).
2. Push this project to a GitHub repository whose name matches `REPO_NAME`.
3. Deploy:

```bash
npm run deploy
```

This runs `predeploy` (`npm run build`) then publishes `dist/` with `gh-pages`.

4. In the GitHub repo: **Settings → Pages →** set source to the `gh-pages` branch (if prompted).
5. Site URL: `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Customize content

| What | File |
|------|------|
| About, email, phone, socials, Formspree id | `src/data/company.js` |
| Projects (add/edit cards) | `src/data/projects.js` |
| Services | `src/data/services.js` |
| Logo | `public/logo-on-dark.png` / `public/logo.png` |

### Contact form

The form posts to Formspree. Set `formspreeId` in `src/data/company.js` (replace the `FORM_ID` placeholder).

## Stack

- React 18 + Vite 5
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router
- Framer Motion
- Formspree (contact)
- gh-pages (GitHub Pages deploy)
