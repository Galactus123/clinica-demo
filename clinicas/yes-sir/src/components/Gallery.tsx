"use client";

import Image from "next/image";

const galleryItems = [
  {
    src: "/images/5770305768338033.jpg",
    alt: "Dentista a realizar exame oral em paciente com equipamentos modernos",
    label: "Exame Dentário",
  },
  {
    src: "/images/Kelowna Allergy Clinic.jpg",
    alt: "Interior moderno e equipado do consultório da Clínica Dentária Yes Sir",
    label: "Consultório",
  },
  {
    src: "/images/cobb dental, dentist, local dentist, kennesaw….jpg",
    alt: "Avaliação dental detalhada com espelho profissional",
    label: "Avaliação",
  },
  {
    src: "/images/Affordable Dentures & Implants in Rockford, IL.jpg",
    alt: "Modelo de próteses dentárias de alta qualidade",
    label: "Próteses",
  },
  {
    src: "/images/Today's Care.jpg",
    alt: "Profissional de saúde dedicado e sorridente",
    label: "Equipe",
  },
  {
    src: "/images/tampa-bay-hightower-dermatology-doctors-group-sun-city-lifestyle-commercial-editorial-professional-p.jpg",
    alt: "Consulta personalizada entre médico e paciente",
    label: "Atendimento",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-navy-50 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent-dark uppercase tracking-wider mb-4">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Conheça a nossa clínica
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Um espaço moderno, acolhedor e equipado com tecnologia de ponta,
            pensado para proporcionar o máximo conforto e segurança em cada
            atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-navy-100 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-4 left-5 text-sm font-semibold text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
