---
name: awesome-design
description: Motion choreography and interactive UI skill specializing in butter-smooth scrolling (Lenis/Locomotive), Framer Motion orchestration, GSAP parallax, magnetic controls, and high-end micro-interactions.
---

# Awesome Design & Motion Choreography Skill

## 1. Core Scroll & Animation Stack
- **Smooth Scroll Engine**: `@studio-freight/lenis` or `lenis` for inertial, momentum-based scrolling.
- **Animation Framework**: `framer-motion` (v11+) with spring physics and scroll progress hooks (`useScroll`, `useTransform`, `useSpring`).
- **Scroll Triggers**: Parallax image reveals, sticky magazine column scrolling, and horizontal reel scrub.

## 2. Motion Rules & Best Practices
1. **Never Jerky, Always Fluid**:
   - Prefer cubic-bezier easing curves: `cubic-bezier(0.16, 1, 0.3, 1)` (expo out) or `cubic-bezier(0.65, 0, 0.35, 1)`.
   - Transitions duration: 600ms - 1100ms for editorial reveals; 200ms - 300ms for reactive micro-interactions.
2. **Text Reveal Choreography**:
   - Split-line or word-by-word mask reveals (`overflow-hidden` container with `translate-y-full` to `translate-y-0`).
   - Stagger children by `0.04s` to `0.08s` for staggered elegance.
3. **Image & Video Interaction**:
   - Parallax scrolling: foreground moves slower than background by a factor of `0.2` to `0.3`.
   - Smooth curtain reveals (scale & clip-path transitions).
   - Video reels: Ambient autoplay with muted loop and instantaneous click-to-expand modal.
4. **Interactive Accents**:
   - Subtle custom magnetic cursor follower on desktop.
   - Magnetic CTA buttons pulling toward mouse coordinates.
   - Ambient luxury noise/grain texture in background to add tactile paper/film feel.
