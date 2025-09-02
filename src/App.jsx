import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-mono bg-gray-900 text-gray-300">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
