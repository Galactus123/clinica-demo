"use client";

import Image from "next/image";
import { clinic } from "@/config/clinic";
import Icon from "@/components/Icon";

export default function Process() {
  return (
    <section id="processo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent-dark uppercase tracking-wider mb-4">
            Processo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Como funciona o nosso atendimento
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg">
            Um processo simples e transparente para cuidar da sua saúde oral
            com conforto e confiança.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {clinic.process.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {index < clinic.process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-accent/20 z-0" />
                )}

                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-accent text-navy-900 text-2xl font-bold shadow-lg shadow-accent/30 mb-5">
                  {item.step}
                </div>

                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border border-navy-100 shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={item.icon}
                    size={26}
                    className="text-accent"
                  />
                </div>

                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-navy-500 text-sm leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting image */}
        <div className="mt-16 relative mx-auto max-w-3xl">
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/tampa-bay-hightower-dermatology-doctors-group-sun-city-lifestyle-commercial-editorial-professional-p.jpg"
              alt="Consulta profissional na Clínica Dentária Yes Sir"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-semibold text-lg">
                Atendimento personalizado e profissional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
