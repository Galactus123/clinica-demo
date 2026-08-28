"use client";

import { clinic } from "@/config/clinic";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo variant="light" className="mb-4" />
            <p className="mb-3 flex items-start gap-2 text-navy-200">
              <Icon name="map-pin" className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
              {clinic.location.address}
            </p>
            <p className="text-sm leading-relaxed text-navy-300">
              Primeira clínica especializada na prevenção e tratamento da
              diabetes em Moçambique. Tratamento com HEBERPROT-B.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {clinic.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-navy-200 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Horário
            </h3>
            <ul className="space-y-2 text-sm">
              {clinic.hours.map((entry, index) => (
                <li key={index} className="flex items-start gap-2 text-navy-200">
                  <Icon name="clock" className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <span>
                    <span className="font-medium text-white">{entry.days}</span>
                    <br />
                    {entry.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="text-navy-200 text-sm">
                <Icon name="phone" className="w-4 h-4 mr-2 text-accent inline" />
                +258 82 518 1818
              </li>
              <li className="text-navy-200 text-sm">
                <Icon name="phone" className="w-4 h-4 mr-2 text-accent inline" />
                +258 86 318 1818
              </li>
              <li>
                <a
                  href={clinic.whatsapp.getLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-navy-200 hover:text-accent transition-colors"
                >
                  <Icon name="message-circle" className="w-4 h-4 mr-2 text-accent" />
                  WhatsApp
                </a>
              </li>
              {clinic.social.instagram && (
                <li>
                  <a
                    href={clinic.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-navy-200 hover:text-accent transition-colors"
                  >
                    <Icon name="instagram" className="w-4 h-4 mr-2 text-accent" />
                    Instagram
                  </a>
                </li>
              )}
              {clinic.social.facebook && (
                <li>
                  <a
                    href={clinic.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-navy-200 hover:text-accent transition-colors"
                  >
                    <Icon name="facebook" className="w-4 h-4 mr-2 text-accent" />
                    Facebook
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-navy-300">
          &copy; 2026 {clinic.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
