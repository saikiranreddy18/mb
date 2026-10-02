# MUMMAS BITE — Premium Interactive Food Brand Website

A beautifully crafted D2C e-commerce website for MUMMAS BITE, a premium Indian healthy snack brand. Built with modern web technologies and designed with emotional storytelling at its core.

## 🎯 Brand Essence

> "The love of a mother, packed into every bite."

MUMMAS BITE is built around the warmth and care of motherly love combined with modern, premium D2C brand aesthetics. The website communicates:

- Motherly warmth and care
- Natural, honest ingredients
- Modern global brand identity
- Premium quality
- Real human storytelling

## 🛠️ Tech Stack

### Frontend
- **Next.js 15+** with App Router & TypeScript
- **Tailwind CSS** for styling with custom design system
- **GSAP** with ScrollTrigger for smooth animations
- **Lenis** for premium smooth scrolling
- **Zustand** for state management (cart)
- **Lucide Icons** for UI icons

### E-commerce
- **Shopify Storefront API** for products, pricing, and cart functionality
- Real-time inventory sync

### Performance
- Next/Image optimization (WebP, AVIF)
- Code splitting and lazy loading
- Lighthouse target: 90+ scores

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── shop/
│       └── page.tsx        # Shop page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── BrandStory.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── IngredientExplorer.tsx
│   │   ├── MothersTouch.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── JourneyTimeline.tsx
│   │   ├── CustomerStories.tsx
│   │   └── CTA.tsx
│   └── providers/
│       └── SmoothScroll.tsx
├── hooks/
│   └── useScrollTrigger.ts
├── lib/
│   └── shopify.ts
├── store/
│   └── cart.ts
└── types/
    └── index.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create .env.local from example
cp .env.example .env.local

# Configure Shopify credentials in .env.local
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build

```bash
npm run build
npm start
```

## 📋 Key Features

### 1. **Hero Section**
- Emotional visual storytelling
- Scroll-triggered animations
- CTA buttons for shopping and story

### 2. **Brand Story**
- Timeline of MUMMAS BITE journey
- From kitchen to brand narrative
- Emotional connection building

### 3. **Product Showcase**
- Interactive product reveal
- Ingredient highlighting
- Verified claims display
- Easy add-to-cart

### 4. **Ingredient Explorer**
- Interactive ingredient cards
- Detailed "why we chose it" explanations
- Hover-triggered detailed views

### 5. **Mother's Touch**
- Emotional brand positioning
- Character representation
- Love as core ingredient messaging

### 6. **Process Timeline**
- Step-by-step production process
- Visual hierarchy
- Quality emphasis

### 7. **Journey Timeline**
- Build-in-public story
- Milestone tracking
- Growth narrative

### 8. **Customer Stories**
- Social proof through testimonials
- Rating system
- Real customer voices

### 9. **Shop**
- Product grid
- Quantity selector
- Cart integration
- Shipping info

## 🎨 Design System

### Colors
- **Primary**: Deep natural green (#1B4D2E)
- **Secondary**: Warm cream (#F5F1EA)
- **Earth**: Warm brown (#8B6F47)
- **Accent**: Muted gold (#C9A876)

### Typography
- **Primary Font**: Sora, Manrope, Plus Jakarta Sans
- **Editorial Font**: DM Serif Display, Instrument Serif
- **Scale**: Responsive typography with clamp()

### Spacing
- **Section padding**: 120px (sm: 60px)
- **Gap ratios**: Maintained across breakpoints
- **Mobile-first approach**: Enhanced on desktop

## 🔄 Animation System

Uses GSAP + ScrollTrigger for:
- Fade-in animations on scroll
- Parallax effects
- Scroll-triggered text reveals
- Smooth product reveals
- Staggered list animations

## 📱 Mobile Experience

- Mobile-first design approach
- Touch-friendly interactive elements
- Simplified navigation
- Fast loading on 3G
- Sticky cart indicator
- Responsive imagery

## 🛍️ Shopify Integration

To enable Shopify integration:

1. Create a Shopify development store
2. Create a Storefront API access token
3. Add credentials to `.env.local`:
   ```
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ENDPOINT=your_endpoint
   NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN=your_token
   ```

## 📊 Analytics Setup

The site is prepared for:
- Google Analytics 4
- Google Search Console
- Meta Pixel
- Shopify Analytics

Configure in environment variables.

## ✅ Performance Targets

- **Lighthouse Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

## 🔐 Security

- Next.js security headers
- HTTPS enforced
- Content Security Policy ready
- No sensitive data in client code

## 📖 SEO

- Semantic HTML
- Meta tags (OG, Twitter)
- Schema markup structure
- Sitemap generation
- Canonical URLs

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Other platforms
- Works on any Node.js hosting
- Static export possible with adjustments
- Environment variables required for Shopify

## 📝 Configuration

### Environment Variables

```
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ENDPOINT=
NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN=
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
NEXT_PUBLIC_BASE_URL=
```

## 🎯 Future Enhancements

- [ ] Customer authentication
- [ ] Order tracking
- [ ] Blog/Recipes section
- [ ] Email newsletter
- [ ] SMS marketing integration
- [ ] Subscription products
- [ ] Product reviews system
- [ ] Wishlist feature

## 📄 License

Private project for MUMMAS BITE

## 🤝 Support

For issues or questions, contact the development team.

---

**Built with ❤️ for MUMMAS BITE**

*Made with a mother's love.*
# Deployed to GitHub Pages
