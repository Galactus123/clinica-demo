"use client";

import { clinic } from "@/config/clinic";
import {
  Phone,
  MapPin,
} from "lucide-react";
import { Instagram } from "@/components/Icon";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <span className="text-lg font-bold tracking-wide block">SAÚDE PLENA</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 block">
                  Consultório Médico
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Cuidando da sua saúde com profissionalismo e humanização.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {clinic.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${clinic.phone}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  {clinic.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                {clinic.location.zone}, {clinic.location.city}
              </li>
              <li>
                <a
                  href={clinic.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  <Instagram className="h-4 w-4 text-accent" />
                  @saudeplena_consultoriomedico
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold mb-4">Horário</h3>
            <ul className="space-y-2">
              {clinic.hours.map((entry, index) => (
                <li key={index} className="text-sm text-gray-400">
                  <span className="font-medium text-white">{entry.days}</span>
                  <br />
                  {entry.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-500">
          &copy; 2026 Consultório Médico Saúde Plena. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
