# Premium Hero Section - Chah E Piaa De

## Overview
A premium, elegant hero section designed for "Chah E Piaa De" - an Indian chai brand. The design emphasizes warmth, tradition, and premium aesthetics with a modern café vibe.

---

## 🎨 Design Features

### Visual Elements
1. **Full Viewport Height**: Uses `min-h-screen` to ensure the hero takes up the entire viewport
2. **Warm Color Palette**: 
   - Base: `#F5E6D3` (warm beige)
   - Gradient overlay: From `#F5E6D3` → `#E4D5C4` → `#D4A574`
   - Text: `#3E2723` (dark brown) and `#8B5A3C` (medium brown)

3. **Background Layers**:
   - Background image: `chai-brewing.png`
   - Gradient overlay (95-85% opacity) for warmth
   - Subtle geometric pattern overlay (5% opacity) for texture

4. **Typography**:
   - Brand name: Extra large gradient text using `heading-xl` class
   - Hindi tagline: "जहाँ हर घूंट में है दिल की बात" (Where every sip speaks from the heart)
   - English subtitle: "Where every sip tells a story of warmth, tradition, and togetherness"

5. **Logo**:
   - Centered at top
   - Floating animation for subtle movement
   - Drop shadow for depth
   - Responsive sizing: 96px → 128px → 160px

---

## 🎭 Interactive Elements

### Animations
1. **Page Load Animations**:
   - Logo: Fades in from top with 0ms delay
   - Brand name: Fades in from bottom with 200ms delay
   - Hindi tagline: Fades in with 300ms delay
   - English subtitle: Fades in with 400ms delay
   - CTA buttons: Fade in with 500ms delay
   - Scroll indicator: Fades in with 700ms delay

2. **Continuous Animations**:
   - Logo: Floating animation (up and down)
   - Decorative circles: Floating with staggered delays
   - Scroll indicator: Bounce animation

3. **Hover Effects**:
   - Primary button: Gradient slide animation from left
   - Secondary button: Letter spacing expansion
   - Both buttons: Scale on hover (105%) and active press (95%)

### CTA Buttons
1. **Primary Button** ("EXPLORE OUR MENU"):
   - Brown background (`#8B5A3C`)
   - Gradient overlay on hover
   - Relative z-index for text layering

2. **Secondary Button** ("VISIT US"):
   - Outlined style with brown border
   - Letter spacing animation on hover
   - Fills with brown on hover

---

## 📱 Responsive Behavior

### Mobile (< 640px)
- Logo: 96px × 96px
- Brand name: 6xl (text-6xl)
- Tagline: xl (text-xl)
- Subtitle: base (text-base)
- Buttons: Stack vertically (flex-col)
- Padding: Standard mobile spacing
- Decorative circles: Positioned at left-4 and right-4

### Tablet (640px - 1024px)
- Logo: 128px × 128px
- Brand name: 7xl (text-7xl)
- Tagline: 2xl (text-2xl)
- Subtitle: lg (text-lg)
- Buttons: Horizontal layout (flex-row)
- Decorative circles: Positioned at left-12 and right-12

### Desktop (> 1024px)
- Logo: 160px × 160px
- Brand name: 8xl-9xl (text-8xl/9xl)
- Tagline: 3xl (text-3xl)
- Subtitle: xl (text-xl)
- Buttons: Horizontal with larger spacing
- Decorative circles: Positioned at left-24 and right-24

---

## 🎯 Key Tailwind Classes Used

### Layout
```tsx
className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
```
- `relative`: For absolute positioned children
- `w-full`: Full width
- `min-h-screen`: Minimum viewport height
- `flex items-center justify-center`: Center content
- `overflow-hidden`: Hide overflow for animations

### Background
```tsx
className="absolute inset-0 z-0"
```
- `absolute inset-0`: Cover entire parent
- `z-0`: Behind main content

### Gradient Overlay
```tsx
className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3]/95 via-[#E4D5C4]/90 to-[#D4A574]/85"
```
- `bg-gradient-to-br`: Bottom-right gradient
- Custom colors with opacity values

### Responsive Logo
```tsx
className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-float"
```
- Responsive sizing with breakpoints
- Custom float animation

