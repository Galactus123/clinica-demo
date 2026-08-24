"use client";

import { useState, useEffect } from "react";
import { clinic } from "@/config/clinic";
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
      className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo & Name */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-600 text-white sm:h-10 sm:w-10">
              <Icon name="smile" className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">
                {clinic.shortName}
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-wider text-cyan-600 sm:block">
                Dentária
              </span>
            </div>
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
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-cyan-50 hover:text-cyan-600"
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
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-600/25 transition-all hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-600/30 active:scale-[0.98]"
            >
              <Icon name="message-circle" className="h-4 w-4" />
              Marcar consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="flex h-5 w-5 flex-col items-center justify-center gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "translate-y-0.5 rotate-45"
                    : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-translate-y-0.5 -rotate-45"
                    : ""
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
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-600 text-white">
                <Icon name="smile" className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-gray-900">
                {clinic.shortName}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
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
                  className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 transition-all hover:bg-cyan-50 hover:text-cyan-600"
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 50}ms`
                      : "0ms",
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen
                      ? "translateX(0)"
                      : "translateX(20px)",
                  }}
                >
                  <Icon name="chevron-right" className="h-4 w-4 text-cyan-500" />
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu CTA */}
          <div className="border-t border-gray-100 px-6 py-6">
            <a
              href={clinic.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-cyan-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-600/25 transition-all hover:bg-cyan-700 active:scale-[0.98]"
            >
              <Icon name="message-circle" className="h-5 w-5" />
              Marcar consulta
            </a>
            <p className="mt-3 text-center text-xs text-gray-400">
              Resposta rápida pelo WhatsApp
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
