import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Achievement from "@/sections/Achievements";
import Contact from "@/sections/Contact";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--fg)] transition-colors duration-500">
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievement />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;