import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 pt-16">
        <Hero />
        {/* More sections will be added here */}
      </main>
      <Footer />
    </>
  );
}
