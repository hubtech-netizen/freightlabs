import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ThemeBackground } from '@/components/shared/ThemeBackground';

export function Layout() {

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
