"use client";

import { clinic } from "@/config/clinic";
import Icon from "@/components/Icon";

export default function Location() {
  return (
    <section id="contacto" className="bg-navy-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent-dark uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            Localização e Horário
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Location Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Icon name="map-pin" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900">Morada</h3>
                <p className="mt-1 text-navy-600">
                  {clinic.location.address}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Icon name="clock" size={24} className="text-accent" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-semibold text-navy-900">
                  Horário de Funcionamento
                </h3>
                <ul className="mt-3 space-y-3">
                  {clinic.hours.map((entry, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 border border-navy-100"
                    >
                      <Icon
                        name="clock"
                        size={18}
                        className="flex-shrink-0 text-accent"
                      />
                      <span className="text-navy-700">
                        <span className="font-medium">{entry.days}</span>
                        <span className="mx-2 text-navy-300">|</span>
                        <span>{entry.time}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Map Placeholder */}
          <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-2xl bg-navy-100 shadow-sm sm:h-96 lg:h-full lg:min-h-[400px]">
            <div className="text-center">
              <Icon
                name="map-pin"
                size={48}
                className="mx-auto text-navy-300"
              />
              <p className="mt-4 text-lg font-medium text-navy-500">
                Google Maps
              </p>
              <p className="mt-2 text-sm text-navy-400">
                Integração com Google Maps em breve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
