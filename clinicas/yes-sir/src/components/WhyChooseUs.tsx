"use client";

import { clinic } from "@/config/clinic";
import Icon from "@/components/Icon";

export default function WhyChooseUs() {
  return (
    <section id="por-que-nos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Diferenciais
            </span>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Por que escolher a Clínica Marcelino dos Santos?
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg">
            Somos comprometidos em fornecer cuidados de saúde de excelência,
            com foco na prevenção e tratamento da diabetes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {clinic.whyChooseUs.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-navy-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={benefit.icon}
                  size={24}
                  className="text-accent"
                />
              </div>
              <h3 className="font-semibold text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-navy-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
