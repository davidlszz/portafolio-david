import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Enfoque from "@/components/Enfoque";
import Contacto from "@/components/Contacto";
import CyberParticles from "@/components/CyberParticles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative isolate">
      <CyberParticles />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Enfoque />
        <Contacto />
        <Footer />
      </div>
    </main>
  );
}
