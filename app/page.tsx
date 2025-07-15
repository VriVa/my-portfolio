import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import AchieveCert from "@/components/AchieveCert";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
//import Experience from "@/components/Experience";
import Extracurricular from "@/components/Extracurricular";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import CustomCursor from "@/components/CustomCursor"
import CheckeredBackground from "@/components/CheckeredBackground"
import FloatingAnimations from "@/components/FloatingAnimations"

export default function HomePage() {
  return (
    <div className="relative min-h-screen cursor-none">
      <CheckeredBackground />
      <FloatingAnimations />
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <AchieveCert />
        {/* <Experience /> */}
        <Extracurricular />
        <Contact />
        
      </main>
      <Footer />
      
    </div>
  );
}
