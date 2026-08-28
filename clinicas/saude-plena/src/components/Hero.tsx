"use client";

import Image from "next/image";
import { clinic } from "@/config/clinic";
import {
  MapPin,
  MessageCircle,
  Calendar,
  ChevronRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-teal-50/30">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="animate-fade-in-up opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent">Cuidado médico humanizado em Maputo</span>
            </div>

            <h1 className="animate-fade-in-up animate-delay-100 opacity-0 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.1] mb-6">
              A sua saúde merece{" "}
              <span className="text-accent">cuidado, atenção</span>{" "}
              e confiança.
            </h1>

            <p className="animate-fade-in-up animate-delay-200 opacity-0 text-lg sm:text-xl text-gray-500 leading-relaxed mb-10">
              Na Saúde Plena, reunimos diferentes áreas de atendimento para oferecer
              um cuidado próximo, profissional e centrado nas necessidades de cada paciente.
            </p>

            <div className="animate-fade-in-up animate-delay-300 opacity-0 flex flex-col sm:flex-row items-center gap-4 mb-8">
              <a
                href={clinic.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold text-lg rounded-xl shadow-lg shadow-accent/25 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/35 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Agendar consulta
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={clinic.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold text-lg rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>

            <div className="animate-fade-in-up animate-delay-400 opacity-0 flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Sommerschield, Maputo</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/Doctor _ Health.jpg"
                alt="Profissional de saúde com estetoscópio em ambiente clínico"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <span className="text-accent font-bold text-lg">+</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">11 Especialidades</p>
                  <p className="text-xs text-gray-400">Áreas de atendimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
