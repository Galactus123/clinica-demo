"use client";

import {
  Heart,
  Layers,
  MapPin,
  CalendarCheck,
} from "lucide-react";

const items = [
  { icon: Heart, label: "Atendimento humanizado" },
  { icon: Layers, label: "Diversas especialidades" },
  { icon: MapPin, label: "Localização em Maputo" },
  { icon: CalendarCheck, label: "Agendamento fácil" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-gray-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
