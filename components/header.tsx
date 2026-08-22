"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useState } from "react";
import { navigation } from "@/data/portfolio";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <nav className="shell nav-wrap" aria-label="Main navigation">
        <a href="#main" className="brand" aria-label="Mohammad Abdalla, home">
          <span className="brand-mark">MA</span>
          <span className="brand-name">Mohammad Abdalla</span>
          <span className="brand-dot" />
        </a>

        <div className="desktop-nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-cta">
          <span>Let&apos;s talk</span>
          <i aria-hidden="true">↗</i>
        </a>

        <button
          type="button"
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={open ? "rotate-down" : ""} />
          <span className={open ? "rotate-up" : ""} />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="shell">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
