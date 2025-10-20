import React from 'react';
import { PROJECTS_DATA } from '@/config/projects';

const Projects: React.FC = React.memo(() => {
  const projects = PROJECTS_DATA;
  return (
    <section className="py-20 bg-gray-900" id="projects" role="region" aria-label="Proyectos destacados">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-neon-purple">
            🚀 Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aplicaciones web modernas construidas con las mejores tecnologías del mercado
          </p>
        </div>

        {/* Proyectos Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.featured.map((project) => (
            <article 
              key={project.id}
              className="group bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-neon transition-all duration-500 transform hover:scale-105"
              role="article"
              aria-label={`Proyecto: ${project.title}`}
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <div className="text-gray-400 text-sm font-mono">Proyecto Destacado</div>
                    </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === 'Production' 
                      ? 'bg-green-500 text-gray-900' 
                      : 'bg-yellow-500 text-gray-900'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-neon-cyan bg-gray-700 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400">{project.metrics}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-neon-cyan group-hover:text-neon-purple transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-700 text-neon-pink text-xs rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-neon-purple to-neon-cyan text-gray-900 font-bold py-2 px-4 rounded-lg text-center hover:shadow-neon transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-neon-purple focus:ring-opacity-50"
                    aria-label={`Ver proyecto ${project.title} en vivo`}
                  >
                    🌐 Ver Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-neon-cyan font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-4 focus:ring-neon-cyan focus:ring-opacity-50"
                    aria-label={`Ver código fuente de ${project.title} en GitHub`}
                  >
                    📁 Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Otros Proyectos */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-neon-pink text-center">
            💻 Otros Proyectos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.other.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-neon-cyan bg-gray-600 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400">{project.status}</span>
                </div>
                <h4 className="text-lg font-bold mb-2 text-neon-purple group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-600 text-neon-pink text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={project.github}
            target="_blank"
            rel="noopener noreferrer"
                    className="text-neon-cyan hover:text-neon-purple transition-colors text-sm font-semibold"
                    aria-label={`Ver código de ${project.title}`}
                  >
                    📁 Ver en GitHub →
                  </a>
                  {project.metrics && (
                    <span className="text-xs text-gray-400">{project.metrics}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Mensaje para futuros proyectos */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              💡 <span className="text-neon-cyan font-semibold">Más proyectos</span> se agregarán próximamente
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Colabora conmigo en más proyectos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
