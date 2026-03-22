import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Enfoque from "@/components/Enfoque";
import Contacto from "@/components/Contacto";
import LightPillars from "@/components/LightPillars";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="page-shell relative isolate overflow-x-clip">
        <LightPillars />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-[82%] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute left-1/2 top-[28rem] h-[20rem] w-[20rem] translate-x-[18%] rounded-full bg-emerald-400/9 blur-3xl" />
          <div className="absolute left-1/2 top-[66rem] h-[24rem] w-[24rem] -translate-x-[45%] rounded-full bg-cyan-300/6 blur-3xl" />
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-[590px] bg-gradient-to-b from-transparent via-cyan-300/12 to-transparent" />
          <div className="absolute inset-y-0 left-1/2 w-px translate-x-[590px] bg-gradient-to-b from-transparent via-emerald-400/12 to-transparent" />
          <div className="absolute left-1/2 top-[16rem] h-px w-[1180px] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/6 to-transparent" />
          <div className="absolute left-1/2 top-[76rem] h-px w-[1180px] -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-300/6 to-transparent" />
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
