"use client";

import Image from "next/image";
import { clinic } from "@/config/clinic";
import {
  Brain,
  HeartPulse,
  Mic,
  Hand,
  Activity,
  Stethoscope,
  Baby,
  Heart,
  Eye,
  ScanFace,
  Dumbbell,
  ChevronRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  "heart-pulse": HeartPulse,
  mic: Mic,
  hand: Hand,
  activity: Activity,
  stethoscope: Stethoscope,
  baby: Baby,
  heart: Heart,
  eye: Eye,
  "scan-face": ScanFace,
  dumbbell: Dumbbell,
};

const specialtyImages: Record<string, { src: string; alt: string }> = {
  "Psicologia": {
    src: "/images/Affordable Online Psychologist Consultation Options.jpg",
    alt: "Consulta psicológica profissional",
  },
  "Psiquiatria": {
    src: "/images/Consultorio.jpg",
    alt: "Sala de consulta para acompanhamento psiquiátrico",
  },
  "Clínica Geral": {
    src: "/images/747808713167978402.jpg",
    alt: "Médica a realizar exame clínico geral",
  },
  "Neurologia": {
    src: "/images/Cardiologists Say This Simple Habit Lowers Your Risk of Heart Disease - AOL.jpg",
    alt: "Avaliação neurológica com estetoscópio",
  },
  "Fisioterapia": {
    src: "/images/1018095060756489663.jpg",
    alt: "Espaço de terapia e reabilitação",
  },
};

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Especialidades
            </span>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            As nossas especialidades
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Encontre o acompanhamento que procura.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {clinic.specialties.map((specialty, index) => {
            const IconComponent = iconMap[specialty.icon] || Stethoscope;
            const image = specialtyImages[specialty.title];
            return (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Image or Icon */}
                {image ? (
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                  </div>
                ) : (
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-accent/10 transition-colors duration-300 mb-4">
                      <IconComponent className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {image && (
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 mb-3">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                  )}
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={clinic.whatsapp.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-xl transition-all duration-300"
          >
            Ver todas as especialidades
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
