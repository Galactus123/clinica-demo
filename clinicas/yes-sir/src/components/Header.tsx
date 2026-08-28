"use client";

import { useState, useEffect } from "react";
import { clinic } from "@/config/clinic";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="inicio"
      className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/8"
          : "bg-white"
      }`}
    >
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-end items-center h-9 gap-6">
          <a href={`tel:+258825181818`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Icon name="phone" className="w-3.5 h-3.5" />
            +258 82 518 1818
          </a>
          <a href={`tel:+258863181818`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Icon name="phone" className="w-3.5 h-3.5" />
            +258 86 318 1818
          </a>
          <span className="flex items-center gap-1.5 text-accent">
            <Icon name="clock" className="w-3.5 h-3.5" />
            24 Horas
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
          >
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {clinic.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href={clinic.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-accent/20 transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/30 active:scale-[0.98]"
            >
              Marcar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-navy-700 transition-colors hover:bg-navy-50 lg:hidden"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="flex h-5 w-5 flex-col items-center justify-center gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-navy-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "translate-y-0.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-navy-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-navy-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "-translate-y-0.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between border-b border-navy-100 px-6 py-5">
            <Logo />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-navy-500 transition-colors hover:bg-navy-50 hover:text-navy-700"
              aria-label="Fechar menu"
            >
              <Icon name="x" className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <div className="flex flex-col gap-1">
              {clinic.navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-navy-700 transition-all hover:bg-navy-50 hover:text-primary"
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                  }}
                >
                  <Icon name="chevron-right" className="h-4 w-4 text-accent" />
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu CTA */}
          <div className="border-t border-navy-100 px-6 py-6">
            <a
              href={clinic.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-accent px-6 py-3.5 text-base font-bold text-white shadow-md shadow-accent/20 transition-all hover:bg-accent-dark active:scale-[0.98]"
            >
              Marcar Consulta
            </a>
            <p className="mt-3 text-center text-xs text-navy-400">
              Resposta rápida pelo WhatsApp
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
