# GSAP Animation Integration Guide

## Overview

GSAP (GreenSock Animation Platform) has been integrated into the Techohaven website for powerful, performant animations. GSAP is a professional-grade animation library that provides:

- **Smooth scroll-triggered animations** with ScrollTrigger plugin
- **Better performance** than CSS-based animations for complex sequences
- **Advanced easing** and timing control
- **Hover and interaction animations**
- **Parallax scrolling effects**

## Installation

GSAP is already installed in this project:

```bash
npm install gsap
```

## Available Hooks

Located in `src/app/hooks/useGsapAnimation.ts`, these custom React hooks make it easy to use GSAP:

### 1. `useFadeInOnScroll`

Fade in elements as they scroll into view.

```tsx
import { useRef } from "react";
import { useFadeInOnScroll } from "@/hooks/useGsapAnimation";

export function MyComponent() {
  const ref = useRef<HTMLElement>(null);
  
  useFadeInOnScroll(ref);
  
  return (
    <div ref={ref} style={{ opacity: 0 }}>
      Content fades in on scroll
    </div>
  );
}
```

**Options:**
```tsx
useFadeInOnScroll(ref, {
  duration: 0.8,           // Animation duration in seconds
  ease: "power3.out",      // Easing function
  scrollTrigger: {
    trigger: ref.current,   // Element to trigger animation
    start: "top 80%",       // When animation starts
    end: "top 20%"          // When animation ends
  }
});
```

### 2. `useSlideInOnScroll`

Slide in elements from the left or right as they scroll into view.

```tsx
const ref = useRef<HTMLElement>(null);

useSlideInOnScroll(ref, "left", {
  duration: 1,
  ease: "power3.out",
});

return (
  <div ref={ref} style={{ opacity: 0, x: -30 }}>
    Content slides in from left
  </div>
);
```

**Parameters:**
- `ref`: React ref to the element
- `direction`: `"left"` or `"right"`
- `config`: Animation configuration

### 3. `useStaggerAnimationOnScroll`

Animate multiple child elements in sequence (staggered) as they scroll into view.

```tsx
const ref = useRef<HTMLElement>(null);

useStaggerAnimationOnScroll(ref, ".item", {
  duration: 0.6,
  stagger: 0.1,  // Delay between each item (in seconds)
  ease: "power3.out"
});

return (
  <div ref={ref}>
    <div className="item" style={{ opacity: 0, y: 20 }}>Item 1</div>
    <div className="item" style={{ opacity: 0, y: 20 }}>Item 2</div>
    <div className="item" style={{ opacity: 0, y: 20 }}>Item 3</div>
  </div>
);
```

### 4. `useParallaxScroll`

Create parallax scrolling effects where elements move at different speeds.

```tsx
const ref = useRef<HTMLElement>(null);

useParallaxScroll(ref, 0.5);  // Speed multiplier

return (
  <div ref={ref}>
    Parallax element moves at 0.5x scroll speed
  </div>
);
```

### 5. `useHoverAnimation`

Animate elements on hover.

```tsx
const ref = useRef<HTMLElement>(null);

useHoverAnimation(ref, 
  { scale: 1.05, rotation: 2 },  // Properties to animate to
  {
    duration: 0.3,
    ease: "power2.out"
  }
);

return (
  <div ref={ref} style={{ cursor: "pointer" }}>
    Hover me!
  </div>
);
```

## Migration from motion/react

The website currently uses `motion/react` (Framer Motion). To migrate to GSAP:

### Before (motion.div):
```tsx
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-8%" }}
  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
>
  Content
</motion.div>
```

### After (GSAP with hook):
```tsx
const ref = useRef<HTMLElement>(null);
useSlideInOnScroll(ref, "left", { duration: 1.1 });

<div
  ref={ref}
  style={{ opacity: 0, x: -30 }}
>
  Content
</div>
```

## GSAP Easing Functions

Popular easing options:
- `"power1.inOut"` - Smooth, subtle
- `"power2.out"` - Common, smooth
- `"power3.out"` - Fast start, smooth end
- `"power4.out"` - Very fast start
- `"elastic.out"` - Bouncy effect
- `"back.out"` - Slight overshoot
- `"circ.out"` - Circular easing

[Full list of easing functions](https://gsap.com/docs/v3/Eases)

## ScrollTrigger Configuration

ScrollTrigger provides powerful scroll-based animation control:

```tsx
useFadeInOnScroll(ref, {
  scrollTrigger: {
    trigger: ref.current,        // Element that triggers animation
    start: "top 80%",            // When animation starts (viewport position)
    end: "top 20%",              // When animation completes
    scrub: false,                // true for smooth scroll-linked animations
    markers: false,              // true for debugging (shows trigger markers)
    onEnter: () => console.log("Entered"),
    onLeave: () => console.log("Left")
  }
});
```

**Start/End values:**
- `"top center"` - Top of element at center of viewport
- `"top 80%"` - Top of element at 80% down viewport
- `"bottom center"` - Bottom of element at center of viewport

## Performance Tips

1. **Limit active animations**: Don't animate too many elements simultaneously
2. **Use `scrub: true` sparingly**: It's CPU-intensive for scroll-linked animations
3. **Stagger animations**: Use stagger to spread out animations rather than animating all at once
4. **Kill animations on unmount**: The hooks automatically clean up with `ctx.revert()`

## Example Component

See `src/app/components/GsapAnimationDemo.tsx` for a complete working example with all animation types.

## Best Practices

1. **Always set initial styles**: Set `opacity: 0`, `x: 30`, etc. on elements before animation
2. **Use refs consistently**: Create a ref for each animated element
3. **Test scroll performance**: Use browser DevTools to monitor FPS during animations
4. **Chain animations**: Use GSAP timelines for complex animation sequences
5. **Keep it smooth**: Use `ease: "power3.out"` or similar for natural motion

## Resources

- [GSAP Documentation](https://gsap.com/docs/v3/)
- [ScrollTrigger Plugin](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [Easing Visualizer](https://gsap.com/docs/v3/Eases)
- [GSAP Forum](https://gsap.com/community/forums/)

## Next Steps

To further enhance animations on the Techohaven website:

1. Replace `motion.div` components in `TechnohavenLanding.tsx` with GSAP hooks
2. Add scroll-triggered counter animations for statistics
3. Implement complex timeline sequences using GSAP Timeline API
4. Add morph animations for SVG elements if used
5. Create custom animation presets for reusable patterns
