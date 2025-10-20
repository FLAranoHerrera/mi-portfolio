import { lazy, Suspense } from 'react';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';
import SEOHead from './components/SEOHead';
import GoogleAnalytics from './components/GoogleAnalytics';
import { useMobileMenu } from './hooks/useMobileMenu';

// Lazy loading para componentes pesados
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

const App: React.FC = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, handleOverlayClick } = useMobileMenu();
  const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

  return (
    <>
      <SEOHead />
      {GA_ID && GA_ID !== 'G-XXXXXXXXXX' && <GoogleAnalytics measurementId={GA_ID} />}
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
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-300 hover:text-neon-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-opacity-50 rounded p-2"
              aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-gray-800 border-t border-gray-700 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#about" 
                onClick={closeMobileMenu}
                className="block text-gray-300 hover:text-neon-purple transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:ring-opacity-50 rounded px-4 py-3 text-lg font-semibold hover:bg-gray-700 hover:shadow-neon transform hover:scale-105"
                aria-label="Ir a la sección Sobre mí"
              >
                👨‍💻 Sobre Mí
              </a>
              <a 
                href="#projects" 
                onClick={closeMobileMenu}
                className="block text-gray-300 hover:text-neon-cyan transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-opacity-50 rounded px-4 py-3 text-lg font-semibold hover:bg-gray-700 hover:shadow-neon transform hover:scale-105"
                aria-label="Ir a la sección Proyectos"
              >
                🚀 Proyectos
              </a>
              <a 
                href="#skills" 
                onClick={closeMobileMenu}
                className="block text-gray-300 hover:text-neon-pink transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-pink focus:ring-opacity-50 rounded px-4 py-3 text-lg font-semibold hover:bg-gray-700 hover:shadow-neon transform hover:scale-105"
                aria-label="Ir a la sección Habilidades"
              >
                ⚡ Skills
              </a>
              <a 
                href="#contact" 
                onClick={closeMobileMenu}
                className="block text-gray-300 hover:text-neon-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-opacity-50 rounded px-4 py-3 text-lg font-semibold hover:bg-gray-700 hover:shadow-neon transform hover:scale-105"
                aria-label="Ir a la sección Contacto"
              >
                📞 Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay para cerrar menú móvil */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* Contenido principal */}
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner color="neon-cyan" text="Cargando información personal..." />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingSpinner color="neon-purple" text="Cargando proyectos..." />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingSpinner color="neon-pink" text="Cargando habilidades..." />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingSpinner color="neon-blue" text="Cargando información de contacto..." />}>
          <Contact />
        </Suspense>
      </main>
      </div>
    </>
  );
}

export default App;
