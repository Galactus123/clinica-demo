"use client";

import Image from "next/image";
import { clinic } from "@/config/clinic";
import Icon from "@/components/Icon";

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Serviços
            </span>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Os nossos serviços
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg">
            Oferecemos uma gama completa de serviços médicos com foco na
            prevenção e tratamento da diabetes.
          </p>
        </div>

        {/* Banner Image */}
        <div className="relative mb-16 rounded-xl overflow-hidden shadow-xl">
          <div className="relative h-64 sm:h-80 md:h-96">
            <Image
              src="/images/medical-exam.jpg"
              alt="Exame médico especializado na Clínica Marcelino dos Santos"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 sm:px-12 max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Cuidados de saúde especializados
                </h3>
                <p className="text-white/90 text-lg">
                  Prevenção, diagnóstico e tratamento da diabetes com tecnologia
                  de ponta e profissionais cubanos e moçambicanos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clinic.services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-navy-100"
            >
              <div className="mb-4">
                <Icon
                  name={service.icon}
                  size={28}
                  className="text-accent group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-navy-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
