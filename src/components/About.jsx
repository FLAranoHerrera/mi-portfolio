function About() {
  return (
    <section className="py-20 bg-gray-900" id="about">
      <h2 className="text-4xl font-bold text-center mb-12 text-neon-purple">Sobre mí</h2>
      <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg space-y-4">
        <p>
          Soy <span className="text-neon-cyan font-bold">Francisco Arano</span>, desarrollador web <span className="text-neon-pink font-bold">Fullstack</span> me especializo en el desarrollo Backend mediante el framework<span className="text-neon-blue font-bold"> NestJS</span> sin embargo hago desarrollo Frontend con <span className="text-neon-purple font-bold">React + Vite, Bootstrap y Tailwind.</span>
        </p>
        <p>
          Me apasiona construir aplicaciones robustas, resolver problemas complejos y aprender nuevas tecnologías. En mi tiempo libre disfruto del <span className="text-neon-pink font-bold">gym, videojuegos</span> y programar proyectos personales.
        </p>
        <p>
          Ubicación: <span className="text-neon-cyan font-bold">Veracruz, México</span> | Idiomas: <span className="text-neon-blue font-bold">Español, Inglés</span>
        </p>
      </div>
    </section>
  );
}

export default About;
