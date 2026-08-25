"use client";

import { clinic } from "@/config/clinic";
import Icon from "@/components/Icon";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-navy-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que dizem sobre nós
          </h2>
          <p className="text-navy-300 max-w-2xl mx-auto text-lg">
            A satisfação dos nossos pacientes é a nossa maior recompensa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clinic.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-navy-800 rounded-xl p-6 shadow-lg border border-navy-700"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="star" className="w-5 h-5 text-accent" />
                ))}
              </div>
              <p className="text-navy-200 mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="text-white font-semibold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
