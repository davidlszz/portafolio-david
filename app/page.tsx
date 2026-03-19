import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Enfoque from "@/components/Enfoque";
import Contacto from "@/components/Contacto";
import CyberParticles from "@/components/CyberParticles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative isolate">
        <CyberParticles />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-[-6rem] top-[28rem] h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute left-1/2 top-[58rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-300/6 blur-3xl" />
          <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-cyan-300/10 to-transparent" />
          <div className="absolute inset-y-0 right-[8%] w-px bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent" />
        </div>
        <Navbar />
        <div className="relative z-10">
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Stack />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Enfoque />
          <SectionDivider />
          <Contacto />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  );
}
