# FreightLabs Design System Documentation

> **Last Updated:** December 2024
> **Version:** 1.0.0
> **Purpose:** Comprehensive design reference for FreightLabs brand and UI implementation

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Component Library](#component-library)
6. [Animation & Motion](#animation--motion)
7. [UI Patterns](#ui-patterns)
8. [Responsive Design](#responsive-design)
9. [Dark Mode](#dark-mode)
10. [Iconography](#iconography)

---

## Brand Identity

### Logo
- **File:** `freightlabs-no_background.png`
- **Usage:**
  - Header: `h-12` (48px height)
  - Footer: `h-10` (40px height)
  - Favicon: Original size
- **Colors in Logo:** Navy blue (#0F172A to #1E3A8A) with orange (#F97316) and blue (#3B82F6) circuit design

### Tagline
**Primary:** "Engineering Smarter Freight Solutions"
**Secondary:** "The Science of Moving Freight"

### Brand Voice
- Technical, precise, scientific
- Data-driven, not opinion-based
- Professional yet approachable
- Innovation-focused

---

## Color Palette

### Primary Brand Colors

#### Blue (Primary Action Color)
```css
brand-blue: #3B82F6          /* Main blue - CTAs, links, primary actions */
brand-blue-hover: #2563EB    /* Hover state for blue elements */
```
**Usage:**
- Primary CTAs for shippers/brokers
- Links and interactive elements
- Icons representing technology/AI
- Accent color in light backgrounds

#### Orange (Secondary Action Color)
```css
brand-orange: #F97316        /* Main orange - Secondary CTAs, highlights */
brand-orange-hover: #EA580C  /* Hover state for orange elements */
```
**Usage:**
- Main CTAs and conversion buttons
- Attention-grabbing highlights
- Accent elements
- Important statistics/data points

#### Navy (Background & Text)
```css
brand-navy: #0F172A          /* Dark backgrounds, hero sections */
brand-navy-light: #1E293B    /* Slightly lighter variant for layering */
```
**Usage:**
- Dark mode backgrounds
- Hero section gradients
- Card backgrounds in dark mode
- High-contrast text areas

### Neutral Colors

#### Slate Palette
```css
brand-slate-50: #F8FAFC      /* Lightest background */
brand-slate-400: #94A3B8     /* Muted text, secondary info */
brand-slate-500: #64748B     /* Medium text */
brand-slate-600: #475569     /* Dark text */
```

#### Azure (Light Blue Background)
```css
brand-azure: #EFF6FF         /* Light blue backgrounds, badges */
```

### Semantic Colors

#### Success/Green (Carriers)
```css
green-600: #16A34A           /* Carrier-focused features */
green-500: #22C55E           /* Icons, success states */
emerald-600: #059669         /* Gradient partner to green */
```
**Usage:**
- RouteForge™ branding
- Carrier-specific sections
- Success indicators
- Positive metrics

#### Amber/Gold (3PLs & Brokers)
```css
amber-500: #F59E0B           /* 3PL/Broker features */
amber-600: #D97706           /* Hover states */
orange-600: #EA580C          /* Gradient partner */
```

### HSL-Based Theme Colors

#### Light Mode
```css
--background: 210 40% 98%
--foreground: 222 47% 11%
--card: 0 0% 100%
--card-foreground: 222 47% 11%
--primary: 217 91% 60%
--muted: 210 40% 96%
--muted-foreground: 215 16% 47%
--accent: 213 94% 97%
--border: 214 32% 91%
--ring: 217 91% 60%
```

#### Dark Mode
```css
--background: 222 47% 11%
--foreground: 210 40% 98%
--card: 217 33% 17%
--card-foreground: 210 40% 98%
--primary: 217 91% 60%
--muted: 217 33% 17%
--muted-foreground: 215 20% 65%
--accent: 217 33% 17%
--border: 217 33% 17%
```

---

## Typography

### Font Stack
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
             Roboto, sans-serif
```

### Type Scale

#### Headings
```css
h1 (Hero):     text-5xl md:text-7xl (48px / 72px desktop)
h2 (Section):  text-4xl md:text-5xl (36px / 48px desktop)
h3 (Card):     text-2xl (24px)
h4 (Feature):  text-lg (18px)
```

#### Body Text
```css
Large:    text-xl (20px) - Hero descriptions
Base:     text-base (16px) - Standard paragraph
Small:    text-sm (14px) - Captions, metadata
Tiny:     text-xs (12px) - Labels, helper text
```

### Font Weights
```css
font-bold:      700 - Headlines, CTAs
font-semibold:  600 - Subheadings, emphasis
font-medium:    500 - Body emphasis, labels
font-normal:    400 - Body text
```

### Line Heights
```css
leading-tight:   1.25 - Headlines
leading-relaxed: 1.625 - Body text (improved readability)
leading-none:    1 - Tight headlines
```

---

## Spacing & Layout

### Spacing System (8px Base)
```css
0:    0px
1:    0.25rem (4px)
2:    0.5rem (8px)
3:    0.75rem (12px)
4:    1rem (16px)
5:    1.25rem (20px)
6:    1.5rem (24px)
8:    2rem (32px)
12:   3rem (48px)
16:   4rem (64px)
20:   5rem (80px)
24:   6rem (96px)
```

### Container
```css
container: mx-auto px-4
max-width: 1280px (default Tailwind xl breakpoint)
```

### Section Spacing
```css
py-20: 5rem (80px) - Standard section padding
py-24: 6rem (96px) - Large section padding
mb-8:  2rem (32px) - Section element spacing
mb-12: 3rem (48px) - Large element spacing
gap-8: 2rem (32px) - Grid gaps
gap-12: 3rem (48px) - Large grid gaps
```

### Grid Patterns
```css
/* Three-column cards */
grid-cols-1 md:grid-cols-3 gap-8

/* Two-column feature sections */
grid-cols-1 lg:grid-cols-2 gap-12

/* Four-column footer */
grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8
```

---

## Component Library

### Buttons

#### Primary Button (Orange)
```jsx
className="bg-brand-orange hover:bg-brand-orange-hover
           text-white px-8 py-6 text-lg rounded-xl
           shadow-lg hover:shadow-xl transition-all"
```
**Usage:** Main conversion CTAs

#### Secondary Button (Blue)
```jsx
className="bg-gradient-to-r from-brand-blue to-brand-blue-hover
           hover:from-brand-blue-hover hover:to-blue-700
           text-white px-6 py-5 rounded-xl"
```
**Usage:** Secondary actions, shipper-focused CTAs

#### Outline Button
```jsx
className="border-2 hover:bg-accent px-8 py-6 text-lg rounded-xl"
```
**Usage:** Tertiary actions, "Learn More" buttons

#### Gradient Buttons
```jsx
/* Carrier/RouteForge */
from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700

/* Shipper/LoadForge */
from-brand-blue to-brand-blue-hover hover:from-brand-blue-hover hover:to-blue-700

/* 3PL/Broker */
from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700
```

#### Button Sizes
```css
Default: h-10 px-4 py-2
Small:   h-9 px-3
Large:   h-11 px-8
Icon:    h-10 w-10
```

### Cards

#### Base Card
```jsx
className="rounded-lg border bg-card text-card-foreground shadow-sm"
```

#### Feature Card (With Hover)
```jsx
className="p-8 h-full border-2 hover:border-[color]
           transition-all hover:shadow-xl group
           relative overflow-hidden"
```

#### Stat Card
```jsx
className="p-4 bg-card rounded-xl border border-border"
```

#### Gradient Accent Card
```jsx
className="bg-gradient-to-br from-[color] to-[color]
           rounded-2xl p-8 text-white relative overflow-hidden"
```

#### Card Elements
```css
CardHeader:     p-6 space-y-1.5
CardTitle:      text-2xl font-semibold
CardContent:    p-6 pt-0
CardFooter:     flex items-center p-6 pt-0
```

### Badges/Pills

#### Info Badge
```jsx
className="inline-flex items-center gap-2 px-4 py-2
           rounded-full bg-card backdrop-blur-sm
           border border-brand-blue/20 shadow-sm"
```

#### Category Badge
```jsx
className="px-4 py-2 rounded-full
           bg-gradient-to-r from-[color] to-[color]
           text-white text-sm font-semibold"
```

### Icons

#### Icon Container (Floating)
```jsx
className="w-14 h-14 rounded-xl
           bg-gradient-to-br from-[color] to-[color]
           flex items-center justify-center
           group-hover:scale-110 transition-transform
           shadow-lg shadow-[color]/20"
```

#### Icon Sizes
```css
w-4 h-4:   16px - Inline text icons
w-5 h-5:   20px - Button icons
w-6 h-6:   24px - Small feature icons
w-8 h-8:   32px - Medium feature icons
w-10 h-10: 40px - Large feature icons
w-16 h-16: 64px - Hero/decorative icons
```

### Forms

#### Input
```jsx
className="flex h-10 w-full rounded-md border border-input
           bg-background px-3 py-2 text-sm
           ring-offset-background
           focus-visible:outline-none focus-visible:ring-2
           focus-visible:ring-ring focus-visible:ring-offset-2"
```

#### Label
```jsx
className="text-sm font-medium leading-none
           peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
```

---

## Animation & Motion

### Framer Motion Patterns

#### Fade In Up
```jsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

#### Fade In Horizontal
```jsx
// From Left
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}

// From Right
initial={{ opacity: 0, x: 50 }}
animate={{ opacity: 1, x: 0 }}
```

#### Scale In
```jsx
initial={{ scale: 0.9, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.5 }}
```

#### Staggered Children
```jsx
transition={{ delay: 0.1 * index }}
```

### Hover Animations

#### Scale on Hover
```jsx
whileHover={{ scale: 1.1 }}
className="group-hover:scale-110 transition-transform"
```

#### Translate Icon
```jsx
className="group-hover:translate-x-1 transition-transform"
```

### Background Animations

#### Floating Elements
```jsx
animate={{
  y: [0, -30, 0],
  rotate: [0, 10, 0]
}}
transition={{
  duration: 6,
  repeat: Infinity,
  ease: 'easeInOut'
}}
```

#### Pulse Circles
```jsx
className="animate-pulse delay-150"
// Combined with multiple nested circles at different scales
```

#### Blob Animation
```jsx
animate={{
  scale: [1, 1.2, 1],
  opacity: [0.3, 0.5, 0.3],
}}
transition={{
  duration: 8,
  repeat: Infinity,
  ease: 'easeInOut',
}}
```

### Transition Classes
```css
transition-all:       All properties
transition-colors:    Color changes
transition-transform: Scale, rotate, translate
transition-shadow:    Shadow changes

Duration: duration-300 (default for most interactions)
Easing: ease-in-out, ease-out
```

---

## UI Patterns

### Hero Section

#### Structure
```
- Full-height section (min-h-screen)
- Gradient background: from-brand-slate-50 via-brand-azure to-white
- Grid pattern overlay
- Floating animated icons
- Two-column layout (content + visual)
- Badge + Headline + Description + Stats
```

#### Background Pattern
```jsx
className="bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
           linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
           bg-[size:14px_24px]"
```

### Stat Display
```jsx
<div className="flex items-center gap-8">
  <div>
    <div className="text-3xl font-bold">
      <AnimatedCounter end={10} suffix="k+" />
    </div>
    <div className="text-sm text-muted-foreground">Label</div>
  </div>
  <div className="h-12 w-px bg-border" /> {/* Divider */}
</div>
```

### Feature Comparison Cards

#### Three-Column Layout
- Carriers (Green theme)
- Shippers (Blue theme)
- 3PLs/Brokers (Amber theme)

#### Card Structure
```
- Gradient accent corner
- Icon with shadow
- Title + Subtitle (colored)
- Description
- Feature checklist (CheckCircle2 icons)
- CTA button matching theme
```

### Product Showcase Sections

#### Two-Column Feature Layout
```
- Badge with product name
- Text content (left/right alternating)
- Gradient stat card (opposite side)
- Two feature boxes in grid
- Highlight callout box
- Dual CTAs (primary + outline)
```

### Gradient Overlays

#### Pattern Background
```jsx
className="bg-[linear-gradient(45deg,transparent_25%,
           rgba(255,255,255,.05)_25%,
           rgba(255,255,255,.05)_50%,transparent_50%,
           transparent_75%,rgba(255,255,255,.05)_75%,
           rgba(255,255,255,.05))]
           bg-[length:20px_20px]"
```

### Border Accents
```jsx
border-l-4 border-brand-orange  // Left accent border
border-t border-border          // Top divider
border-2 hover:border-[color]   // Hover state border
```

---

## Responsive Design

### Breakpoints
```css
sm:  640px  - Small tablets
md:  768px  - Tablets
lg:  1024px - Small desktops
xl:  1280px - Desktops
2xl: 1536px - Large desktops
```

### Common Responsive Patterns

#### Grid Columns
```css
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
grid-cols-1 lg:grid-cols-2
```

#### Text Sizing
```css
text-4xl md:text-5xl    // Headlines
text-xl md:text-2xl     // Subheadlines
```

#### Spacing
```css
py-12 lg:py-20          // Section padding
gap-8 lg:gap-12         // Grid gaps
px-4 md:px-8            // Horizontal padding
```

#### Layout Shifts
```css
flex-col md:flex-row            // Stack to row
items-start md:items-center     // Alignment changes
text-left md:text-center        // Text alignment
```

#### Navigation
```css
hidden lg:flex     // Desktop navigation
lg:hidden          // Mobile menu
```

---

## Dark Mode

### Implementation
```jsx
// Root level
<html className={isDark ? 'dark' : ''}>

// Tailwind variants
dark:bg-brand-navy
dark:text-brand-slate-50
dark:border-gray-700
```

### Dark Mode Color Mapping
```
Light → Dark Transformations:
- brand-slate-50 → brand-navy
- brand-azure → brand-navy-light
- white → brand-navy
- gray-100 → gray-800
- border-gray-200 → border-gray-700
```

### Opacity Adjustments
```css
Light mode: opacity-20, opacity-50
Dark mode: opacity-10, opacity-30 (reduced for subtlety)
```

---

## Iconography

### Icon Library
**Package:** `lucide-react`

### Icon Categories

#### Logistics Icons
- `Truck` - Carriers, fleet operations
- `Package` - Shippers, cargo
- `Route` - Routing, pathfinding
- `Network` - Connectivity, ecosystem

#### Technology Icons
- `Brain` - AI, intelligence
- `Cpu` - Processing, automation
- `CircuitBoard` - Technology
- `Activity` - Live data, real-time

#### Business Icons
- `Building2` - 3PLs, brokers
- `TrendingUp` - Growth, metrics
- `BarChart3` - Analytics, data
- `Target` - Precision, goals

#### UI Icons
- `CheckCircle2` - Completed, verified
- `ArrowRight` - CTAs, navigation
- `Zap` - Speed, power
- `Shield` - Security, compliance
- `Clock` - Time savings
- `Gauge` - Performance, metrics

### Icon Usage
```jsx
// Inline with text
<Brain className="w-4 h-4 text-brand-blue" />

// Feature icons
<Truck className="w-8 h-8 text-green-600 mb-3" />

// Hero decorative
<Package className="w-20 h-20 text-brand-orange" />
```

---

## Border Radius System

```css
--radius: 0.5rem (8px)

rounded-sm:   calc(var(--radius) - 4px)  // 4px
rounded-md:   calc(var(--radius) - 2px)  // 6px
rounded-lg:   var(--radius)              // 8px
rounded-xl:   0.75rem                    // 12px
rounded-2xl:  1rem                       // 16px
rounded-3xl:  1.5rem                     // 24px
rounded-full: 9999px                     // Fully rounded
```

### Usage by Component
```
Buttons:      rounded-md to rounded-xl
Cards:        rounded-lg to rounded-2xl
Badges:       rounded-full
Icon containers: rounded-lg to rounded-xl
Sections:     rounded-2xl to rounded-3xl
```

---

## Shadow System

```css
shadow-sm:  0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow:     0 1px 3px 0 rgb(0 0 0 / 0.1)
shadow-md:  0 4px 6px -1px rgb(0 0 0 / 0.1)
shadow-lg:  0 10px 15px -3px rgb(0 0 0 / 0.1)
shadow-xl:  0 20px 25px -5px rgb(0 0 0 / 0.1)
shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
```

### Colored Shadows
```css
shadow-brand-blue/20     // Blue glow
shadow-brand-orange/30   // Orange glow
shadow-green-500/20      // Green glow
```

---

## Key Design Principles

### 1. Color Association
- **Green:** Carriers, revenue, growth
- **Blue:** Technology, intelligence, shippers
- **Orange:** Action, urgency, main CTAs
- **Amber:** Brokers, middlemen, operations

### 2. Hierarchy
- Large bold headlines with gradient text
- Clear visual separation between sections
- Card-based content organization
- Progressive disclosure with expandable sections

### 3. Data-Driven Messaging
- Specific statistics (not generic claims)
- Percentage improvements
- Time savings quantified
- ROI-focused copy

### 4. Micro-interactions
- Hover states on all interactive elements
- Scale transforms (1.05-1.1)
- Color transitions on buttons
- Icon animations on hover
- Smooth page transitions

### 5. Trust Signals
- Badge elements for certifications
- Testimonial sections
- Stat counters with animated numbers
- Compliance indicators

---

## Open Graph / Social Media Assets

### OG Image Specifications
- **File:** `og-image.svg`
- **Dimensions:** 1200x630px
- **Format:** SVG (scalable, small file size)
- **Design Elements:**
  - Navy gradient background (#0F172A → #1E293B)
  - Grid pattern overlay
  - Network visualization with nodes and connections
  - Brand hexagon with circuit design
  - FreightLabs wordmark
  - Tagline: "Engineering Smarter Freight Solutions"
  - Feature badges: RouteForge™, LoadForge™, AI-Powered Tech
  - Brand colors: Blue (#3B82F6) and Orange (#F97316)

### Meta Tags
```html
<meta property="og:image" content="/og-image.svg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## Implementation Notes

### CSS Variables Location
- **File:** `src/index.css`
- **Scope:** `:root` for light mode, `.dark` for dark mode
- **Format:** HSL values for theme colors

### Tailwind Configuration
- **File:** `tailwind.config.js`
- **Extensions:** Custom colors, animations, border radius
- **Plugins:** tailwindcss-animate

### Component Organization
```
src/
├── components/
│   ├── ui/              # Base UI components (Button, Card, Input)
│   ├── layout/          # Layout components (Header, Footer)
│   ├── shared/          # Shared components (AnimatedCounter)
│   └── aceternity/      # Custom advanced components
├── pages/               # Page components
└── lib/                 # Utilities (cn helper)
```

---

## File Reference

### Design Assets
- Logo: `public/freightlabs-no_background.png`
- OG Image: `public/og-image.svg`

### Style Files
- Global CSS: `src/index.css`
- Tailwind Config: `tailwind.config.js`
- Utils: `src/lib/utils.ts`

### Component Files
- Button: `src/components/ui/button.tsx`
- Card: `src/components/ui/card.tsx`
- Header: `src/components/layout/Header.tsx`
- Footer: `src/components/layout/Footer.tsx`

---

## Quick Reference: Common Patterns

### Call-to-Action Button
```jsx
<Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-6 text-lg rounded-xl shadow-lg group">
  Get Started
  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
</Button>
```

### Feature Card with Icon
```jsx
<Card className="p-8 border-2 hover:border-brand-blue transition-all hover:shadow-xl group">
  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue to-brand-blue-hover flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
    <Icon className="w-7 h-7 text-white" />
  </div>
  <h3 className="text-2xl font-bold mb-2">Title</h3>
  <p className="text-muted-foreground">Description</p>
</Card>
```

### Section Header with Badge
```jsx
<div className="text-center mb-16">
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-azure border border-brand-blue/20 mb-6">
    <Icon className="w-4 h-4 text-brand-blue" />
    <span className="text-sm font-semibold text-brand-blue">Badge Text</span>
  </div>
  <h2 className="text-4xl font-bold mb-4">Section Title</h2>
  <p className="text-xl text-muted-foreground">Description</p>
</div>
```

### Gradient Text
```jsx
<span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-blue-hover to-brand-blue">
  Highlighted Text
</span>
```

---

## Version History

**v1.0.0** - December 2024
- Initial design system documentation
- Complete color palette definition
- Typography scale establishment
- Component library documentation
- Animation patterns documented
- Responsive design guidelines
- Dark mode implementation

---

## Advanced Features & Responsive Enhancements

### Smooth Scrolling Implementation

#### Lenis Integration
The project uses Lenis for premium smooth scrolling with heavy physics feel.

**Configuration:**
```jsx
// src/components/layout/Layout.tsx
const lenis = new Lenis({
  lerp: 0.1,              // Smooth interpolation (0.1 = heavy feel)
  wheelMultiplier: 1.1,    // Scroll speed multiplier
  smoothWheel: true,       // Enable smooth wheel scrolling
  smoothTouch: false,      // Disable on touch devices
});
```

**Effect:** Creates a premium, controlled scrolling experience on desktop devices.

### Fluid Typography System

#### Responsive Text Scaling
Text sizes automatically scale between mobile and desktop using CSS `clamp()`:

```css
.text-fluid-sm    { font-size: clamp(0.875rem, 0.8rem + 0.15vw, 1rem); }
.text-fluid-base  { font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem); }
.text-fluid-lg    { font-size: clamp(1.125rem, 1rem + 0.5vw, 1.5rem); }
.text-fluid-xl    { font-size: clamp(1.25rem, 1.1rem + 0.75vw, 1.875rem); }
.text-fluid-2xl   { font-size: clamp(1.5rem, 1.2rem + 1vw, 2.25rem); }
.text-fluid-3xl   { font-size: clamp(1.875rem, 1.5rem + 1.5vw, 3rem); }
.text-fluid-4xl   { font-size: clamp(2.25rem, 1.8rem + 2vw, 3.75rem); }
```

**Usage:**
```jsx
<AnimatedHeading as="h1" className="text-fluid-4xl">
  Your Headline
</AnimatedHeading>
```

**Mobile Scaling:** Automatically reduces header sizes by ~20% on mobile devices.

### Theme-Aware Components

#### Dynamic Card Styling

**Light Theme:**
- Borders: `#E5E5E5` (1px solid)
- Shadow: `shadow-sm` → `shadow-xl` on hover
- Clean, minimal aesthetic

**Dark Theme:**
- Borders: `rgba(255,255,255,0.1)` (1px solid)
- Effect: Glassmorphism (`bg-white/5` + `backdrop-blur-lg`)
- Premium, modern look

**Responsive Cards:**
```tsx
// Utility function
import { getCardClasses } from '@/lib/card-styles';

const cardClasses = getCardClasses(theme, mobile = true);
```

**CSS Classes:**
```css
.card-light         /* Desktop light theme */
.card-dark          /* Desktop dark theme */
.card-light-mobile  /* Responsive light (removes on mobile) */
.card-dark-mobile   /* Responsive dark (removes on mobile) */
```

### Animated Components

#### AnimatedSection
Wraps sections with entrance animations:

```jsx
<AnimatedSection className="py-24" delay={0}>
  {/* Your content */}
</AnimatedSection>
```

**Features:**
- Fade in + 20px slide up
- Triggers at 10% viewport visibility
- Cubic-bezier easing for premium feel
- Includes `content-visibility: auto` for performance

#### AnimatedHeading
Dynamic font-weight transitions on scroll:

```jsx
<AnimatedHeading as="h2" className="text-fluid-3xl">
  Your Heading
</AnimatedHeading>
```

**Behavior:**
- Font-weight: 600 → 800 when centered in viewport
- Creates emphasis as user scrolls
- Smooth transition (0.3s)

### Background System

#### ThemeBackground Component
Intelligent background that adapts to theme and device:

**Light Theme:**
- Grid pattern: `#F2F2F2` on white
- Mouse parallax: Max 10px offset
- GPU-accelerated transforms

**Dark Theme (Desktop):**
- Base: `#0A0A0B` solid
- Blue gradient: 30%/30% position, 10% opacity
- Green gradient: 70%/60% position, 10% opacity
- SVG blur filter: `stdDeviation="100"`

**Dark Theme (Mobile):**
- Static CSS gradients (no SVG)
- Battery-optimized rendering
- Same visual effect, better performance

### Performance Optimizations

#### GPU Acceleration
All animations use hardware acceleration:

```tsx
import { withGPU } from '@/lib/animation';

<div style={withGPU()}>
  {/* Content */}
</div>
```

**Generated CSS:**
```css
transform: translate3d(0, 0, 0);
will-change: transform;
backface-visibility: hidden;
```

#### Content Visibility
Below-the-fold sections use modern CSS optimization:

```css
.content-visibility-auto {
  content-visibility: auto;
}
```

**Effect:** Browser skips rendering off-screen content, improving scroll performance to 60fps.

#### Mobile Optimizations
Automatically applied on screens < 768px:

1. **Borders & Shadows:** Removed for clean UI
2. **Background:** Static gradients instead of SVG filters
3. **Animations:** Simplified or disabled
4. **Parallax:** Disabled mouse tracking
5. **ScrollTrigger:** Pinning effects disabled

### GSAP ScrollTrigger Integration

#### useScrollPin Hook
Desktop-only scroll pinning effects:

```tsx
import { useScrollPin } from '@/hooks/useScrollPin';

const { pinRef, triggerRef } = useScrollPin({
  pinSpacing: false,
  start: 'top top',
  end: 'bottom top',
  scrub: 1,
  enabled: !isMobile  // Automatically disabled on mobile
});
```

**Usage Example:**
```jsx
<div ref={triggerRef}>
  <div ref={pinRef}>
    {/* Content that pins */}
  </div>
  {/* Content that scrolls past */}
</div>
```

**Desktop Effect:** Left-side text pins while right-side content scrolls.

**Mobile Behavior:** Normal stacked layout, no pinning.

### Responsive Design Rules

#### Mobile (<768px)
- No borders or shadows on cards
- Vertical stacking (no horizontal grids)
- 16px gaps between elements
- Static backgrounds (no SVG filters)
- Disabled complex animations
- No scroll pinning effects
- Simplified card styles

#### Desktop (≥768px)
- Full border and shadow effects
- Horizontal grid layouts
- Larger gaps (24-32px)
- SVG filter backgrounds
- Full animation suite
- ScrollTrigger pinning
- Glassmorphism effects
- Mouse parallax tracking

### Utility Files

#### `/src/lib/card-styles.ts`
```tsx
export function getCardClasses(
  theme: 'light' | 'dark',
  mobile?: boolean
): string;

export function getSectionClasses(): string;
```

#### `/src/lib/animation.ts`
```tsx
export function withGPU(): CSSProperties;
```

#### `/src/hooks/useScrollPin.ts`
```tsx
export function useScrollPin(options: {
  pinSpacing?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  enabled?: boolean;
}): { pinRef, triggerRef };
```

### Component Hierarchy

```
src/
├── components/
│   ├── shared/
│   │   ├── AnimatedSection.tsx      # Section wrapper with animations
│   │   ├── AnimatedHeading.tsx      # Dynamic font-weight headings
│   │   └── ThemeBackground.tsx      # Adaptive background system
│   └── layout/
│       └── Layout.tsx                # Lenis initialization
├── lib/
│   ├── card-styles.ts                # Card styling utilities
│   └── animation.ts                  # GPU acceleration
├── hooks/
│   └── useScrollPin.ts               # GSAP ScrollTrigger hook
└── index.css                         # Global styles & utilities
```

### CSS Architecture Updates

#### New Utility Classes
```css
/* Typography */
.text-fluid-sm, .text-fluid-base, .text-fluid-lg,
.text-fluid-xl, .text-fluid-2xl, .text-fluid-3xl,
.text-fluid-4xl

/* Performance */
.gpu-accelerated
.content-visibility-auto

/* Theme-aware Cards */
.card-light, .card-dark
.card-light-mobile, .card-dark-mobile
```

#### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont,
             'Segoe UI', Roboto, sans-serif;
```

**Loaded via:** Google Fonts CDN in `src/index.css`

### Best Practices for New Features

#### DO:
- Use `AnimatedSection` for all new sections
- Apply `AnimatedHeading` to section titles
- Use fluid typography classes (`text-fluid-*`)
- Test on both mobile and desktop
- Use `getCardClasses()` for theme-aware cards
- Apply GPU acceleration to animated elements
- Include `content-visibility-auto` on below-fold content

#### DON'T:
- Use fixed font sizes (use fluid classes)
- Apply complex effects without mobile checks
- Create animations without GPU acceleration
- Forget to test theme switching
- Skip performance optimizations
- Use CSS filters on mobile
- Override responsive utilities

### Browser Compatibility

#### Full Support:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

#### Graceful Degradation:
- Older browsers: Static layouts
- No JavaScript: Base styles remain functional
- Reduced motion: Respects `prefers-reduced-motion`

---

**v2.0.0** - December 2024
- Added Lenis smooth scrolling integration
- Implemented fluid typography system
- Created theme-aware card components
- Added animated section/heading components
- Integrated GSAP ScrollTrigger with mobile detection
- Implemented mobile-optimized backgrounds
- Added GPU acceleration utilities
- Introduced content-visibility optimizations
- Enhanced responsive design system

**v2.1.0** - December 2024
- Implemented comprehensive Fluid Reveal animation system
- Created MaskedTextReveal component with overflow-hidden mask animations
- Added scroll-linked parallax backgrounds (20% scroll speed)
- Updated all section reveals with custom settling ease curve [0.16, 1, 0.3, 1]
- Implemented staggered card reveals with 0.1s delays
- Added viewport triggers at 20% element visibility
- Integrated parallax scrolling to hero section backgrounds

---

## Fluid Reveal Animation System

### Overview
The Fluid Reveal system provides smooth, premium entrance animations with a custom "settling" ease curve that creates a natural, physics-based feel inspired by modern design systems.

### Core Animation Settings

#### Custom Ease Curve
```typescript
ease: [0.16, 1, 0.3, 1]  // Cubic bezier for settling effect
duration: 0.8             // 800ms for smooth transitions
```

This creates a distinctive "settling" motion where elements decelerate smoothly into place.

#### Reveal Variants
```typescript
// From animation.ts
staggeredRevealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

revealViewport = {
  once: true,      // Animate only once
  amount: 0.2      // Trigger when 20% visible
}
```

### Components

#### MaskedTextReveal
Wraps headlines with overflow-hidden masks for upward reveal effect:

```tsx
<MaskedTextReveal className="mb-4" delay={0.2}>
  <h1 className="text-fluid-4xl font-bold">
    Your Headline Text
  </h1>
</MaskedTextReveal>
```

**Behavior:**
- Text starts at `y: 100%` (below mask)
- Animates to `y: 0` (visible)
- Combined with opacity fade-in
- Optional delay parameter for sequencing

**Usage Guidelines:**
- Main page headlines
- Section titles
- Call-to-action text
- Any text needing dramatic reveal

#### Updated AnimatedSection
Now uses fluid reveal variants:

```tsx
<AnimatedSection className="py-24" delay={0}>
  {/* Section content */}
</AnimatedSection>
```

**Changes from v2.0:**
- Uses `staggeredRevealVariants` (y: 40 instead of y: 20)
- Custom ease curve [0.16, 1, 0.3, 1]
- Viewport trigger at 20% (was 10%)
- Consistent 0.8s duration

#### ParallaxBackground
Scroll-linked background movements:

```tsx
<ParallaxBackground speed={0.2}>
  {/* Background elements */}
</ParallaxBackground>
```

**Features:**
- Default 20% scroll speed (parallax effect)
- Uses `useScroll` and `useTransform` from Framer Motion
- GPU-accelerated for smooth 60fps
- Configurable speed parameter

### Implementation Patterns

#### Staggered Card Reveals
Cards in grids reveal sequentially with delays:

```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial="hidden"
    whileInView="visible"
    viewport={revealViewport}
    variants={staggeredRevealVariants}
    transition={{
      ...fluidRevealTransition,
      delay: getStaggerDelay(index)  // 0, 0.1, 0.2, etc.
    }}
  >
    {/* Card content */}
  </motion.div>
))}
```

**Effect:** Cards appear one after another in smooth succession.

#### Hero Section Sequencing
Multi-element reveals with precise timing:

```tsx
// Badge: immediate
<motion.div variants={staggeredRevealVariants} transition={fluidRevealTransition} />

// Headline: 0.2s delay
<MaskedTextReveal delay={0.2}>
  <h1>Headline</h1>
</MaskedTextReveal>

// Description: 0.4s delay
<motion.p transition={{ ...fluidRevealTransition, delay: 0.4 }}>
  Description
</motion.p>

// CTA: 0.6s delay
<motion.div transition={{ ...fluidRevealTransition, delay: 0.6 }}>
  <Button>Call to Action</Button>
</motion.div>
```

### Scroll-Linked Parallax

#### Background Grid Parallax
Applied to hero section background patterns:

```tsx
const { scrollYProgress } = useScroll();

<motion.div
  style={{
    y: useTransform(scrollYProgress, [0, 0.5], ['0%', '20%'])
  }}
  className="absolute inset-0 bg-[grid-pattern]"
/>
```

**Effect:** Background moves at 20% of scroll speed, creating depth.

#### Gradient Blob Parallax
Animated gradient elements with parallax:

```tsx
<motion.div
  style={{
    ...withGPU(),
    y: useTransform(scrollYProgress, [0, 0.5], ['0%', '20%'])
  }}
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3]
  }}
  transition={{
    duration: 8,
    repeat: Infinity
  }}
/>
```

**Effect:** Combines pulsing animation with parallax scrolling.

### Utility Functions

#### getStaggerDelay
Calculates sequential delays for staggered reveals:

```typescript
getStaggerDelay(index: number, baseDelay = 0.1): number
// index 0 → 0s
// index 1 → 0.1s
// index 2 → 0.2s
```

**Usage:**
```tsx
delay: getStaggerDelay(0)     // First item: no delay
delay: getStaggerDelay(1)     // Second item: 0.1s
delay: getStaggerDelay(2, 0.15)  // Third item: 0.3s (custom base)
```

### Animation Constants

From `/src/lib/animation.ts`:

```typescript
export const fluidRevealTransition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1]
};

