"use client";

import Image from "next/image";
import {
  HeartPulse,
  Stethoscope,
  Shield,
} from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Images */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-2xl shadow-primary/10 sm:h-96">
              <Image
                src="/images/Consultório Psicologia.jpg"
                alt="Interior do Consultório Saúde Plena — sala de espera em Sommerschield, Maputo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Secondary image */}
            <div className="absolute -bottom-8 -right-8 w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <Image
                src="/images/home care.jpg"
                alt="Atendimento humanizado e próximo"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <HeartPulse className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Cuidado humano</p>
                  <p className="text-xs text-gray-400">Centrado no paciente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                Sobre a Clínica
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Conheça a Saúde Plena
            </h2>

            <p className="text-lg leading-relaxed text-gray-500">
              O Consultório Médico Saúde Plena é uma estrutura de atendimento
              em saúde localizada em Maputo, com atuação em diferentes áreas
              médicas e terapêuticas.
            </p>

            <p className="text-lg leading-relaxed text-gray-500">
              A proposta da Saúde Plena é proporcionar acompanhamento
              profissional e humanizado, colocando as necessidades do paciente
              no centro do cuidado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: Stethoscope, label: "Multidisciplinar" },
                { icon: HeartPulse, label: "Humanizado" },
                { icon: Shield, label: "Profissional" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100"
                >
                  <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
