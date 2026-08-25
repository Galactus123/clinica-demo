"use client";

import { useState } from "react";
import { clinic } from "@/config/clinic";
import Icon from "@/components/Icon";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent-dark uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-navy-500 text-lg">
            Respostas às dúvidas mais comuns dos nossos pacientes.
          </p>
        </div>

        <div className="divide-y divide-navy-100 border-t border-b border-navy-100">
          {clinic.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between py-5 text-left text-navy-900 hover:text-accent transition-colors"
                >
                  <span className="text-lg font-medium pr-4">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-navy-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <Icon name="chevron-down" />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-5 text-navy-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
