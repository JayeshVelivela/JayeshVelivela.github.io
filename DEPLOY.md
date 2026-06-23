# GitHub Pages Deployment Guide

This site is configured for GitHub Pages at:

```text
https://jayeshvelivela.github.io
```

The repository should be named:

```text
JayeshVelivela.github.io
```

## One-Time GitHub Setup

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Save the setting.

The workflow in `.github/workflows/deploy.yml` will build the static Next.js export and publish the `out/` folder automatically.

## Push Updates

Because ZIP downloads do not include Git history, the safest way to push this update back to your live site is to copy it into a fresh clone of your real repository.

```bash
cd ~/Desktop
git clone https://github.com/JayeshVelivela/JayeshVelivela.github.io.git
rsync -av --delete --exclude ".git" /path/to/updated/JayeshVelivela.github.io-main/ JayeshVelivela.github.io/
cd JayeshVelivela.github.io
git status
git add .
git commit -m "Refresh portfolio site"
git push origin main
```

Replace `/path/to/updated/JayeshVelivela.github.io-main/` with the folder containing this edited site.

After the push, open the `Actions` tab in GitHub and wait for the `Deploy to GitHub Pages` workflow to finish. The live site usually updates in a couple of minutes.

## Local Checks

```bash
npm install
npm run dev
```

Then visit:

```text
http://localhost:3000
```

For a production build check:

```bash
npm run build
```

## Troubleshooting

- If the site does not update, check the GitHub `Actions` tab for a failed workflow.
- If the site shows a 404, confirm the repository is named `JayeshVelivela.github.io` and Pages is set to `GitHub Actions`.
- If the image or resume is missing, confirm `public/jayesh.jpg` and `public/Jayesh_Velivela_Resume.pdf` were committed.
