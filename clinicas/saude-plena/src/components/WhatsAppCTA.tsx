"use client";

import { clinic } from "@/config/clinic";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-accent to-accent-dark rounded-3xl p-10 sm:p-14 shadow-2xl shadow-accent/20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-6">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Precisa de atendimento?
            </h2>

            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Fale com a Saúde Plena e saiba como podemos ajudar.
            </p>

            <a
              href={clinic.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-accent font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6" />
              Falar com a Saúde Plena no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
