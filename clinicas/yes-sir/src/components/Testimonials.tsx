"use client";

import { clinic } from "@/config/clinic";
import Icon from "@/components/Icon";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          O que dizem sobre nós
        </h2>
        <p className="text-center text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 mb-10 max-w-md mx-auto">
          Depoimentos de demonstração
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clinic.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="star" className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="text-gray-900 font-semibold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
