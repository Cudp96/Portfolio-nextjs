import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <About />
      <Skills/>
      <Project />
      <Contact />
    </main>
  );
}
