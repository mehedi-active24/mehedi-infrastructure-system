"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About",         href: "/#about"        },
  { label: "Services",      href: "/services"      },
  { label: "Case Studies",  href: "/architecture"  },
  { label: "Results",       href: "/#results"      },
  { label: "Field Reports",  href: "/logs"          },
  { label: "Tools",         href: "/toolkit"       },
  { label: "Book a Call",   href: "/#book"         },
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

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
              Email Deliverability Consultant
            </span>
          </Link>

          {/* CENTER: Availability Signal (desktop) */}
          <div className="hidden lg:flex items-center gap-2 text-[9px] font-mono text-text-secondary/50 uppercase tracking-widest">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <span>Accepting new clients · Q3 2026</span>
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
                  {item.label === "Book a Call" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
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

      {/* Mobile Side Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
            />

            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] sm:w-[350px] z-50 bg-bg-dark border-l border-border-subtle p-6 flex flex-col justify-between shadow-2xl md:hidden overflow-y-auto selection:bg-accent/30"
            >
              {/* Top Section */}
              <div className="space-y-8">
                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider">
                      Mehedi Hasan
                    </span>
                    <span className="text-[8px] font-mono text-text-secondary/40 uppercase tracking-widest mt-0.5">
                      Email Deliverability Consultant
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-1.5 border border-border-subtle text-text-secondary hover:text-text-primary transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Navigation Nodes */}
                <nav className="flex flex-col gap-1.5">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 border border-border-subtle hover:border-accent/30 hover:bg-surface transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-mono text-text-secondary group-hover:text-text-primary uppercase tracking-wider transition-colors">
                            {item.label}
                          </span>
                        </div>
                        <span className="text-accent opacity-0 group-hover:opacity-100 text-[10px] font-mono transition-all transform translate-x-1 group-hover:translate-x-0">
                          NODE_IN // →
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Bottom: Availability */}
              <div className="space-y-3 mt-8 pt-6 border-t border-border-subtle font-mono text-[9px] text-text-secondary/50">
                <div className="flex justify-between">
                  <span>ACCEPTING CLIENTS</span>
                  <span className="text-emerald-400">Q3 2026</span>
                </div>
                <div className="flex justify-between">
                  <span>DISCOVERY CALL</span>
                  <span className="text-emerald-400">FREE · 20 MIN</span>
                </div>
                <div className="flex justify-between">
                  <span>RESPONSE TIME</span>
                  <span className="text-emerald-400">WITHIN 24H</span>
                </div>
                <div className="flex justify-between">
                  <span>ACTIVE SLOTS</span>
                  <span className="text-amber-400">LIMITED</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
