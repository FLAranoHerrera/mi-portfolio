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
          <p>Desarrollo y mantengo una plataforma SaaS para transporte público. Estas son tres contribuciones concretas de mi trabajo:</p>
          <ul className="experience-outcomes">
            <li><strong>Integración de sistemas con MQTT</strong><p>Implementé de forma individual la integración entre un backend legacy en Express y MongoDB y el nuevo backend en NestJS. Normalicé nombres de unidades y cobros registrados en el sistema anterior para hacerlos consumibles desde el nuevo backend.</p></li>
            <li><strong>Visualización de unidades en mapas</strong><p>Corregí en el frontend de Next.js un problema que impedía renderizar los iconos de los autobuses en mapas de OpenStreetMap y Google Maps, restableciendo la visualización de las unidades.</p></li>
            <li><strong>Portal administrativo para operaciones NFC</strong><p>Construí un portal para cadenas comerciales que permite gestionar llaves para recargas, expedir tarjetas NFC y consultar su saldo.</p></li>
          </ul>
        </div>
      </div>
      <p className="personal-note">
        Fuera del código: videojuegos, fitness y aprender cosas nuevas.
        Actualmente profundizo en Flutter y Dart.
      </p>
    </section>
  );
}
