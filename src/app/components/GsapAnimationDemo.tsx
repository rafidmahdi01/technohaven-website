import { useRef } from "react";
import gsap from "gsap";
import { useFadeInOnScroll, useSlideInOnScroll, useHoverAnimation } from "../hooks/useGsapAnimation";

/**
 * Example component demonstrating GSAP animations
 * Replace motion.div components with refs and these hooks for GSAP-powered animations
 */

export function GsapAnimationDemo() {
  const fadeInRef = useRef<HTMLDivElement>(null);
  const slideInRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);

  // Use the GSAP animation hooks
  useFadeInOnScroll(fadeInRef as React.RefObject<HTMLElement | null>);
  useSlideInOnScroll(slideInRef as React.RefObject<HTMLElement | null>, "left", {
    duration: 1,
    ease: "power3.out",
  });
  useHoverAnimation(hoverRef as React.RefObject<HTMLElement | null>, { scale: 1.05, rotation: 2 }, {
    duration: 0.3,
    ease: "power2.out",
  });

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <div
        ref={fadeInRef}
        style={{
          opacity: 0,
          padding: "2rem",
          marginBottom: "4rem",
          background: "rgba(80,165,255,0.1)",
          borderRadius: "8px",
        }}
      >
        <h2>Fade In Animation</h2>
        <p>This element fades in when scrolled into view using GSAP</p>
      </div>

      <div
        ref={slideInRef}
        style={{
          opacity: 0,
          x: -30,
          padding: "2rem",
          marginBottom: "4rem",
          background: "rgba(120,195,255,0.1)",
          borderRadius: "8px",
        }}
      >
        <h2>Slide In Animation</h2>
        <p>This element slides in from the left when scrolled into view using GSAP</p>
      </div>

      <div
        ref={hoverRef}
        style={{
          padding: "2rem",
          background: "rgba(150,215,255,0.1)",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        <h2>Hover Animation</h2>
        <p>Hover over this element to see GSAP animation in action</p>
      </div>
    </div>
  );
}

/**
 * Example of replacing a motion.div with GSAP:
 *
 * BEFORE (motion.div):
 * <motion.div
 *   initial={{ opacity: 0, x: -30 }}
 *   whileInView={{ opacity: 1, x: 0 }}
 *   viewport={{ once: true, margin: "-8%" }}
 *   transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
 * >
 *   Content
 * </motion.div>
 *
 * AFTER (GSAP with hook):
 * const ref = useRef<HTMLDivElement>(null);
 * useSlideInOnScroll(ref, "left", { duration: 1.1 });
 *
 * <div
 *   ref={ref}
 *   style={{ opacity: 0, x: -30 }}
 * >
 *   Content
 * </div>
 */
