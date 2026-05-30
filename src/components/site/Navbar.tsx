import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/blogs", label: "Blogs" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "w-full max-w-6xl rounded-full transition-all duration-300 border",
          scrolled ? "glass border-white/60" : "bg-white/40 backdrop-blur-md border-white/40",
        )}
      >
        <div className="flex items-center justify-between pl-5 pr-2 py-2">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl gradient-brand text-white shadow-md group-hover:scale-105 transition">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display font-bold tracking-tight text-foreground">
              Clasp Tech<span className="text-primary"></span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active =
                l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={cn(
                      "px-3.5 py-1.5 text-sm rounded-full transition-colors",
                      active
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center text-sm font-medium px-4 py-2 rounded-full text-white gradient-brand hover:opacity-95 hover:shadow-lg hover:shadow-primary/30 transition"
            >
              Get Started
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/60 px-3 pb-3 pt-2">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block px-3 py-2 rounded-xl text-sm text-foreground hover:bg-secondary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/contact"
                  className="block text-center px-3 py-2 rounded-xl text-sm text-white gradient-brand"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
