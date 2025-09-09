# TASK-01 — PWA Baseline (Next.js + TypeScript + Tailwind)

## Goal
Create a mobile-first **PWA** for **LiveWell** that installs to the home screen and runs full-screen. Include a simple Home screen with four tabs: **Today**, **Habits**, **Mood**, **Chat**.

## Requirements
1) **Scaffold app**
   - Next.js (App Router) + **TypeScript** + **Tailwind**.
   - Minimal Home screen with the 4 tabs (mobile-first layout).

2) **Make it a real PWA**
   - Add **manifest.json**: `name: "LiveWell"`, `short_name: "LiveWell"`, `start_url: "/"`, `scope: "/"`, `display: "standalone"`, theme/background colors.
   - Generate icons under `/public/icons` at **192x192** and **512x512**, including **maskable** variants.
   - Add and **register a service worker** that provides offline basics:
     - Network-first for navigations.
     - Cache-first for static assets.

3) **Quality & automation**
   - ESLint + Prettier + **TS strict**.
   - npm scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `test`.
   - Add a tiny test (e.g., Home renders).
   - Add a GitHub Actions workflow that runs **lint**, **typecheck**, and **test** on pull requests (Node 20).

4) **Evidence in the PR**
   - **Lighthouse PWA score ≥ 80** (attach screenshot).
   - Paste test output and brief notes on what was cached for offline.

## PR expectations
- Keep the PR focused on TASK-01 and **link this file** in the description.
- Include 1–2 screenshots/GIF (Home screen + install prompt or installed view).

## Out of scope (future tasks)
- Auth, database, or AI chat (Liv) — do not add yet.

## Notes
- Do **not** commit any real secrets.
- Everything should build and run with defaults (no env vars needed for this task).
