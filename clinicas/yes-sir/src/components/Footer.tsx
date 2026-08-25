"use client";

import { clinic } from "@/config/clinic";
import Icon from "@/components/Icon";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {clinic.name}
            </h3>
            <p className="mb-3 flex items-start gap-2">
              <Icon name="map-pin" className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
              {clinic.location.address}
            </p>
            <p className="text-sm leading-relaxed">
              Cuidando do seu sorriso com excelência e carinho. Agende a sua
              consulta e descubra o poder de um sorriso saudável.
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
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Horário de Funcionamento
            </h3>
            <ul className="space-y-2 text-sm">
              {clinic.hours.map((entry, index) => (
                <li key={index} className="flex items-start gap-2">
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
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={clinic.whatsapp.getLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-accent transition-colors"
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
                    className="flex items-center hover:text-accent transition-colors"
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
                    className="flex items-center hover:text-accent transition-colors"
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

      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-navy-400">
          &copy; 2026 {clinic.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
