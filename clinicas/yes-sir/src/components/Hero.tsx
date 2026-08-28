"use client";

import Image from "next/image";
import { clinic } from "@/config/clinic";
import {
  MapPin,
  MessageCircle,
  Calendar,
  ChevronRight,
  Heart,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/clinic-interior.jpg"
          alt="Interior moderno da Clínica Marcelino dos Santos"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg mb-8 backdrop-blur-sm">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white">Primeira Clínica de Diabetes em Moçambique</span>
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 opacity-0 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Prevenção e Tratamento da{" "}
            <span className="text-accent">Diabetes</span>{" "}
            em Maputo.
          </h1>

          <p className="animate-fade-in-up animate-delay-200 opacity-0 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl mb-10">
            A Clínica Marcelino dos Santos é a primeira unidade especializada
            no tratamento da diabetes em Moçambique, com tratamento de primeira
            linha using HEBERPROT-B.
          </p>

          <div className="animate-fade-in-up animate-delay-300 opacity-0 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={clinic.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold text-lg rounded-lg shadow-lg shadow-accent/30 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/40 transition-all duration-300"
            >
              Marcar Consulta
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={clinic.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-lg border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="animate-fade-in-up animate-delay-400 opacity-0 flex items-center gap-2 text-white/50 mt-8">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Av. Paulo Samuel Kankhomba, 1170 — Maputo</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up animate-delay-400 opacity-0">
        <a
          href="#servicos"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-accent transition-colors duration-300"
          aria-label="Scroll para serviços"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
