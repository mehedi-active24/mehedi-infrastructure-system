"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Operator",      href: "/#operator"     },
  { label: "Architecture",  href: "/architecture"  },
  { label: "Telemetry",     href: "/#results"      },
  { label: "Ecosystem",     href: "/#stack"        },
  { label: "Intelligence",  href: "/#intelligence" },
  { label: "Audit",         href: "/#book"         },
];

export default function HeaderNav() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-dark/95 backdrop-blur-md border-b border-border-subtle py-3 shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-bg-dark/80 backdrop-blur-sm border-b border-transparent py-4"
        }`}
      >
        {/* Faint scanline texture */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,0.005)_3px,rgba(255,255,255,0.005)_4px)] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative flex items-center justify-between">

          {/* LEFT: Operator Identity */}
          <Link href="/" className="group flex flex-col leading-none select-none">
            <span className="font-mono text-sm font-bold tracking-[0.15em] text-text-primary uppercase group-hover:text-accent transition-colors duration-200">
              Mehedi Hasan
            </span>
            <span className="font-mono text-[9px] tracking-widest text-text-secondary/40 uppercase mt-0.5 group-hover:text-text-secondary/70 transition-colors">
              Outbound Infrastructure Systems
            </span>
          </Link>

          {/* CENTER: System Status Indicator (desktop) */}
          <div className="hidden lg:flex items-center gap-2 text-[9px] font-mono text-text-secondary/40 uppercase tracking-widest">
            <motion.div
              className="w-1 h-1 rounded-full bg-emerald-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <span>Infrastructure Status: Active</span>
          </div>

          {/* RIGHT: Navigation (desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setActiveItem(item.label)}
                onMouseLeave={() => setActiveItem(null)}
                className="relative group px-3 py-1.5 text-[11px] font-mono text-text-secondary uppercase tracking-wider hover:text-text-primary transition-colors duration-150"
              >
                {/* Hover background */}
                {activeItem === item.label && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-surface border border-border-subtle"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}

                {/* Label */}
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.label === "Audit" && (
                    <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                  )}
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[57px] left-0 right-0 z-40 bg-bg-dark/98 backdrop-blur-md border-b border-border-subtle"
          >
            <nav className="container mx-auto px-6 max-w-7xl py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-4 py-3 border border-border-subtle hover:border-accent/30 hover:bg-surface transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-mono text-text-secondary/30 w-4">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-mono text-text-secondary group-hover:text-text-primary uppercase tracking-wider transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-accent opacity-0 group-hover:opacity-100 text-xs font-mono transition-opacity">→</span>
                  </Link>
                </motion.div>
              ))}

              <div className="flex items-center gap-2 px-4 pt-3 mt-2 border-t border-border-subtle text-[9px] font-mono text-text-secondary/30 uppercase tracking-widest">
                <motion.div
                  className="w-1 h-1 rounded-full bg-emerald-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                Infrastructure Status: Active
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
