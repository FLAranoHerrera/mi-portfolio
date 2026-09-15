import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { useMobileMenu } from "./hooks/useMobileMenu";
const links = [
  ["about", "Experiencia"],
  ["projects", "Proyectos"],
  ["skills", "Stack"],
  ["contact", "Contacto"],
];
export default function App() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu();
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [isMobileMenuOpen, closeMobileMenu]);
  return (
    <>
      <GoogleAnalytics
        measurementId={import.meta.env.VITE_GA_MEASUREMENT_ID || ""}
      />
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <header className="site-header">
        <nav className="wrap nav" aria-label="Navegación principal">
          <a className="brand" href="#main">
            francisco<span>.arano</span>
          </a>
          <div className="desktop-links">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>
          <button
            ref={button}
            className="menu-toggle"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? "Cerrar" : "Menú"}{" "}
            <span aria-hidden="true">{isMobileMenuOpen ? "×" : "☰"}</span>
          </button>
        </nav>
        <div id="mobile-nav" className="mobile-nav" hidden={!isMobileMenuOpen}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={closeMobileMenu}>
              {label}
            </a>
          ))}
        </div>
      </header>
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
