# Malama Cabs Design Guidelines

## Design Approach
**Reference-Based Approach**: Inspired by skale.solutions' premium web design aesthetic - sophisticated animations, bold typography, generous spacing, and modern interactions. Adapted for cab booking service with emphasis on trust, speed, and eco-friendliness.

## Typography System

**Font Families**:
- Primary: Inter (headings, UI elements) - clean, modern, professional
- Secondary: SF Pro Display fallback for system consistency

**Hierarchy**:
- Hero Headline: text-6xl md:text-7xl lg:text-8xl, font-extrabold, tracking-tight
- Section Headings: text-4xl md:text-5xl lg:text-6xl, font-bold
- Subheadings: text-2xl md:text-3xl, font-semibold
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Small Text: text-sm md:text-base, tracking-wide for labels/captions
- CTAs: text-lg md:text-xl, font-semibold

## Layout System

**Spacing Scale**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section padding: py-20 md:py-32 lg:py-40
- Component gaps: gap-8 md:gap-12 lg:gap-16
- Card padding: p-8 md:p-10 lg:p-12
- Container max-width: max-w-7xl mx-auto px-6 md:px-8

**Grid System**:
- 2-column layouts for features/pricing: grid-cols-1 md:grid-cols-2 gap-8
- 3-column for testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- 3-step process: grid-cols-1 md:grid-cols-3 gap-12

## Core Sections & Components

### 1. Navigation
Sticky header with backdrop blur effect, minimal and clean
- Logo (left): "Malama" text with EV icon
- Navigation links (center): How It Works, Pricing, FAQ, Download App
- CTA buttons (right): WhatsApp and Call buttons with icons
- Mobile: Hamburger menu with slide-in drawer animation

### 2. Hero Section (100vh)
Full-viewport immersive hero with animated gradient background
- Headline: "Economical & Green Airport Rides" with animated text reveal
- Subheading: Key benefits (EV, Clean, Comfortable) as animated pills/badges
- Large 3D car illustration (floating/rotating animation)
- Primary CTA: "Book Now" button with pulse animation
- Secondary CTAs: WhatsApp and Phone with blur background
- Scroll indicator with animated bounce

**Hero Image**: Large 3D-rendered EV sedan (side view, modern, sleek) centered or right-aligned, with subtle floating animation and environmental reflections

### 3. Quick Pricing Cards
Two large cards side-by-side displaying routes with animated hover effects
- Card 1: "City to Airport - Starting from ₹899"
- Card 2: "Airport to City - Starting from ₹999"
- Animated icons, hover lift effect with shadow increase
- "Book Now" CTAs with arrow animations
- Disclaimer text below in smaller font

### 4. Features Grid
3-column grid showcasing key benefits with icon animations
- 100% Electric with EV icon
- Clean & Hygienic with sparkle icon
- Comfortable Sedan with car icon
- Boot Space with luggage icon
- Each card: large icon (animate on scroll), bold title, description
- Hover: subtle scale and glow effect

### 5. How It Works Timeline
Horizontal timeline on desktop, vertical on mobile
- Step 1: "Book in 2 Taps" - Phone illustration with tap animation
- Step 2: "Track Your Driver" - Map with moving car icon
- Step 3: "Pick & Arrive Safely" - Destination pin animation
- Connecting line with animated progress indicator
- Numbers in large circles with gradient fills
- Scroll-triggered progressive reveal

### 6. App Download Section
Split layout with visual emphasis
- Left: Large phone mockup showing app interface with scrolling screenshots
- Right: Download options (QR code, App Store, Play Store badges)
- Animated QR code with scan line effect
- Feature bullets with checkmark animations
- App Store badges with hover scale

**App Mockup Images**: 2-3 iPhone/Android screenshots showing: (1) Booking interface with map, (2) Driver tracking screen, (3) Ride confirmation. Displayed in tilted phone frames with subtle shadow.

### 7. Testimonials
Carousel with 3 visible cards (auto-rotating)
- Customer photo (circular)
- 5-star rating with animated fill
- Quote text with quotation marks
- Customer name and designation
- Navigation dots below with progress indicators
- Smooth slide transitions with fade

### 8. FAQ Accordion
Single column, clean accordion design
- Question with chevron icon (rotates on expand)
- Smooth height animation for answers
- First item expanded by default
- Hover effect on questions
- 5-6 key questions about booking, pricing, vehicles

### 9. Footer
Multi-column layout with comprehensive information
- Column 1: Logo, tagline, social links
- Column 2: Quick Links (How It Works, Pricing, FAQ)
- Column 3: Contact (Phone, Email, WhatsApp)
- Column 4: Download App (badges)
- Bottom bar: Copyright, Privacy Policy, Terms
- Background with subtle gradient

## Floating Elements
- WhatsApp floating button (bottom-right) with unread message badge animation
- Scroll-to-top button (appears after 500px scroll) with arrow icon

## Animation Specifications

**Scroll Animations** (using Framer Motion):
- Sections fade-in with slide-up (y: 50 to 0, opacity: 0 to 1)
- Stagger children animations for grids (delay: 0.1s increments)
- Parallax effects on hero car illustration (slower scroll rate)
- Progress bar on timeline reveals as you scroll

**Hover Animations**:
- Cards: scale-105 with shadow-2xl transition
- Buttons: brightness increase and subtle scale
- Icons: rotate or bounce on hover
- Links: underline animation from left to right

**Micro-interactions**:
- Button press: scale-95 on active state
- Form inputs: border glow on focus
- Loading states: spinner or skeleton screens
- Success states: checkmark animation with scale

**Auto-animations**:
- Hero gradient: subtle shifting colors
- Car illustration: gentle float/bob motion
- Testimonial carousel: auto-advance every 5s
- Number counters: animate on scroll into view

## Images Required

1. **Hero**: Large 3D EV sedan (right-aligned, floating, premium render with reflections)
2. **App Mockups**: 2-3 phone screenshots in device frames (booking flow, tracking, confirmation)
3. **Customer Photos**: 3 circular profile images for testimonials (diverse, professional)
4. **Icons**: Use Heroicons for all UI icons (menu, phone, location, check, arrow, etc.)
5. **Logo**: "Malama" text with small EV leaf/bolt icon

## Responsive Behavior
- Mobile-first approach with smooth breakpoints
- Hero: Stack content vertically, reduce car size
- Grids: 1 column on mobile, 2-3 on desktop
- Typography: Reduce sizes by 2-3 steps on mobile
- Animations: Reduce motion on mobile, disable parallax
- Touch-friendly targets: Minimum 44px tap areas