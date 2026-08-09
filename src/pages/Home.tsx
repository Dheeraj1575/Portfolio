import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Credibility from '../components/Credibility/Credibility';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Certifications from '../components/Certifications/Certifications';
import Education from '../components/Education/Education';
import Profiles from '../components/Profiles/Profiles';
import ValueSection from '../components/ValueSection/ValueSection';
import ResumeCTA from '../components/ResumeCTA/ResumeCTA';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Credibility />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Profiles />
        <ValueSection />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
