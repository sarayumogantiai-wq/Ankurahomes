"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm border-b border-beige"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`font-serif text-xl tracking-wide transition-colors ${scrolled ? "text-ink" : "text-cream"}`}>
          <span className="font-semibold">ANKURA</span>
          <span className="font-light italic ml-1.5">Homes</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs tracking-[0.18em] uppercase font-sans font-light transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-stone" : "text-cream/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`text-xs tracking-[0.18em] uppercase font-sans px-5 py-2.5 border transition-all duration-300 ${
              scrolled
                ? "border-gold text-gold hover:bg-gold hover:text-cream"
                : "border-cream/60 text-cream hover:border-cream hover:bg-cream/10"
            }`}
          >
            Book a Visit
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors ${scrolled ? "text-ink" : "text-cream"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-beige px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs tracking-[0.18em] uppercase text-stone hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-xs tracking-[0.18em] uppercase border border-gold text-gold px-5 py-2.5 text-center hover:bg-gold hover:text-cream transition-all"
          >
            Book a Visit
          </a>
        </div>
      )}
    </header>
  );
}
