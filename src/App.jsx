import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Languages from './sections/Languages';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <Skills />
      <Education />
      <Projects />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
