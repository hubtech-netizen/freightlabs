import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import { Header } from './Header';
import { Footer } from './Footer';
import { ThemeBackground } from '@/components/shared/ThemeBackground';

export function Layout() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <ThemeBackground />
      <Header />
      <main className="flex-1 pt-20 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
