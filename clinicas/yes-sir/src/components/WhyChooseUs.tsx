"use client";

import { clinic } from "@/config/clinic";
import Icon from "@/components/Icon";

export default function WhyChooseUs() {
  return (
    <section id="por-que-nos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Clínica Dentária Yes Sir?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Somos comprometidos em fornecer cuidados dentários de excelência,
            combinando profissionalismo, tecnologia moderna e um atendimento
            verdadeiramente humanizado para cada paciente.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {clinic.whyChooseUs.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-50 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={benefit.icon}
                  size={24}
                  className="text-cyan-600"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
