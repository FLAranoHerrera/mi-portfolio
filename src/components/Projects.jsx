const projects = [
  { title: 'Mi Portfolio', description: 'Portfolio personal con React + Vite + Tailwind.', link: 'https://github.com/FLAranoHerrera/mi-portfolio' },
  { title: 'Backend de Ecommerce con Nestjs', description: 'Este es una Backend API como parte de mi especialización en Backend developer con el framework NestJS de arquitectura modular.', link: 'https://ecommerce-flarano-herrera.onrender.com/api' },
  { title: 'Ecommerce Lienzo Culinario', description: 'Backend API para el proyecto Lienzo Culinario, desarrollado como parte del programa Full Stack Developer de Henry. Esta API proporciona funcionalidades completas para una plataforma de delivery de comida.', link: 'https://lienzofront.vercel.app' },

];

function Projects() {
  return (
    <section className="py-20 bg-gray-900" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 text-neon-purple">Proyectos</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((p, idx) => (
          <a
            key={idx}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-xl hover:shadow-neon transition duration-300 flex flex-col justify-between h-full"
          >
            <h3 className="text-2xl font-bold mb-4 text-neon-cyan text-center">{p.title}</h3>
            <p className="text-gray-300 text-center">{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
