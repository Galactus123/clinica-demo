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
  title: "Clínica Dentária Yes Sir | Maputo, Moçambique",
  description:
    "Clínica dentária premium em Karl Marx, Maputo. Serviços completos de odontologia: consultas, limpezas, implantes, ortodontia, clareamento e mais. Marque a sua consulta pelo WhatsApp.",
  keywords: [
    "clínica dentária",
    "dentista Maputo",
    "odontologia Moçambique",
    "implantes dentários",
    "clareamento dentário",
    "ortodontia",
    "tratamento dental",
    "Yes Sir",
    "Oral Premium",
  ],
  openGraph: {
    title: "Clínica Dentária Yes Sir | Maputo, Moçambique",
    description:
      "O seu sorriso merece cuidados de excelência. Serviços completos de odontologia em Maputo.",
    type: "website",
    locale: "pt_MZ",
    siteName: "Clínica Dentária Yes Sir",
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
