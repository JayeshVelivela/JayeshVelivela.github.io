# Jayesh Velivela Portfolio

An interactive personal portfolio for Jayesh Velivela, built with Next.js, TypeScript, and Tailwind CSS, and deployed with GitHub Pages.

Live site:

```text
https://jayeshvelivela.github.io
```

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Static export for GitHub Pages
- GitHub Actions deployment

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

The static export is generated in `out/`.

## Content Updates

Most portfolio content lives in:

```text
lib/portfolio.ts
```

Update that file to change the hero copy, current snapshot, projects, experience, skills, links, and resume-driven content across the site.

Public assets:

```text
public/jayesh.jpg
public/Jayesh_Velivela_Resume.pdf
```

## Deploying

This repo includes `.github/workflows/deploy.yml`, which deploys automatically when changes are pushed to `main`.

```bash
git status
git add .
git commit -m "Refresh portfolio site"
git push origin main
```

Then check the GitHub `Actions` tab. When the `Deploy to GitHub Pages` workflow succeeds, the site will update at `https://jayeshvelivela.github.io`.

## Project Structure

```text
app/                     Next.js App Router pages
components/              Shared React components
lib/portfolio.ts         Resume-backed portfolio content
public/                  Static image and resume assets
.github/workflows/       GitHub Pages deployment workflow
```
