import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import AchieveCert from "@/components/AchieveCert";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Extracurricular from "@/components/Extracurricular";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function HomePage() {
  return (
    <>
   <Navbar />
      <main className="pt-20 space-y-32 px-6">
        <Home />
        <About />
        <Projects />
        <Skills />
        <AchieveCert />
        <Experience />
        <Extracurricular />
        <Contact />
        <Footer />
      </main>
      </>
  );
}
