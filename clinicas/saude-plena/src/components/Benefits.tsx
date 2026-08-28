"use client";

import Image from "next/image";
import { clinic } from "@/config/clinic";
import {
  HeartHandshake,
  Users,
  MessageCircle,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "heart-handshake": HeartHandshake,
  users: Users,
  "message-circle": MessageCircle,
};

export default function Benefits() {
  return (
    <section className="bg-primary py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/_National Family Caregivers Month.jpg"
                alt="Profissional de saúde a acolher paciente com cuidado e atenção"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                Diferenciais
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Cuidar é mais do que tratar.
            </h2>

            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              É ouvir, compreender e acompanhar cada pessoa com atenção.
            </p>

            <div className="space-y-6">
              {clinic.benefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.icon] || HeartHandshake;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
