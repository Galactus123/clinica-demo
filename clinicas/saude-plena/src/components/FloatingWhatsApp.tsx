"use client";

import { clinic } from "@/config/clinic";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href={clinic.whatsapp.getLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 md:hidden"
      aria-label="Contactar pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
