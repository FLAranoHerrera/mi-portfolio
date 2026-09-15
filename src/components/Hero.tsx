export default function Hero() {
  return (
    <section className="hero wrap" aria-label="Presentación principal">
      <div>
        <p className="eyebrow">FRANCISCO ARANO · FULL STACK DEVELOPER</p>
        <h1>
          Software que conecta
          <br />
          <span>ideas y operaciones.</span>
        </h1>
        <p className="lead">
          Desarrollo APIs, integraciones y aplicaciones web. Mi enfoque está en
          el backend y en construir soluciones útiles para productos SaaS.
        </p>
        <div className="actions">
          <a className="button primary" href="#projects">
            Ver proyectos <span aria-hidden="true">↗</span>
          </a>
          <a className="button" href="#contact">
            Contactar
          </a>
          <a
            className="text-link"
            href={`${import.meta.env.BASE_URL}cv/Francisco_Arano_CV.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Ver CV ↗
          </a>
        </div>
        <p className="availability">
          <span aria-hidden="true">●</span> Veracruz, México · Abierto a
          oportunidades remotas
        </p>
      </div>
      <aside className="hero-note">
        <span className="eyebrow">ACTUALMENTE</span>
        <h2>
          Construyendo
          <br />
          con propósito.
        </h2>
        <p>Full Stack en Peek Softworks</p>
        <div className="note-row">
          <span>01</span> APIs y servicios backend
        </div>
        <div className="note-row">
          <span>02</span> Integraciones y datos
        </div>
        <div className="note-row">
          <span>03</span> Experiencias web
        </div>
        <p className="mono muted">NestJS / TypeScript / PostgreSQL</p>
      </aside>
    </section>
  );
}
