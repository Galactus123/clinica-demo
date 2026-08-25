"use client";

import Image from "next/image";
import { clinic } from "@/config/clinic";
import Icon from "@/components/Icon";

export default function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Image */}
        <div className="relative h-72 sm:h-80 lg:h-auto lg:min-h-[500px]">
          <Image
            src="/images/Com a Estética Vitae é possível transformar o seu….jpg"
            alt="Transformação do sorriso antes e depois do tratamento dentário"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/90 lg:to-primary" />
        </div>

        {/* Right - CTA */}
        <div className="relative bg-primary flex items-center justify-center py-16 px-8 lg:py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl translate-y-1/2" />
          </div>

          <div className="relative z-10 text-center max-w-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Cuide hoje do seu sorriso.
            </h2>

            <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
              Agende a sua consulta e descubra como podemos transformar a sua saúde bucal
              com atendimento personalizado e de qualidade.
            </p>

            <a
              href={clinic.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/40 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <Icon name="whatsapp" className="h-6 w-6" />
              Marcar consulta pelo WhatsApp
            </a>

            <p className="mt-6 text-sm text-white/60">
              Resposta rápida via {clinic.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
