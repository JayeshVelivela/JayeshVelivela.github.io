# Deployment Guide - Railway

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Repository name: `personal-website` (or any name you prefer)
3. Make it **Public** (or Private if you prefer)
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd /Users/jay/Documents/PersonalWebsite
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 3: Deploy to Railway

### Option A: Deploy from GitHub (Recommended)

1. Go to [Railway](https://railway.app)
2. Sign up/Login with your GitHub account
3. Click **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. Select your `personal-website` repository
6. Railway will automatically detect Next.js and start deploying

### Option B: Deploy via Railway CLI

1. Install Railway CLI:
```bash
npm i -g @railway/cli
```

2. Login to Railway:
```bash
railway login
```

3. Initialize and deploy:
```bash
cd /Users/jay/Documents/PersonalWebsite
railway init
railway up
```

## Step 4: Configure Railway

Railway should automatically:
- Detect Next.js
- Install dependencies (`npm install`)
- Build the project (`npm run build`)
- Start the app (`npm start`)

### If you need to configure manually:

1. In Railway dashboard, go to your project
2. Click on **Settings**
3. Under **Build & Deploy**:
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Output Directory: `.next`

## Step 5: Get Your Live URL

1. Once deployed, Railway will provide a URL like: `https://your-project-name.up.railway.app`
2. You can also add a custom domain in Railway settings

## Step 6: Environment Variables

No environment variables are needed for this project, but if you add any later:
1. Go to your Railway project
2. Click **Variables**
3. Add your environment variables

## Troubleshooting

### Build Fails
- Check Railway logs for errors
- Ensure `package.json` has correct scripts
- Verify Node.js version (Railway uses Node 18+ by default)

### Site Not Loading
- Check if build completed successfully
- Verify the start command is `npm start`
- Check Railway logs for runtime errors

### Image Not Showing
- Ensure `public/jayesh.jpg` is committed to GitHub
- Check file path is correct (`/jayesh.jpg`)

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

Railway will automatically redeploy when you push to the main branch!

