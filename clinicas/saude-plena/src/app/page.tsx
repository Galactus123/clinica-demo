import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import InstagramFeed from "@/components/InstagramFeed";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Specialties />
      <Benefits />
      <HowItWorks />
      <WhatsAppCTA />
      <FAQ />
      <Location />
      <InstagramFeed />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
