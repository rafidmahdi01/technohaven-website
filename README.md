
  # TECHNOHAVEN MALAYSIA - Enterprise Technology Solutions Website

A modern, high-performance React website for TECHNOHAVEN MALAYSIA featuring advanced animations, scroll-driven effects, and enterprise-grade architecture.

## 🏗 Architecture & Tech Stack

### Core Framework
- **React 18** - Component-based UI with hooks
- **React Router v7** - Client-side routing for multi-page navigation
- **TypeScript** - Full type safety throughout the codebase
- **Vite 6.3.5** - Lightning-fast build tool with HMR

### Animation & Visual Effects
- **GSAP 3.14.2** - Advanced animation library with ScrollTrigger plugin
- **Framer Motion** - Complementary motion library for component animations
- **Canvas-based particle effects** - Interactive background animations

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Custom glassmorphism effects** - Frosted glass UI components
- **Lucide React** - Icon library for consistent UI elements
- **Shadcn UI Components** - Pre-built accessible components

## 🎨 How It Was Built

### 1. Page Routing Architecture
```
Routes Structure:
- "/" → HomeAbout (Combined Home + About page)
- "/services" → Services (Enterprise solutions showcase)
- "/contact" → Contact (Client inquiries)
- "/landing" → TechnohavenLanding (Preloader + special offer page)
```

Custom routing eliminates separate /about route by combining content into a single optimized page.

### 2. GSAP Animation System

**Custom Animation Hooks** (`src/app/hooks/useGsapAnimation.ts`):
- `useFadeInOnScroll()` - Elements fade in when scrolling into view
- `useSlideInOnScroll()` - Directional slide animations tied to scroll position
- `useStaggerAnimationOnScroll()` - Multiple children animate sequentially with delays
- `useParallexScroll()` - Depth-based parallax effects
- `useHoverAnimation()` - Imperative hover state transformations

Each hook uses ScrollTrigger for scroll-based triggers and returns cleanup functions for proper React lifecycle management.

### 3. Scroll-Driven Footer Animation

The Footer component implements continuous scroll-position-driven animation:
- Calculates scroll progress (0-1) based on footer's viewport position
- Applies `translateY()` transformation to create curtain reveal effect
- Uses passive event listeners for performance optimization
- GPU-accelerated with `willChange: transform`

### 4. Component Structure

**Layout Components**:
- `Header.tsx` - Fixed navigation with Technohaven logo and dropdown menus
- `Footer.tsx` - Scroll-driven curtain reveal with company info
- `Root.tsx` - Layout wrapper with header/footer

**Page Components**:
- `HomeAbout.tsx` - Hero, stats, service highlights, values, team
- `Services.tsx` - Detailed enterprise solutions showcase
- `Contact.tsx` - Client inquiry forms
- `TechnohavenLanding.tsx` - Preloader with logo animation + particle background

**Reusable UI Components** (`src/app/components/ui/`):
- 40+ Shadcn-based components
- All typed with TypeScript

### 5. Logo & Branding Integration

**Asset Management**:
- Logo stored in `public/technohaven_logo.png` for direct serving
- Static asset path used throughout components
- Integrated in Header, Footer, and Preloader
- Resolved Figma asset import issues with public URL approach

### 6. Glass Morphism Design System

Multiple glass effect presets for visual consistency:
- `GLASS` - Standard frosted glass (28% opacity, 60px blur)
- `HEAVY_GLASS` - Dense glass (35% opacity, 80px blur)
- `NAV_GLASS` - Navigation bar glass (45% opacity, 40px blur)
- `LIGHT_GLASS` - Subtle glass (22% opacity, 40px blur)

## 🚀 Development Workflow

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Starts Vite dev server on `http://localhost:5173/` with HMR enabled.

### Build for Production
```bash
npm run build
```

## 🎯 Page Routes

- **/** - Home + About combined (hero, stats, services, values, team)
- **/services** - Enterprise solutions detailed catalog
- **/contact** - Contact form and inquiry management
- **/landing** - Preloader + special offer page with animations

## ✨ Key Features Implemented

✅ GSAP animation library with 5 custom hooks
✅ Combined Home/About page for optimized UX
✅ Scroll-driven curtain reveal animation (Footer)
✅ Technohaven logo integrated into all major components
✅ Particle network background with mouse interaction
✅ Responsive navigation with dropdown menus
✅ Glass morphism design system
✅ Type-safe component architecture
✅ HMR for fast development iteration
✅ Production-ready build configuration

---

**Built with precision. Engineered for scale. TECHNOHAVEN MALAYSIA.**
  