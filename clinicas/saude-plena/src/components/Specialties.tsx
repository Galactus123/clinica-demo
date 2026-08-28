"use client";

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
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-5 sm:p-6 border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-accent/10 transition-colors duration-300 mb-4">
                  <IconComponent className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {specialty.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {specialty.description}
                </p>
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
