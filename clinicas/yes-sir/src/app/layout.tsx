import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica Marcelino dos Santos | Prevenção e Tratamento da Diabetes em Maputo",
  description:
    "Primeira clínica especializada na prevenção e tratamento da diabetes em Moçambique. HEBERPROT-B, exames de laboratório, educação em diabetes. Abertos 24 horas. Av. Paulo Samuel Kankhomba, 1170, Maputo.",
  keywords: [
    "clínica diabetes",
    "diabetes Maputo",
    "tratamento diabetes Moçambique",
    "HEBERPROT-B",
    "prevenção diabetes",
    "exames laboratório",
    "Marcelino dos Santos",
    "clínica Maputo",
    "diabetes tratamento",
  ],
  openGraph: {
    title: "Clínica Marcelino dos Santos | Prevenção e Tratamento da Diabetes",
    description:
      "Primeira clínica especializada na prevenção e tratamento da diabetes em Moçambique. HEBERPROT-B — reduz 70% as amputações.",
    type: "website",
    locale: "pt_MZ",
    siteName: "Clínica Marcelino dos Santos",
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
    <html lang="pt" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body className="min-h-screen bg-white text-navy-900 font-sans">
        {children}
      </body>
    </html>
  );
}
