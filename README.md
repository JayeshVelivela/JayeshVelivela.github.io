# Personal Website - Jayesh Velivela

A minimal, technical portfolio website for a software engineer built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Railway** - Deployment platform

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Add required assets:
   - Place a headshot image named `jayesh.jpg` in the `public/` directory
   - Place a resume PDF named `resume.pdf` in the `public/` directory

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment to Railway

### Option 1: Connect GitHub Repository

1. Push this repository to GitHub
2. Go to [Railway](https://railway.app)
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Select your repository
6. Railway will automatically detect Next.js and deploy

### Option 2: Deploy via Railway CLI

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
railway init
railway up
```

### Environment Variables

No environment variables are required for this project.

### Build Configuration

Railway will automatically:
- Detect Next.js
- Run `npm install`
- Run `npm run build`
- Start the app with `npm start`

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── resume/            # Resume page
│   ├── skills/            # Skills page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── Navigation.tsx     # Navigation component
├── public/                # Static assets
│   ├── jayesh.jpg        # Headshot image (add this)
│   └── resume.pdf        # Resume PDF (add this)
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Adding Assets

### Headshot Image

1. Place your headshot image in the `public/` directory
2. Name it `jayesh.jpg`
3. Recommended size: 400x400px or larger (square aspect ratio)
4. The image will be automatically optimized by Next.js

### Resume PDF

1. Place your resume PDF in the `public/` directory
2. Name it `resume.pdf`
3. The resume page will provide a download link

## Customization

### Updating Contact Information

Edit `app/contact/page.tsx` to update email address and other contact information.

### Styling

The site uses Tailwind CSS. Modify `tailwind.config.js` to customize the design system, or edit individual page components to adjust styling.

### Content

All content is in the respective page files:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/projects/page.tsx` - Projects page
- `app/experience/page.tsx` - Experience page
- `app/skills/page.tsx` - Skills page

## License

Private project - All rights reserved.

