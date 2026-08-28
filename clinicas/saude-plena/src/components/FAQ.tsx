"use client";

import { useState } from "react";
import { clinic } from "@/config/clinic";
import { ChevronDown, MessageCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              FAQ
            </span>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Respostas às dúvidas mais comuns dos nossos pacientes.
          </p>
        </div>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {clinic.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between py-5 text-left text-gray-900 hover:text-accent transition-colors"
                >
                  <span className="text-lg font-semibold pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`shrink-0 h-5 w-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-5 text-gray-500 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href={clinic.whatsapp.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            <MessageCircle className="h-5 w-5" />
            Mais perguntas? Fale connosco
          </a>
        </div>
      </div>
    </section>
  );
}
