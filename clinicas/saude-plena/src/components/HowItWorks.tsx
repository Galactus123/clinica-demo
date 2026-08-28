"use client";

import { clinic } from "@/config/clinic";
import {
  Search,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  search: Search,
  "message-circle": MessageCircle,
  "calendar-check": CalendarCheck,
};

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Como funciona
            </span>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Agendar a sua consulta é simples
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clinic.process.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Search;
            return (
              <div key={index} className="relative text-center">
                {/* Connector line */}
                {index < clinic.process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-accent/20" />
                )}

                <div className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto rounded-2xl bg-white border-2 border-accent/20 shadow-lg shadow-accent/10 mb-6">
                  <IconComponent className="h-8 w-8 text-accent" />
                </div>

                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold mb-4">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href={clinic.whatsapp.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold text-lg rounded-xl shadow-lg shadow-accent/25 hover:bg-accent-dark hover:shadow-xl transition-all duration-300"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
