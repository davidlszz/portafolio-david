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
      <main className="page-shell relative isolate overflow-x-clip">
        <CyberParticles />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-[88%] rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="absolute left-1/2 top-[24rem] h-[24rem] w-[24rem] translate-x-[18%] rounded-full bg-emerald-400/12 blur-3xl" />
          <div className="absolute left-1/2 top-[62rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-300/7 blur-3xl" />
          <div className="absolute left-1/2 top-[112rem] h-[26rem] w-[26rem] -translate-x-[70%] rounded-full bg-emerald-300/8 blur-3xl" />
          <div className="absolute left-1/2 top-[8rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-cyan-300/6" />
          <div className="absolute left-1/2 top-[7rem] h-[46rem] w-[46rem] -translate-x-1/2 rounded-full border border-emerald-400/5" />
          <div className="absolute left-[-12rem] top-[42rem] h-[24rem] w-[24rem] rounded-full bg-cyan-300/6 blur-3xl" />
          <div className="absolute right-[-12rem] top-[90rem] h-[24rem] w-[24rem] rounded-full bg-emerald-300/6 blur-3xl" />
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-[590px] bg-gradient-to-b from-transparent via-cyan-300/12 to-transparent" />
          <div className="absolute inset-y-0 left-1/2 w-px translate-x-[590px] bg-gradient-to-b from-transparent via-emerald-400/12 to-transparent" />
          <div className="absolute left-1/2 top-[16rem] h-px w-[1180px] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/8 to-transparent" />
          <div className="absolute left-1/2 top-[76rem] h-px w-[1180px] -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-300/8 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-slate-950/45 to-transparent" />
        </div>
        <Navbar />
        <div className="relative z-10 pb-6">
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
