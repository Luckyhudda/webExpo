# Deployment Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Update Contact Information

Before deploying, update these in all components:

**WhatsApp Number:**
- Search for: `919876543210`
- Replace with your actual WhatsApp number (country code + number, no + or spaces)

**Phone Number:**
- Search for: `+919876543210`
- Replace with your actual phone number

**Email:**
- Search for: `contact@webdevpro.com`
- Replace with your actual email

**Company Name:**
- Search for: `WebDev Pro`
- Replace with your company name

### 3. Test Locally
```bash
npm run dev
```
Visit `http://localhost:3000` to preview your site.

## Deploy to Netlify (Free)

### Option 1: Git Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up/login
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository

3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Netlify will auto-detect Next.js (the `netlify.toml` file handles this)

4. **Deploy:**
   - Click "Deploy site"
   - Wait for build to complete
   - Your site will be live!

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## Deploy to Vercel (Free - Recommended for Next.js)

### Option 1: Git Integration (Easiest)

1. **Push to GitHub** (same as above)

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings

3. **Deploy:**
   - Click "Deploy"
   - Wait for build
   - Your site is live!

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

## Deploy to GitHub Pages

GitHub Pages requires static export. Update `next.config.js`:

```js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

Then:
```bash
npm run build
# Deploy the 'out' folder to GitHub Pages
```

## Environment Variables (Optional)

If you need environment variables:

1. Create `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_PHONE_NUMBER=+919876543210
NEXT_PUBLIC_EMAIL=contact@webdevpro.com
```

2. Update components to use:
```js
process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
```

3. Add to Netlify/Vercel:
   - Netlify: Site settings → Environment variables
   - Vercel: Project settings → Environment variables

## Custom Domain

### Netlify:
1. Site settings → Domain management
2. Add custom domain
3. Follow DNS instructions

### Vercel:
1. Project settings → Domains
2. Add your domain
3. Configure DNS as instructed

## Performance Checklist

Before deploying:

- [ ] Update all contact information
- [ ] Test all forms and CTAs
- [ ] Test on mobile devices
- [ ] Check WhatsApp links work
- [ ] Verify phone numbers are clickable
- [ ] Test contact form submission
- [ ] Run `npm run build` locally to check for errors
- [ ] Optimize any images you add
- [ ] Update meta tags in `app/layout.tsx`

## Post-Deployment

1. **Test Everything:**
   - All CTAs work
   - Forms submit correctly
   - WhatsApp links open with pre-filled message
   - Phone numbers are clickable on mobile
   - Site loads fast
   - Mobile responsive

2. **Set Up Analytics (Optional):**
   - Google Analytics
   - Facebook Pixel
   - Or any other tracking

3. **Monitor Performance:**
   - Use Google PageSpeed Insights
   - Check Lighthouse scores
   - Monitor Core Web Vitals

## Troubleshooting

### Build Fails
- Check Node.js version (18+ required)
- Run `npm install` again
- Check for TypeScript errors: `npm run build`

### WhatsApp Links Don't Work
- Ensure number format: country code + number (no +, spaces, or dashes)
- Example: `919876543210` (India) or `1234567890` (US)

### Images Not Loading
- Use Next.js `Image` component
- Place images in `public/` folder
- Use relative paths: `/image.jpg`

### Styling Issues
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

## Support

For issues:
1. Check Next.js documentation
2. Check Tailwind CSS documentation
3. Review error messages in build logs
4. Test locally first before deploying
