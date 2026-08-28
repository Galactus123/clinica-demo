"use client";

import { clinic } from "@/config/clinic";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function Location() {
  return (
    <section id="contactos" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Contactos
            </span>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Estamos em Maputo
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/5">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Morada</h3>
                <p className="text-gray-500">{clinic.location.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/5">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Telefone</h3>
                <a
                  href={`tel:${clinic.phone}`}
                  className="text-gray-500 hover:text-accent transition-colors"
                >
                  {clinic.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/5">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Horário</h3>
                <div className="space-y-2">
                  {clinic.hours.map((entry, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                    >
                      <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-gray-600">
                        <span className="font-semibold text-gray-900">{entry.days}</span>
                        <span className="mx-2 text-gray-300">|</span>
                        {entry.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={`tel:${clinic.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                Ligar agora
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <ExternalLink className="h-5 w-5" />
                Ver localização
              </a>
            </div>
          </div>

          {/* Right - Map Placeholder */}
          <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-2xl bg-gray-100 shadow-sm lg:h-full lg:min-h-[400px]">
            <div className="text-center">
              <MapPin className="mx-auto h-12 w-12 text-gray-300" />
              <p className="mt-4 text-lg font-medium text-gray-400">
                Google Maps
              </p>
              <p className="mt-2 text-sm text-gray-300">
                Integração com Google Maps em breve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
