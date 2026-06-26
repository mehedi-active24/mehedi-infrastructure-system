"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Case Studies", href: "/#results" },
  { label: "Work Sample",  href: "/work-sample" },
  { label: "Contact",      href: "/#book" },
];

export default function HeaderNav() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-dark/95 backdrop-blur-md border-b border-border-subtle py-3 shadow-[0_1px_20px_rgba(0,0,0,0.4)]"
            : "bg-bg-dark/85 backdrop-blur-sm border-b border-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl flex items-center justify-between">

          {/* Identity */}
          <Link href="/" className="group flex flex-col leading-none select-none">
            <span className="font-mono text-sm font-bold tracking-[0.12em] text-text-primary uppercase group-hover:text-accent transition-colors duration-200">
              Mehedi Hasan
            </span>
            <span className="font-mono text-[9px] tracking-widest text-text-secondary/40 uppercase mt-0.5 group-hover:text-text-secondary/60 transition-colors">
              Email Deliverability
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => setActiveItem(item.label)}
                onMouseLeave={() => setActiveItem(null)}
                className="relative group px-4 py-2 text-[11px] font-mono text-text-secondary uppercase tracking-wider hover:text-text-primary transition-colors duration-150"
              >
                {activeItem === item.label && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-surface border border-border-subtle rounded-sm"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Mobile hamburger — 44px touch target */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent/40 hover:bg-surface transition-all"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] sm:w-[320px] z-50 bg-bg-dark border-l border-border-subtle flex flex-col shadow-2xl md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border-subtle shrink-0">
                <div>
                  <p className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider">Mehedi Hasan</p>
                  <p className="text-[9px] font-mono text-text-secondary/40 uppercase tracking-widest mt-0.5">Email Deliverability</p>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-9 h-9 border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent/30 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-4 py-3.5 border border-border-subtle hover:border-accent/30 hover:bg-surface active:bg-surface-hover transition-all group"
                    >
                      <span className="text-[11px] font-mono text-text-secondary group-hover:text-text-primary uppercase tracking-wider transition-colors">
                        {item.label}
                      </span>
                      <span className="text-accent opacity-0 group-hover:opacity-100 text-xs font-mono transition-opacity">→</span>
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-5 py-4 border-t border-border-subtle shrink-0 space-y-2.5">
                <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest">
                  <span className="text-text-secondary/40">Accepting clients</span>
                  <span className="text-emerald-400">Q3 2026</span>
                </div>
                <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest">
                  <span className="text-text-secondary/40">Discovery call</span>
                  <span className="text-emerald-400">Free · 20 min</span>
                </div>
                <div className="flex justify-between text-[9px] font-mono uppercase tracking-widest">
                  <span className="text-text-secondary/40">Response</span>
                  <span className="text-emerald-400">Within 24h</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
