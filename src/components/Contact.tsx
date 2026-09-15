export default function Contact() {
  return (
    <>
      <section
        className="section wrap"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-panel">
          <p className="eyebrow">04 / CONVERSEMOS</p>
          <h2 id="contact-title">¿Construimos algo juntos?</h2>
          <p>
            Estoy abierto a oportunidades de desarrollo y colaboraciones en
            backend, SaaS e integraciones.
          </p>
          <div className="actions">
            <a
              className="button primary"
              href="mailto:aranoherrera92@gmail.com"
            >
              Escríbeme ↗
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/francisco-leonardo-arano-herrera-540198169"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="text-link"
              href="https://github.com/FLAranoHerrera"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
          <p className="contact-email">aranoherrera92@gmail.com</p>
        </div>
      </section>
      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Francisco Arano</span>
        <span>Hecho con React y TypeScript · Veracruz, México</span>
      </footer>
    </>
  );
}
