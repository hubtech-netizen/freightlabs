import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-20 bg-gradient-to-b from-card to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/freightlabs-no_background.png"
                alt="FreightLabs Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xs">
              The science of moving freight. Building the most trusted, intelligent logistics ecosystem powered by AI.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-brand-blue/50 border border-brand-blue/20 group"
              >
                <Linkedin className="w-5 h-5 text-brand-blue group-hover:text-brand-blue" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-brand-blue/50 border border-brand-blue/20 group"
              >
                <Twitter className="w-5 h-5 text-brand-blue group-hover:text-brand-blue" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wide">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/routeforge" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center gap-1 group">
                  RouteForge™
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/loadforge" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center gap-1 group">
                  LoadForge™
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center gap-1 group">
                  The Lab (About)
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center gap-1 group">
                  Contact
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center gap-1 group">
                  Careers
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center gap-1 group">
                  Privacy Policy
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors inline-flex items-center gap-1 group">
                  Terms of Service
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pb-12 border-b border-border/30">
          <div>
            <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider mb-3">Phone</p>
            <a
              href="tel:+18175208170"
              className="flex items-center gap-2 text-sm text-foreground hover:text-brand-blue transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 text-brand-blue" />
              </div>
              +1 817 520 8170
            </a>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider mb-3">Email</p>
            <a
              href="mailto:info@FreightLabs.io"
              className="flex items-center gap-2 text-sm text-foreground hover:text-brand-blue transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4 text-brand-blue" />
              </div>
              info@FreightLabs.io
            </a>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider mb-3">Address</p>
            <div className="flex items-start gap-2 text-sm text-foreground group">
              <div className="w-8 h-8 rounded-lg bg-brand-azure dark:bg-brand-navy-light flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-4 h-4 text-brand-blue" />
              </div>
              <span className="leading-relaxed">
                1621 Central Avenue<br />
                Suite 58586<br />
                Cheyenne, WY 82201
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FreightLabs. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Powered by AI Technology & Advanced Logistics Software
          </p>
        </div>
      </div>
    </footer>
  );
}
