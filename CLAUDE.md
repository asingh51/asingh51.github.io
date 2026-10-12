# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio/resume site (Gatsby 5 + React 18 + Tailwind), statically built and deployed to GitHub Pages at `asingh51.github.io`.

## Commands

```bash
npm install
npm run develop   # dev server at http://localhost:8000 (binds 0.0.0.0)
npm run build     # production build to public/
npm run serve     # serve the production build locally
npm run clean     # wipe Gatsby's .cache/ and public/ (use when develop/build misbehaves)
npm run format    # prettier --write . (tailwind class sorting plugin enabled)
```

There is no test suite or lint script configured (eslint is a devDependency but there's no `lint` script or config file — don't assume one exists).

## Deployment

Pushing to `main` triggers `.github/workflows/gatsby.yml`: builds with `npm run build` (injecting `GATSBY_EMAILJS_*` secrets from the repo's GitHub Actions secrets) and publishes `public/` to GitHub Pages via `actions/deploy-pages`. There's no staging environment — a push to `main` is a production deploy.

## Architecture

**Routing is file-based**, Gatsby's default: every file in `src/pages/**` becomes a route (`src/pages/about.jsx` → `/about`). The one exception is `/resume`, which `gatsby-node.js` rewrites with a wildcard `matchPath` (`/resume/*`) so `src/pages/resume.jsx` can run its own client-only `@reach/router` `Router` internally (for `/resume/:profileKey`). `src/pages/leadership.jsx` has its own internal gating logic but is a normal single route.

**Data files are plain JS, not a CMS, and do not auto-generate pages.** `src/data/projects.js` and `src/data/writing.js` are arrays used for list views (the projects grid, the writing index). Each case study/post still needs a **hand-written page component**:
- A project with a `slug` in `projects.js` needs a matching `src/pages/projects/<slug>.jsx`.
- Every entry in `writing.js`'s `posts` needs a matching `src/pages/writing/<slug>.jsx` that wraps its content in `PostLayout`.

Adding to the data array alone will not create a working page — check both places when adding or renaming content.

**Passcode gate (not real security).** `leadership.jsx` and the TPM resume variant in `resume.jsx` are gated by `src/utils/passcode.js`: a 6-digit OTP is generated client-side, stored in `sessionStorage` with a 15-minute TTL, and verified entirely in the browser — there is no server or database involved. "Requesting a code" (`RequestPasscodeButton.jsx`) emails the site owner via EmailJS with the OTP; the owner manually relays it back to the visitor out-of-band. Don't mistake this for an auth system — it's a friction/curation gate, and the OTP is visible to anyone who inspects `sessionStorage` or network traffic.

**EmailJS wiring.** `GATSBY_EMAILJS_SERVICE_ID`, `GATSBY_EMAILJS_TEMPLATE_ID`, and `GATSBY_EMAILJS_PUBLIC_KEY` must be prefixed `GATSBY_` to be inlined into client bundles by Gatsby. Locally they come from `.env.development` (gitignored); in CI they're injected from GitHub Actions secrets in `gatsby.yml`.

**Dark mode** uses Tailwind's `class` strategy. `SEO.jsx` inlines a synchronous script in `<Head>` that reads `localStorage.theme` / `prefers-color-scheme` and toggles the `dark` class *before* React hydrates, to avoid a flash of the wrong theme. `ThemeToggle.jsx` handles runtime toggling and persists the choice back to `localStorage`.

**Shared layout**: every page wraps content in `Layout` (Nav + content + Footer); blog-style pages use `PostLayout` (adds the "All writing" back-link, title, date) instead of composing `Layout` directly. `Seo.jsx` (exported per-page as `Head`) pulls `siteMetadata` from `gatsby-config.ts` via `useStaticQuery` and sets title/description/OG/Twitter tags.

## Knowledge graph

`graphify-out/GRAPH_REPORT.md` has a pre-generated map of this repo's structure (god nodes, communities, cross-file relationships) from the `graphify` skill. It's a useful starting point for "how does X relate to Y" questions, but it's a point-in-time snapshot — verify anything load-bearing against the actual source rather than trusting it blindly.
