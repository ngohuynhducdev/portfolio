import Footer from "@/src/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <main className="flex flex-col flex-1 pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* More sections will be added here */}
      </main>
      <Footer />
    </>
  );
}