### Animated Text
```tsx
className={`heading-xl mb-6 md:mb-8 text-gradient-warm transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
```
- Conditional classes based on load state
- Smooth transitions with delays

### Button Layout
```tsx
className="flex flex-col sm:flex-row gap-4 justify-center items-center"
```
- Vertical on mobile, horizontal on tablet+
- Consistent gap spacing

---

## 🔧 Technical Implementation

### Client Component
```tsx
'use client';
```
Required for React hooks (useState, useEffect)

### State Management
```tsx
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  setIsLoaded(true);
}, []);
```
Triggers animations on component mount

### Image Optimization
```tsx
<Image
  src="/images/chai-brewing.png"
  alt="Chai brewing background"
  fill
  className="object-cover"
  priority
  quality={90}
/>
```
- `fill`: Fills parent container
- `priority`: Loads immediately (above fold)
- `quality={90}`: High quality for hero image

### SVG Pattern
Inline SVG data URI for subtle background pattern:
```tsx
backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60'...")`
```

---

## 🎨 Custom CSS Classes (from globals.css)

### Typography
- `.heading-xl`: Extra large heading (6xl → 9xl)
- `.text-gradient-warm`: Gradient text effect
- `.label-text`: Small uppercase labels

### Buttons
- `.btn-primary`: Primary button style
- `.btn-secondary`: Secondary outlined button

### Animations
- `.animate-float`: Floating animation
- `.animate-bounce`: Bounce animation
- Custom transition delays: `.delay-200`, `.delay-300`, etc.

### Layout
- `.container-custom`: Max-width container with padding

---

## 🌟 Premium Design Principles Applied

1. **Elegance over Loudness**:
   - Subtle animations (1000ms duration)
   - Soft color palette
   - Generous whitespace

2. **Indian Chai Vibe**:
   - Warm beige/brown colors
   - Hindi tagline for authenticity
   - Traditional yet modern aesthetic

3. **Modern Café Feel**:
   - Clean typography
   - Premium button styles
   - Sophisticated hover effects

4. **Visual Hierarchy**:
   - Logo → Brand name → Taglines → CTAs
   - Progressive disclosure with staggered animations

5. **Accessibility**:
   - Semantic HTML (`<section>`, `<h1>`)
   - Alt text for images
   - Sufficient color contrast
   - Focus states on buttons

---

## 📝 Usage Example

```tsx
import HeroSection from '@/components/HeroSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* Other sections */}
    </main>
  );
}
```

---

## 🎯 Future Enhancements (Optional)

1. **Parallax Scrolling**: Add depth with scroll-based animations
2. **Video Background**: Replace image with chai brewing video
3. **Particle Effects**: Subtle steam/aroma particles
4. **Localization**: Toggle between Hindi and English
5. **Dark Mode**: Evening/night theme variant
6. **Interactive Elements**: Animated chai cup on hover
7. **Sound**: Subtle ambient café sounds (optional toggle)

---

## 📦 Dependencies

- Next.js 16.1.4
- React 19.2.3
- Tailwind CSS v4
- next/image for optimized images

---

## 🎨 Color Reference

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Warm Beige | `#F5E6D3` | Background base |
| Light Beige | `#E4D5C4` | Gradient middle |
| Golden Brown | `#D4A574` | Gradient end, accents |
| Medium Brown | `#8B5A3C` | Primary buttons, text |
| Dark Brown | `#3E2723` | Main text, headings |

---

## ✅ Checklist

- [x] Full viewport height
- [x] Warm beige background with gradient
- [x] Centered logo at top
- [x] Large bold brand name "CHAH E PIAA DE"
- [x] Emotional Hindi tagline
- [x] English subtitle
- [x] Primary CTA button ("EXPLORE OUR MENU")
- [x] Secondary CTA button ("VISIT US")
- [x] Background image with overlay
- [x] Gradient overlay for depth
- [x] Responsive design (mobile, tablet, desktop)
- [x] Smooth animations
- [x] Premium aesthetic
- [x] Elegant, not loud
- [x] Modern café website vibe

---

**Created for**: Chah E Piaa De  
**Framework**: Next.js 16 with Tailwind CSS v4  
**Style**: Premium, Elegant, Indian Chai Aesthetic
