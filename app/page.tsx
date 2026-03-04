import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Enfoque from "@/components/Enfoque";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Enfoque />
      <Contacto />
    </main>
  );
}