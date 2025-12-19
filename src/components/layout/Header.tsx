import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Platform' },
    { path: '/about', label: 'Our Mission' },
  ];

  const solutionsLinks = [
    { path: '/routeforge', label: 'RouteForge™', description: 'For Carriers' },
    { path: '/loadforge', label: 'LoadForge™', description: 'For Shippers' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 dark:bg-background/70 backdrop-blur-xl border-b border-border/40 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={theme === 'light' ? '/logo-white-back.png' : '/logo-dark-back.png'}
              alt="FreightLabs Logo"
              className="h-12 w-auto group-hover:scale-105 transition-transform object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-lg ${
                  location.pathname === link.path
                    ? 'text-brand-blue'
                    : 'text-foreground hover:text-brand-blue'
                }`}
              >
                <motion.div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-brand-blue/10 opacity-100'
                      : 'bg-brand-blue/0 opacity-0 hover:opacity-100'
                  }`}
                  layoutId="navBg"
                />
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}

            <div className="relative group">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={`text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-lg flex items-center gap-1 ${
                  solutionsLinks.some((l) => location.pathname === l.path)
                    ? 'text-brand-blue'
                    : 'text-foreground hover:text-brand-blue'
                }`}
              >
                <motion.div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    solutionsLinks.some((l) => location.pathname === l.path)
                      ? 'bg-brand-blue/10 opacity-100'
                      : 'bg-brand-blue/0 opacity-0 group-hover:opacity-100'
                  }`}
                  layoutId="navBg2"
                />
                <span className="relative z-10 flex items-center gap-1">
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </span>
              </button>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={isDropdownOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={`absolute top-full right-0 mt-2 w-56 bg-card border border-border/40 rounded-xl shadow-2xl backdrop-blur-xl ${
                  isDropdownOpen ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
              >
                {solutionsLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 text-sm font-medium transition-all ${
                      index === 0 ? 'rounded-t-lg' : ''
                    } ${
                      index === solutionsLinks.length - 1 ? 'rounded-b-lg' : ''
                    } ${
                      location.pathname === link.path
                        ? 'bg-brand-blue/10 text-brand-blue'
                        : 'text-foreground hover:bg-brand-blue/5 hover:text-brand-blue'
                    }`}
                  >
                    <div className="font-semibold">{link.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{link.description}</div>
                  </Link>
                ))}
              </motion.div>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-brand-blue to-brand-blue/80 hover:from-brand-blue hover:to-brand-blue text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-t border-border/40 backdrop-blur-xl bg-background/80"
          >
            <nav className="flex flex-col py-6 space-y-1 px-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                      location.pathname === link.path
                        ? 'bg-brand-blue/10 text-brand-blue'
                        : 'text-foreground hover:bg-brand-blue/5 hover:text-brand-blue hover:translate-x-1'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
              >
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all flex items-center justify-between text-foreground hover:bg-brand-blue/5 hover:text-brand-blue"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col space-y-1 mt-2 pl-4"
                  >
                    {solutionsLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                          location.pathname === link.path
                            ? 'bg-brand-blue/10 text-brand-blue'
                            : 'text-foreground hover:bg-brand-blue/5 hover:text-brand-blue'
                        }`}
                      >
                        <div className="font-semibold">{link.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{link.description}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.05 + 0.1, duration: 0.2 }}
                className="pt-4 pb-2 space-y-3"
              >
                <Link to="/contact">
                  <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-blue/80 text-white shadow-lg hover:shadow-xl group">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <div className="pt-4 space-y-2 border-t border-border/30">
                  <a
                    href="tel:+18175208170"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-blue transition-colors px-4 py-2 rounded-lg hover:bg-brand-blue/5"
                  >
                    <Phone className="w-4 h-4" />
                    +1 817 520 8170
                  </a>
                  <a
                    href="mailto:info@FreightLabs.io"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-blue transition-colors px-4 py-2 rounded-lg hover:bg-brand-blue/5"
                  >
                    <Mail className="w-4 h-4" />
                    info@FreightLabs.io
                  </a>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
