"use client";

import { clinic } from "@/config/clinic";
import { Calendar, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary-dark to-blue-900 py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
          Cuide hoje da sua saúde.
        </h2>

        <p className="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
          Quando precisar de acompanhamento, a Saúde Plena está pronta para
          receber você.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={clinic.whatsapp.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold text-lg rounded-xl shadow-lg shadow-accent/30 hover:bg-accent-dark hover:shadow-xl transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            Agendar consulta
          </a>

          <a
            href={clinic.whatsapp.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
