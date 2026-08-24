"use client";

import Image from "next/image";
import { clinic } from "@/config/clinic";
import Icon from "@/components/Icon";

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src="/images/cobb dental, dentist, local dentist, kennesaw….jpg"
                alt="Exame dentário detalhado com espelho profissional - tratamento odontológico"
                fill
                className="object-cover"
                sizes="100vw"
              />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 via-cyan-900/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 sm:px-12 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Cuidados dentários para toda a família
                </h2>
                <p className="text-white/90 text-lg">
                  Oferecemos uma gama completa de serviços odontológicos com
                  tecnologia de ponta e profissionais altamente qualificados para
                  cuidar da saúde bucal de você e da sua família.
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
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-4">
                <Icon
                  name={service.icon}
                  size={28}
                  className="text-cyan-600 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
