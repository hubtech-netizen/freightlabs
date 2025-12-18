import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollPinOptions {
  pinSpacing?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  enabled?: boolean;
}

export function useScrollPin(options: UseScrollPinOptions = {}) {
  const {
    pinSpacing = false,
    start = 'top top',
    end = 'bottom top',
    scrub = 1,
    enabled = true,
  } = options;

  const pinRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !pinRef.current || !triggerRef.current) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        pin: pinRef.current,
        start,
        end,
        scrub,
        pinSpacing,
      });
    });

    return () => {
      ctx.revert();
    };
  }, [enabled, pinSpacing, start, end, scrub]);

  return { pinRef, triggerRef };
}
