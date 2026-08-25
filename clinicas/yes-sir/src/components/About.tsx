"use client";

import Image from "next/image";
import { clinic } from "@/config/clinic";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent-dark uppercase tracking-wider">
              Sobre a Clínica
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              {clinic.name}
            </h2>

            <p className="text-lg leading-relaxed text-navy-600">
              Com uma abordagem focada na excelência, nossa equipa multidisciplinar trabalha
              de forma integrada para oferecer tratamentos personalizados. Cada atendimento é
              conduzido com rigor técnico e cuidado humanizado, garantindo que cada paciente
              receba a atenção que merece em um ambiente acolhedor e seguro.
            </p>

            <p className="text-lg leading-relaxed text-navy-600">
              Acreditamos que a saúde bucal é fundamental para a qualidade de vida e o
              bem-estar geral. Por isso, investimos continuamente em tecnologia de ponta e
              capacitação profissional para entregar serviços de saúde com o mais alto padrão
              de qualidade, sempre priorizando a confiança e a satisfação dos nossos pacientes.
            </p>
          </div>

          {/* Right Column - Clinic Interior Image */}
          <div className="relative">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-2xl sm:h-96">
              <Image
                src="/images/Kelowna Allergy Clinic.jpg"
                alt="Interior moderno e profissional da Clínica Dentária Yes Sir em Maputo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy-200/50 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
