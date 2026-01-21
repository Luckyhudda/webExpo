# webExpo - Service Agency Website

A modern, high-performance service agency website built with Next.js, React, and Tailwind CSS. Designed for conversion optimization with mobile-first approach.

## Features

- 🚀 **Next.js 14** with App Router for optimal performance
- 📱 **Mobile-First Design** - Optimized for 90% mobile traffic
- 🌗 **Light/Dark Theme** - System preference aware with toggle
- ⚡ **Fast Loading** - Lighthouse score focused
- 🎨 **Customizable Theme Color** - Easy to change accent color
- 📞 **WhatsApp Integration** - Direct lead generation
- 📝 **Contact Forms** - Conversion-focused forms
- 🎯 **SEO Optimized** - Built-in SEO best practices
- 📐 **Fully Responsive** - Mobile, Tablet, Desktop, Large Screens (TV)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Customization

### 🎨 Change Theme Color

Edit `tailwind.config.js` and find the `accent` color section. Choose from preset options:

| Color | Style |
|-------|-------|
| 🟣 **Violet** (Current) | Modern & Creative |
| 🟢 **Emerald** | Fresh & Trustworthy |
| 🔵 **Cyan** | Tech & Modern |
| 🟠 **Orange** | Energetic & Bold |
| 🔴 **Rose** | Warm & Inviting |

Simply copy the color values from the comments in `tailwind.config.js`.

### Contact Information

Already configured:
- **Email**: luckyhudda1@gmail.com
- **WhatsApp/Phone**: +91 7976773577

### Content Updates

- **Services**: `components/Services.tsx`
- **Testimonials**: `components/Testimonials.tsx`
- **Process**: `components/Process.tsx`

## Deployment

### Deploy to Netlify (Free)

1. Push to GitHub
2. Connect repo to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Deploy to Vercel (Free)

1. Push to GitHub
2. Import project on Vercel
3. Auto-deploys!

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React + WhatsApp SVG
- **TypeScript:** Full type safety

## Theme System

The site includes a complete light/dark theme:
- Toggle button in header
- Persists in localStorage
- Respects system preference
- Smooth transitions

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles & theme variables
│   ├── layout.tsx       # Root layout with ThemeProvider
│   └── page.tsx         # Homepage
├── components/
│   ├── Header.tsx       # Navigation with theme toggle
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services grid
│   ├── WhyChooseUs.tsx  # Features section
│   ├── LiveProof.tsx    # Metrics & proof
│   ├── Process.tsx      # 4-step process
│   ├── Testimonials.tsx # Client reviews
│   ├── ContactForm.tsx  # Lead capture form
│   ├── FinalCTA.tsx     # Final call-to-action
│   ├── Footer.tsx       # Site footer
│   ├── WhatsAppButton.tsx # Floating WhatsApp
│   └── ThemeToggle.tsx  # Light/dark toggle
├── context/
│   └── ThemeContext.tsx # Theme state management
└── tailwind.config.js   # Theme colors config
```

## License

Free to use for your projects.
