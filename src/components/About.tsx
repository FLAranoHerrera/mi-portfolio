export default function About() {
  return (
    <section
      className="section wrap"
      id="about"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <p className="eyebrow">01 / EXPERIENCIA</p>
        <h2 id="experience-title">Software en el mundo real.</h2>
      </div>
      <div className="experience">
        <div>
          <h3>Desarrollador Full Stack</h3>
          <p className="accent">Peek Softworks</p>
          <p className="muted small">Noviembre 2025 — actualidad</p>
        </div>
        <div>
          <p>
            Desarrollo y mantengo una plataforma SaaS para transporte público.
            Trabajo en APIs, autenticación e integraciones de pagos y
            geolocalización, además de interfaces web y despliegues con Docker y
            DigitalOcean.
          </p>
          <p className="muted">
            Conecto necesidades de operación con software mantenible, desde los
            servicios backend hasta la interfaz.
          </p>
        </div>
      </div>
      <p className="personal-note">
        Fuera del código: videojuegos, fitness y aprender cosas nuevas.
        Actualmente profundizo en Flutter y Dart.
      </p>
    </section>
  );
}
