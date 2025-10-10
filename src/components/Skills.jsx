const skills = {
  languages: {
    title: 'Programming Languages',
    icon: '💻',
    items: [
      { name: 'JavaScript', level: 'Expert', color: 'neon-yellow' },
      { name: 'TypeScript', level: 'Expert', color: 'neon-blue' },
      { name: 'Python', level: 'Intermediate', color: 'neon-green' }
    ]
  },
  backend: {
    title: 'Backend Development',
    icon: '⚙️',
    items: [
      { name: 'NestJS', level: 'Expert', color: 'neon-red' },
      { name: 'Node.js', level: 'Expert', color: 'neon-green' },
      { name: 'Express', level: 'Advanced', color: 'neon-cyan' },
      { name: 'REST API', level: 'Expert', color: 'neon-purple' },
      { name: 'Swagger', level: 'Advanced', color: 'neon-blue' }
    ]
  },
  frontend: {
    title: 'Frontend Development',
    icon: '🎨',
    items: [
      { name: 'React', level: 'Expert', color: 'neon-cyan' },
      { name: 'Next.js', level: 'Advanced', color: 'neon-purple' },
      { name: 'Vite', level: 'Expert', color: 'neon-pink' },
      { name: 'TailwindCSS', level: 'Expert', color: 'neon-blue' },
      { name: 'Bootstrap', level: 'Advanced', color: 'neon-purple' },
      { name: 'HTML5', level: 'Expert', color: 'neon-orange' },
      { name: 'CSS3', level: 'Expert', color: 'neon-blue' }
    ]
  },
  database: {
    title: 'Database & Storage',
    icon: '🗄️',
    items: [
      { name: 'PostgreSQL', level: 'Advanced', color: 'neon-blue' },
      { name: 'MongoDB', level: 'Intermediate', color: 'neon-green' }
    ]
  },
  tools: {
    title: 'Tools & Technologies',
    icon: '🛠️',
    items: [
      { name: 'Git', level: 'Expert', color: 'neon-orange' },
      { name: 'Docker', level: 'Advanced', color: 'neon-blue' },
      { name: 'Vercel', level: 'Advanced', color: 'neon-purple' },
      { name: 'Render', level: 'Advanced', color: 'neon-cyan' },
      { name: 'GitHub Actions', level: 'Intermediate', color: 'neon-pink' }
    ]
  },
  soft: {
    title: 'Soft Skills',
    icon: '🤝',
    items: [
      { name: 'Team Leadership', level: 'Intermediate', color: 'neon-purple' },
      { name: 'Problem Solving', level: 'Advanced', color: 'neon-cyan' },
      { name: 'Code Review', level: 'Advanced', color: 'neon-blue' },
      { name: 'Mentoring', level: 'Intermediate', color: 'neon-pink' },
      { name: 'Agile/Scrum', level: 'Advanced', color: 'neon-green' }
    ]
  }
};

function Skills() {
  return (
    <section className="py-20 bg-gray-800" id="skills" role="region" aria-label="Habilidades técnicas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-neon-purple">
            🚀 Stack Tecnológico
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear aplicaciones web modernas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category], idx) => (
            <div 
              key={key}
              className="group bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-neon transition-all duration-500 transform hover:scale-105"
              role="article"
              aria-label={`Categoría de habilidades: ${category.title}`}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-bold text-neon-cyan group-hover:text-neon-purple transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.items.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx}
                    className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-${skill.color} animate-pulse`}></div>
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      skill.level === 'Expert' 
                        ? 'bg-green-500 text-gray-900' 
                        : skill.level === 'Advanced'
                        ? 'bg-blue-500 text-gray-900'
                        : 'bg-yellow-500 text-gray-900'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills adicionales */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-8 text-neon-pink text-center">
            🎯 Especializaciones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-3">🏗️</div>
              <h4 className="text-lg font-bold text-neon-cyan mb-2">Arquitectura</h4>
              <p className="text-gray-300 text-sm">Microservicios, APIs escalables</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="text-lg font-bold text-neon-purple mb-2">Seguridad</h4>
              <p className="text-gray-300 text-sm">JWT, OAuth, CORS, HTTPS</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-neon-pink mb-2">Performance</h4>
              <p className="text-gray-300 text-sm">Optimización, caching, CDN</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
              <div className="text-4xl mb-3">🧪</div>
              <h4 className="text-lg font-bold text-neon-blue mb-2">Testing</h4>
              <p className="text-gray-300 text-sm">Unit, Integration, E2E</p>
            </div>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-8 text-neon-cyan text-center">
            🏆 Certificaciones & Logros
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-800 rounded-xl">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="text-lg font-bold text-neon-purple mb-2">Henry Bootcamp</h4>
              <p className="text-gray-300 text-sm">Full Stack Developer</p>
              <p className="text-xs text-gray-400 mt-1">2025</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-xl">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="text-lg font-bold text-neon-cyan mb-2">Proyectos en Producción</h4>
              <p className="text-gray-300 text-sm">3+ Aplicaciones Live</p>
              <p className="text-xs text-gray-400 mt-1">99.9% Uptime</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-xl">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="text-lg font-bold text-neon-pink mb-2">Colaboraciones</h4>
              <p className="text-gray-300 text-sm">Open Source Contributor</p>
              <p className="text-xs text-gray-400 mt-1">GitHub Active</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Skills;
