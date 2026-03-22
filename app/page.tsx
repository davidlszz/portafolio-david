import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Enfoque from "@/components/Enfoque";
import Contacto from "@/components/Contacto";
import Navbar from "@/components/Navbar";
import NoiseOverlay from "@/components/NoiseOverlay";
import PointerGlow from "@/components/PointerGlow";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="page-shell relative isolate overflow-x-clip">
        <NoiseOverlay />
        <PointerGlow />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[6%] top-16 h-72 w-72 rounded-full bg-[color:var(--accent-strong)]/12 blur-[140px]" />
          <div className="absolute right-[8%] top-[18rem] h-[26rem] w-[26rem] rounded-full bg-[color:var(--secondary)]/12 blur-[180px]" />
          <div className="absolute left-1/2 top-[68rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-white/5 blur-[200px]" />
          <div className="absolute left-[14%] top-[92rem] h-[18rem] w-[18rem] rounded-full bg-[color:var(--accent)]/8 blur-[160px]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/28 to-transparent" />
        </div>
        <Navbar />
        <div className="relative z-10 pb-6 pt-22 md:pt-28">
          <Hero />
          <About />
          <Stack />
          <Projects />
          <Enfoque />
          <Contacto />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  );
}
