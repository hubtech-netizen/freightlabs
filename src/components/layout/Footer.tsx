import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/freightlabs-no_background.png"
                alt="FreightLabs Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              The Science of Moving Freight. Building the most trusted, intelligent logistics ecosystem.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent hover:bg-primary/10 flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent hover:bg-primary/10 flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="mailto:info@freightlabs.com"
                className="w-9 h-9 rounded-lg bg-accent hover:bg-primary/10 flex items-center justify-center transition-colors group"
              >
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/routeforge" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  RouteForge™
                </Link>
              </li>
              <li>
                <Link to="/lanemaker" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  LaneMaker™
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  The Lab (About)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} FreightLabs. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Powered by AI Technology & Advanced Logistics Software
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