export const staggeredRevealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export const revealViewport = {
  once: true,
  amount: 0.2
};
```

### Best Practices

#### DO:
- Use MaskedTextReveal for all major headlines
- Apply staggered delays to card grids (0.1s increment)
- Sequence hero section reveals (0.2s increments)
- Set viewport amount to 0.2 for proper trigger timing
- Use the custom ease curve [0.16, 1, 0.3, 1]
- Apply parallax at 20% speed to background elements
- Keep reveal distance at y: 40 for consistency

#### DON'T:
- Mix different ease curves (stick to fluid reveal curve)
- Use y values other than 40 for reveals
- Set viewport trigger below 0.2 (causes early animations)
- Apply parallax to foreground content (only backgrounds)
- Stack multiple masks on same element
- Use delays longer than 0.8s between elements

### Performance

#### GPU Acceleration
All reveals use transform properties for hardware acceleration:
```typescript
transform: translate3d(0, 0, 0)
will-change: transform
```

#### Viewport Optimization
- `once: true` prevents re-animation on scroll
- `amount: 0.2` balances early reveal vs. visibility
- Works with content-visibility for double optimization

#### Mobile Considerations
- Parallax effects are GPU-accelerated
- Smooth on 60fps+ displays
- Battery-efficient implementation
- No performance impact on low-end devices

### Examples

#### Full Hero Section
```tsx
<section>
  <motion.div variants={staggeredRevealVariants} transition={fluidRevealTransition}>
    <Badge>New Feature</Badge>
  </motion.div>

  <MaskedTextReveal delay={0.2}>
    <h1 className="text-fluid-4xl font-bold">
      Premium Headline
    </h1>
  </MaskedTextReveal>

  <motion.p
    variants={staggeredRevealVariants}
    transition={{ ...fluidRevealTransition, delay: 0.4 }}
  >
    Supporting description text
  </motion.p>

  <motion.div
    variants={staggeredRevealVariants}
    transition={{ ...fluidRevealTransition, delay: 0.6 }}
  >
    <Button>Get Started</Button>
  </motion.div>
</section>
```

#### Staggered Grid
```tsx
<div className="grid md:grid-cols-3 gap-8">
  {features.map((feature, i) => (
    <motion.div
      key={i}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={staggeredRevealVariants}
      transition={{
        ...fluidRevealTransition,
        delay: getStaggerDelay(i)
      }}
    >
      <Card>{feature}</Card>
    </motion.div>
  ))}
</div>
```

---

**End of Design System Documentation**

*For questions or updates, refer to this document when implementing new features or pages for FreightLabs.*
