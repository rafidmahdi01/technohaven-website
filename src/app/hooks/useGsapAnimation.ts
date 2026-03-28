import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface AnimationConfig {
  trigger?: string | HTMLElement;
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number | { amount: number; from: "start" | "end" | "center" | "edges" };
  scrollTrigger?: {
    trigger?: string | HTMLElement;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
    onEnter?: () => void;
    onLeave?: () => void;
  };
}

/**
 * Hook for fade-in animation on scroll
 */
export function useFadeInOnScroll(
  ref: React.RefObject<HTMLElement | null>,
  config: AnimationConfig = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        duration: config.duration || 0.8,
        ease: config.ease || "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "top 20%",
          ...config.scrollTrigger,
        },
      });
    });

    return () => ctx.revert();
  }, [config, ref]);
}

/**
 * Hook for slide-in animation on scroll
 */
export function useSlideInOnScroll(
  ref: React.RefObject<HTMLElement | null>,
  direction: "left" | "right" = "left",
  config: AnimationConfig = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        opacity: 1,
        x: 0,
        duration: config.duration || 1,
        ease: config.ease || "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          ...config.scrollTrigger,
        },
      });
    });

    return () => ctx.revert();
  }, [config, direction, ref]);
}

/**
 * Hook for stagger animation on scroll
 */
export function useStaggerAnimationOnScroll(
  ref: React.RefObject<HTMLElement | null>,
  selector: string,
  config: AnimationConfig = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const elements = ref.current?.querySelectorAll(selector);
      if (elements && elements.length > 0) {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: config.duration || 0.6,
          stagger: config.stagger || 0.1,
          ease: config.ease || "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
            ...config.scrollTrigger,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [config, ref, selector]);
}

/**
 * Hook for parallax scroll effect
 */
export function useParallaxScroll(
  ref: React.RefObject<HTMLElement | null>,
  speed: number = 0.5
) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: (i, target) => {
          return gsap.getProperty(target, "clientHeight") as number * speed * 2;
        },
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      });
    });

    return () => ctx.revert();
  }, [ref, speed]);
}

/**
 * Hook for hover animation
 */
export function useHoverAnimation(
  ref: React.RefObject<HTMLElement | null>,
  toProps: Record<string, any> = {},
  config: AnimationConfig = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const originalProps = { scale: 1, ...toProps };

    const onMouseEnter = () => {
      gsap.to(el, {
        ...toProps,
        duration: config.duration || 0.3,
        ease: config.ease || "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(el, {
        scale: 1,
        duration: config.duration || 0.3,
        ease: config.ease || "power2.out",
      });
    };

    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [ref, toProps, config]);
}

export default { useFadeInOnScroll, useSlideInOnScroll, useStaggerAnimationOnScroll, useParallaxScroll, useHoverAnimation };
