import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-mono bg-gray-900 text-gray-300 min-h-screen">
      {/* Navegación */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-neon-cyan">
              Francisco Arano
            </div>
            <div className="hidden md:flex space-x-8">
              <a 
                href="#about" 
                className="text-gray-300 hover:text-neon-purple transition-colors focus:outline-none focus:ring-2 focus:ring-neon-purple focus:ring-opacity-50 rounded px-3 py-1"
                aria-label="Ir a la sección Sobre mí"
              >
                Sobre Mí
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-neon-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-opacity-50 rounded px-3 py-1"
                aria-label="Ir a la sección Proyectos"
              >
                Proyectos
              </a>
              <a 
                href="#skills" 
                className="text-gray-300 hover:text-neon-pink transition-colors focus:outline-none focus:ring-2 focus:ring-neon-pink focus:ring-opacity-50 rounded px-3 py-1"
                aria-label="Ir a la sección Habilidades"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-neon-blue transition-colors focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-opacity-50 rounded px-3 py-1"
                aria-label="Ir a la sección Contacto"
              >
                Contacto
              </a>
            </div>
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-300 hover:text-neon-cyan transition-colors"
              aria-label="Abrir menú de navegación"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
