# GitHub Pages Deployment Setup

## Repository Setup

**Important**: This project is configured to deploy to GitHub Pages at:
- **URL**: https://jayeshvelivela.github.io
- **Repository Name Required**: `JayeshVelivela.github.io`

If your repository is currently named differently (e.g., `personal-website`), you need to rename it:

1. Go to your repository on GitHub
2. Click **Settings** → **General**
3. Scroll to **Repository name**
4. Rename to: `JayeshVelivela.github.io`
5. Click **Rename**

## What Was Configured

### 1. Next.js Static Export (`next.config.js`)
- Changed `output: 'standalone'` → `output: 'export'` (enables static export)
- Set `images.unoptimized: true` (required for static export)
- Set `basePath: ''` (deploy to root domain)
- Set `assetPrefix: ''` (assets load from root)

### 2. Build Script (`package.json`)
- Added `export` script (alias for `next build`)
- Build output goes to `/out` directory

### 3. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Automatically builds on push to `main` branch
- Uses official GitHub Pages actions
- Deploys static files from `/out` directory
- Includes caching for faster builds

### 4. Updated Metadata (`app/layout.tsx`)
- OpenGraph URL updated to GitHub Pages URL

### 5. Updated robots.txt
- Sitemap URL updated to GitHub Pages domain

## Deployment Process

### First-Time Setup

1. **Rename Repository** (if needed)
   - Repository must be named: `JayeshVelivela.github.io`

2. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select: **GitHub Actions**
   - Save

3. **Push Code**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push origin main
   ```

4. **Monitor Deployment**
   - Go to **Actions** tab in GitHub
   - Watch the workflow run
   - Should complete in 2-3 minutes

5. **Access Your Site**
   - After deployment completes, visit: https://jayeshvelivela.github.io
   - May take 1-2 minutes to propagate

### Automatic Deployments

After initial setup, every push to `main` will automatically:
1. Build the Next.js static export
2. Deploy to GitHub Pages
3. Update the live site

## Verification Checklist

After deployment, verify:
- [ ] Site loads at https://jayeshvelivela.github.io
- [ ] No 404 errors
- [ ] Images load correctly (especially `/jayesh.jpg`)
- [ ] Navigation links work (smooth scroll to sections)
- [ ] All pages accessible
- [ ] Dark mode works
- [ ] Responsive design works on mobile

## Troubleshooting

### Site Not Loading
- Check GitHub Actions for errors
- Verify repository name is exactly `JayeshVelivela.github.io`
- Ensure GitHub Pages is enabled in Settings → Pages
- Wait 2-3 minutes after deployment

### Images Not Loading
- Verify `public/jayesh.jpg` is committed to repository
- Check browser console for 404 errors
- Ensure image paths are relative (starting with `/`)

### Build Fails
- Check Actions tab for error messages
- Verify Node.js version (workflow uses Node 20)
- Ensure all dependencies are in `package.json`

### 404 Errors
- Verify `basePath` is empty string in `next.config.js`
- Check that all links use relative paths
- Ensure GitHub Pages source is set to "GitHub Actions"

## File Structure

```
.github/
  workflows/
    deploy.yml          # GitHub Actions workflow
next.config.js          # Static export configuration
package.json            # Build scripts
out/                    # Generated static files (gitignored)
```

## Notes

- The `/out` directory is gitignored (generated during build)
- GitHub Actions builds and deploys automatically
- No manual deployment steps needed
- Site updates within 2-3 minutes of pushing to main

