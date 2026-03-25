# S.M. Yarns — Premium Corporate Website

Production-grade animated corporate website for S.M. Yarns, a textile yarn supplier.

---

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- React 18
- TailwindCSS 3
- Framer Motion 11
- TypeScript

### Backend
- Node.js + Express
- Nodemailer (SMTP email)
- express-validator
- Helmet + CORS + Rate Limiting

---

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Frontend
```bash
cd frontend
cp .env.local.example .env.local
npm install
npm run dev
# → http://localhost:3000
```

### Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your SMTP credentials
npm install
npm run dev
# → http://localhost:5000
```

---

## Deployment

### Frontend → Vercel
```bash
cd frontend
npx vercel
```
Set environment variable: `NEXT_PUBLIC_API_URL` = your backend URL

### Backend → Railway / Render
Push to GitHub, connect to Railway or Render. Set env vars from `.env.example`.

---

## Project Structure

```
sm-yarns/
├── frontend/
│   ├── public/
│   │   ├── images/           # Product & hero images
│   │   ├── icons/            # Favicon, apple-touch-icon
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── app/              # Next.js App Router pages
│   │   │   ├── layout.tsx    # Root layout (meta, fonts, nav, footer)
│   │   │   ├── page.tsx      # Home page
│   │   │   ├── about/
│   │   │   ├── products/
│   │   │   ├── applications/
│   │   │   ├── logistics/
│   │   │   ├── contact/
│   │   │   └── privacy/
│   │   ├── components/
│   │   │   ├── ui/           # Logo, Icons, Reveal, Counter, WhatsApp
│   │   │   ├── layout/       # Navbar, Footer
│   │   │   └── sections/     # Hero, Stats, Products, Apps, Why, CTA...
│   │   ├── data/             # products.ts, company.ts (editable JSON)
│   │   ├── hooks/            # useScrollY, useAnimatedCounter, useMediaQuery
│   │   ├── lib/              # utils, API client
│   │   └── styles/           # globals.css (Tailwind + custom)
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── index.js          # Express server entry
│   │   ├── routes/           # contact.js, newsletter.js
│   │   ├── controllers/      # contactController.js, newsletterController.js
│   │   ├── middleware/        # rateLimiter.js, validate.js
│   │   ├── config/           # email.js (SMTP transporter)
│   │   └── templates/        # contactEmail.js (HTML templates)
│   ├── .env.example
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Customization Guide

### Products
Edit `frontend/src/data/products.ts` — add, remove, or edit products as JSON objects.

### Company Info
Edit `frontend/src/data/company.ts` — all text, stats, testimonials, and contact info.

### Theme Colors
Edit `frontend/tailwind.config.ts` — primary, secondary, accent colors and fonts.

### Images
Replace files in `frontend/public/images/` with your own. Reference in components.

### Logo
Edit `frontend/src/components/ui/Logo.tsx` — replace SVG or swap for an `<img>` tag.

---

## Features
- 7 fully animated pages with Framer Motion
- Scroll-reveal animations on all sections
- Animated stat counters
- Horizontal testimonial carousel
- Expandable product cards
- Responsive mobile menu
- Sticky navbar with blur on scroll
- Floating WhatsApp button
- Contact form with backend email API
- Newsletter subscription
- Full SEO (meta, OG, JSON-LD, sitemap, robots)
- Rate limiting and input validation
- HTML email templates with auto-reply

---

## License
Private — S.M. Yarns. All rights reserved.
