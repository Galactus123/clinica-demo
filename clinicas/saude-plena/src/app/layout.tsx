import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saúde Plena | Consultório Médico em Maputo",
  description:
    "Consultório Médico Saúde Plena em Maputo. Atendimento em diferentes áreas da saúde, com cuidado profissional e humanizado. Entre em contacto para informações e agendamento.",
  keywords: [
    "consultório médico",
    "médico Maputo",
    "saúde Maputo",
    "psicologia",
    "psiquiatria",
    "pediatria",
    "ginecologia",
    "dermatologia",
    "fisioterapia",
    "Sommerschield",
    "Saúde Plena",
  ],
  openGraph: {
    title: "Saúde Plena | Consultório Médico em Maputo",
    description:
      "Consultório Médico Saúde Plena em Maputo. Atendimento humanizado e profissional em diferentes áreas da saúde.",
    type: "website",
    locale: "pt_MZ",
    siteName: "Saúde Plena",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
