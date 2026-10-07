import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Languages from './sections/Languages';

const App = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <Skills />
      <Education />
      <Projects />
      <Languages />
    </div>
  );
};

export default App;
