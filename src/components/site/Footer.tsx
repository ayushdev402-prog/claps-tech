import { Link } from "@tanstack/react-router";
import { Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-secondary/60">
      <div className="absolute inset-x-0 top-0 h-px gradient-brand opacity-60" />
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl gradient-brand text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display font-bold">Clasp Tech</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Building smart digital solutions for modern businesses — custom software, AI systems,
            CRMs, and analytics that scale.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/in/animeshkumar143/" },
              { Icon: Github, href: "https://github.com/Animeshkumar143?tab=repositories" },
              { Icon: Mail, href: "mailto:animeshkumar143@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-foreground">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-foreground">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-foreground">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-foreground">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/case-studies" className="hover:text-foreground">
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-foreground">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-foreground">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026-2027 Owned By: Claps Technology</p>
          <p>Crafted with precision · Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
