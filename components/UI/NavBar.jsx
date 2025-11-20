"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const lineProps = {
  className: "block h-[3px] w-8 rounded bg-current origin-center absolute",
  transition: { duration: 0.3, ease: "easeInOut" },
};

const navLinks = [
  { label: "Domov", href: "/" },
  { label: "Autoservis", href: "/autoservis" },
  { label: "Motocykle", href: "/motocykle" },
  { label: "Kontakt", href: "/#contactSection" },
];

const navHeight = {
  scrolled: 60,
  unscrolled: 80,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBgColor = "rgba(0,0,0,255)"
    // mobileOpen || scrolled ? "oklch(28.6% 0.066 53.813)" : "rgba(0,0,0,0)";
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        backgroundColor: navBgColor,
        height: scrolled ? navHeight.scrolled : navHeight.unscrolled,
      }}
      transition={{ duration: 0.3 }}
      className={`${scrolled ? "border-b border-white" : "border-b border-white"
        } fixed top-0 left-0 w-full z-50 font-space-grotesk`}
    >
      <div className="flex items-center justify-between h-full px-6 sm:px-10 lg:px-16 lg:ml-16">
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center h-full">
          <div className="flex flex-col leading-none">
            <span className="text-white font-fancy text-3xl">
              Autoservis Matejka Zdenko
            </span>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <div key={label} className="relative group">
                <Link
                  href={href}
                  className="uppercase text-white font-primary font-bold text-sm transition"
                >
                  {label}
                </Link>
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-yellow-400 transition-all duration-150 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </div>
            );
          })}
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="relative w-12 h-12 px-3 flex flex-col items-center justify-center focus:outline-none text-white"
          >
            <motion.span
              {...lineProps.transition}
              className={lineProps.className}
              animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -10 }}
            />
            <motion.span
              {...lineProps.transition}
              className={lineProps.className}
              animate={mobileOpen ? { opacity: 0, y: 0 } : { opacity: 1 }}
            />
            <motion.span
              {...lineProps.transition}
              className={lineProps.className}
              animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 10 }}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed left-0 border-t border-white/25 bg-black shadow-lg z-40 flex flex-col p-6 w-full"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="py-3 text-lg text-white font-primary font-bold"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
