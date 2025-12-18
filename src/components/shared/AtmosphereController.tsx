import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { withGPU } from '@/lib/animation';

gsap.registerPlugin(ScrollTrigger);

interface SectionTrigger {
  trigger: string;
  color: string;
  start?: string;
  end?: string;
}

const pageSectionColors: Record<string, SectionTrigger[]> = {
  '/': [
    { trigger: '#hero-section', color: '#FFFFFF', start: 'top top', end: 'bottom center' },
    { trigger: '#choose-path-section', color: '#F8FAFC', start: 'top center', end: 'bottom center' },
    { trigger: '#routeforge-preview-section', color: '#F0F9FF', start: 'top center', end: 'bottom center' },
    { trigger: '#loadforge-preview-section', color: '#FFFFFF', start: 'top center', end: 'bottom center' },
    { trigger: '#data-section', color: '#F8FAFC', start: 'top center', end: 'bottom center' },
    { trigger: '#footer', color: '#0F172A', start: 'top bottom', end: 'bottom bottom' },
  ],
  '/routeforge': [
    { trigger: '#hero-section', color: '#FFFFFF', start: 'top top', end: 'bottom center' },
    { trigger: '#features-section', color: '#F0F9FF', start: 'top center', end: 'bottom center' },
    { trigger: '#how-it-works-section', color: '#F8FAFC', start: 'top center', end: 'bottom center' },
    { trigger: '#benefits-section', color: '#F0F9FF', start: 'top center', end: 'bottom center' },
    { trigger: '#footer', color: '#0F172A', start: 'top bottom', end: 'bottom bottom' },
  ],
  '/loadforge': [
    { trigger: '#hero-section', color: '#FFFFFF', start: 'top top', end: 'bottom center' },
    { trigger: '#features-section', color: '#FFF7ED', start: 'top center', end: 'bottom center' },
    { trigger: '#how-it-works-section', color: '#F8FAFC', start: 'top center', end: 'bottom center' },
    { trigger: '#benefits-section', color: '#FFF7ED', start: 'top center', end: 'bottom center' },
    { trigger: '#footer', color: '#0F172A', start: 'top bottom', end: 'bottom bottom' },
  ],
  '/about': [
    { trigger: '#hero-section', color: '#FFFFFF', start: 'top top', end: 'bottom center' },
    { trigger: '#who-we-are-section', color: '#F0F9FF', start: 'top center', end: 'bottom center' },
    { trigger: '#values-section', color: '#F8FAFC', start: 'top center', end: 'bottom center' },
    { trigger: '#rituals-section', color: '#F0F9FF', start: 'top center', end: 'bottom center' },
    { trigger: '#cta-section', color: '#0F172A', start: 'top center', end: 'bottom bottom' },
    { trigger: '#footer', color: '#0F172A', start: 'top bottom', end: 'bottom bottom' },
  ],
  '/contact': [
    { trigger: '#hero-section', color: '#FFFFFF', start: 'top top', end: 'bottom center' },
    { trigger: '#contact-form-section', color: '#F8FAFC', start: 'top center', end: 'bottom center' },
    { trigger: '#footer', color: '#0F172A', start: 'top bottom', end: 'bottom bottom' },
  ],
};

export function AtmosphereController() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => {
      window.removeEventListener('resize', checkDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || !backgroundRef.current) return;

    const triggers: ScrollTrigger[] = [];
    const sectionColors = pageSectionColors[location.pathname] || [];

    sectionColors.forEach((section, index) => {
      const element = document.querySelector(section.trigger);
      if (!element || !backgroundRef.current) return;

      const trigger = ScrollTrigger.create({
        trigger: element as HTMLElement,
        start: section.start || 'top center',
        end: section.end || 'bottom center',
        scrub: 0.5,
        onUpdate: (self) => {
          if (!backgroundRef.current) return;

          const progress = self.progress;
          const nextSection = sectionColors[index + 1];

          if (nextSection && progress > 0) {
            const currentColor = hexToRgb(section.color);
            const nextColor = hexToRgb(nextSection.color);

            if (currentColor && nextColor) {
              const r = Math.round(currentColor.r + (nextColor.r - currentColor.r) * progress);
              const g = Math.round(currentColor.g + (nextColor.g - currentColor.g) * progress);
              const b = Math.round(currentColor.b + (nextColor.b - currentColor.b) * progress);

              backgroundRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
          } else {
            backgroundRef.current.style.backgroundColor = section.color;
          }
        },
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [location.pathname, isDesktop]);

  if (!isDesktop) {
    return (
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          backgroundColor: '#FFFFFF',
          ...withGPU(),
        }}
      />
    );
  }

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 pointer-events-none -z-10 transition-colors duration-500"
      style={{
        backgroundColor: '#FFFFFF',
        ...withGPU(),
      }}
    />
  );
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
