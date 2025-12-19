import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { withGPU } from '@/lib/animation';

export function ThemeBackground() {
  const { theme } = useTheme();
  const gridRef = useRef<HTMLDivElement>(null);
  const isDark = theme === 'dark';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isDark || !gridRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xOffset = ((clientX / innerWidth) - 0.5) * 20;
      const yOffset = ((clientY / innerHeight) - 0.5) * 20;

      const clampedX = Math.max(-10, Math.min(10, xOffset));
      const clampedY = Math.max(-10, Math.min(10, yOffset));

      gridRef.current.style.transform = `translate3d(${clampedX}px, ${clampedY}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDark]);

  if (isDark) {
    if (isMobile) {
      return (
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `
              #0A0A0B,
              radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
            `,
            ...withGPU(),
          }}
        />
      );
    }

    return (
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: '#0A0A0B',
          ...withGPU(),
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="blueGradient" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="greenGradient" cx="70%" cy="60%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="100" />
            </filter>
          </defs>

          <ellipse
            cx="30%"
            cy="30%"
            rx="40%"
            ry="40%"
            fill="url(#blueGradient)"
            filter="url(#blur)"
          />
          <ellipse
            cx="70%"
            cy="60%"
            rx="35%"
            ry="35%"
            fill="url(#greenGradient)"
            filter="url(#blur)"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={gridRef}
      className="fixed inset-0 pointer-events-none z-0 transition-transform duration-200 ease-out will-change-transform"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(242, 242, 242, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(242, 242, 242, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        ...withGPU(),
      }}
    />
  );
}
