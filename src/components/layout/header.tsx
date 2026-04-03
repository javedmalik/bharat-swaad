"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, easeOut, easeIn, type Variants } from "framer-motion";
import Container from "@/components/common/container";
import Logo from "@/components/common/logo";
import ThemeToggle from "@/components/common/theme-toggle";
import { navigationLinks } from "@/content/navigation";
import { cn } from "@/lib/cn";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: easeIn,
    },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: easeOut,
    },
  }),
};

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-emerald-900/20 bg-white/90 shadow-lg backdrop-blur-xl dark:bg-zinc-900/90 dark:border-emerald-500/10"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navigationLinks.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="group relative px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
                  >
                    {item.label}
                    <span className="absolute inset-x-4 -bottom-1 h-0.5 scale-x-0 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* CTA Button - Desktop */}
              <motion.a
                href={"/#contact"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-xl lg:flex"
              >
                Get in Touch
                <ChevronRight className="h-4 w-4" />
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className={cn(
                  "relative h-10 w-10 rounded-full border transition-all duration-300 lg:hidden",
                  open
                    ? "border-emerald-500 bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-emerald-400 hover:bg-emerald-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                )}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <motion.div
                  animate={{ rotate: open ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {open ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-emerald-100 bg-white/95 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/95 lg:hidden"
            >
              <Container className="py-6">
                <div className="flex flex-col gap-2">
                  {navigationLinks.map((item, i) => (
                    <motion.div
                      key={item.href}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-zinc-700 transition-all hover:bg-emerald-50 hover:text-emerald-600 dark:text-zinc-300 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
                      >
                        {item.label}
                        <ChevronRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <motion.div
                    custom={navigationLinks.length}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-4 pt-2"
                  >
                    <Link
                      href="{/#contact}"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02]"
                    >
                      Get in Touch
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>

                {/* Contact Info in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 border-t border-emerald-100 pt-4 dark:border-zinc-800"
                >
                  <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
                    Need help? Call us: <a href="tel:+919876543210" className="text-emerald-600">+91-9876543210</a>
                  </p>
                </motion.div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}