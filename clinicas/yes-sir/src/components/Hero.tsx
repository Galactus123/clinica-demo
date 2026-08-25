"use client";

import Image from "next/image";
import { clinic } from "@/config/clinic";
import Icon from "@/components/Icon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-navy-700/40 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-[10%] w-16 h-16 border-2 border-accent/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-[15%] w-10 h-10 bg-accent/10 rounded-lg rotate-45 animate-float animate-delay-200" />
        <div className="absolute bottom-1/4 left-[20%] w-12 h-12 border border-accent/15 rounded-xl animate-float animate-delay-400" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #c9a84c 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in-up opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-8">
              <Icon name="sparkles" className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Clínica Dentária Premium</span>
            </div>

            <h1 className="animate-fade-in-up animate-delay-100 opacity-0 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              {clinic.tagline.split("excelência").map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                      excelência
                    </span>
                  )}
                </span>
              ))}
            </h1>

            <p className="animate-fade-in-up animate-delay-200 opacity-0 text-lg sm:text-xl text-navy-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              A sua saúde oral é a nossa prioridade. Com equipamentos modernos e uma equipa dedicada, 
              oferecemos tratamentos dentários de excelência num ambiente acolhedor e profissional.
            </p>

            <div className="animate-fade-in-up animate-delay-300 opacity-0 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href={clinic.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-accent text-navy-900 font-bold text-lg rounded-full shadow-lg shadow-accent/25 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon name="message-circle" className="w-5 h-5" />
                Marcar consulta
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#servicos"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-full border-2 border-white/20 hover:border-accent/50 hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon name="stethoscope" className="w-5 h-5" />
                Conhecer os nossos serviços
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-shrink-0 animate-fade-in-up animate-delay-400 opacity-0">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-pulse-soft" />
              <div className="absolute inset-3 rounded-full overflow-hidden shadow-2xl shadow-black/30">
                <Image
                  src="/images/Embracing Oral Beauty_ The Power of a Healthy Smile.jpg"
                  alt="Sorriso saudável e bonito - resultado de tratamento dentário de excelência"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 420px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 bg-accent rounded-full shadow-lg flex items-center justify-center animate-float">
                <Icon name="sparkles" className="w-5 h-5 text-navy-900" />
              </div>
              <div className="absolute bottom-8 left-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center animate-float animate-delay-200">
                <Icon name="heart" className="w-4 h-4 text-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up animate-delay-400 opacity-0 mt-16 lg:mt-24 flex justify-center">
          <a
            href="#servicos"
            className="flex flex-col items-center gap-2 text-navy-400 hover:text-accent transition-colors duration-300"
            aria-label="Scroll para serviços"
          >
            <span className="text-sm font-medium">Descubra mais</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
