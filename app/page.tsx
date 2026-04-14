import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* More sections will be added here */}
      </main>
      <Footer />
    </>
  );
}
