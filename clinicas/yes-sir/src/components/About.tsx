"use client";

import Image from "next/image";
import {
  HeartPulse,
  Stethoscope,
  Shield,
} from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                Sobre a Clínica
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Clínica Marcelino dos Santos
            </h2>

            <p className="text-lg leading-relaxed text-navy-600">
              Inaugurada em Fevereiro de 2024, a Clínica Marcelino dos Santos é
              resultado da cooperação entre Moçambique e Cuba. Somos a primeira
              unidade especializada na prevenção e tratamento da diabetes no país.
            </p>

            <p className="text-lg leading-relaxed text-navy-600">
              Com tecnologia de ponta e profissionais altamente qualificados,
              oferecemos tratamento de primeira linha com o medicamento HEBERPROT-B,
              que reduz em 70% as hipóteses de amputação em pacientes com úlcera diabética.
            </p>

            <p className="text-lg leading-relaxed text-navy-600">
              A nossa missão é proporcionar um atendimento humanizado, colocando
              a saúde e o bem-estar dos nossos pacientes em primeiro lugar.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: Stethoscope, label: "Especializada" },
                { icon: HeartPulse, label: "Humanizada" },
                { icon: Shield, label: "24 Horas" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-navy-50 rounded-xl border border-navy-100"
                >
                  <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-navy-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-2xl sm:h-96">
              <Image
                src="/images/diabetic-center-2.jpg"
                alt="Interior moderno e equipado da Clínica Marcelino dos Santos em Maputo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy-100 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
