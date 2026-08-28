"use client";

import { clinic } from "@/config/clinic";
import { ExternalLink } from "lucide-react";
import { Instagram } from "@/components/Icon";

const placeholderPosts = [
  { id: 1, label: "Post 1" },
  { id: 2, label: "Post 2" },
  { id: 3, label: "Post 3" },
  { id: 4, label: "Post 4" },
  { id: 5, label: "Post 5" },
  { id: 6, label: "Post 6" },
];

export default function InstagramFeed() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-accent rounded-full" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">
              Instagram
            </span>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Continue a acompanhar a Saúde Plena
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Veja conteúdos, informações e novidades através do nosso Instagram.
          </p>
        </div>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {placeholderPosts.map((post) => (
            <div
              key={post.id}
              className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <Instagram className="h-8 w-8 text-gray-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={clinic.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Instagram className="h-5 w-5" />
            Seguir no Instagram
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
