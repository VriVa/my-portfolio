import Navbar from "@/components/Navbar";
import Home from "@/components/Home";

import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import CustomCursor from "@/components/CustomCursor"
import CurtainBackground from "@/components/CurtainBackground"

export default function HomePage() {
  return (
    <div className="relative min-h-screen cursor-none">
      <CurtainBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        
      </main>
      <Footer />
      
    </div>
  );
}
