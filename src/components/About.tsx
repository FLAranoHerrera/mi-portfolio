import React from 'react';

const About: React.FC = React.memo(() => {
  return (
    <section className="py-20 bg-gray-800" id="about" role="region" aria-label="Información sobre Francisco Arano">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-neon-purple">
            👨‍💻 Sobre Mí
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desarrollador Fullstack apasionado por crear soluciones tecnológicas innovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Información Personal */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan">🚀 Mi Historia</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Soy <span className="text-neon-cyan font-bold">Francisco Leonardo Arano Herrera</span>,
                  un desarrollador <span className="text-neon-pink font-bold">Fullstack</span> especializado
                  en arquitecturas escalables y aplicaciones web modernas.
                </p>
                <p>
                  Mi experiencia principal se centra en el desarrollo <span className="text-neon-blue font-bold">Backend </span>
                  utilizando <span className="text-neon-purple font-bold">NestJS</span>, TypeScript y bases de datos
                  relacionales, complementado con experiencia sólida en <span className="text-neon-pink font-bold">Frontend </span>
                  con React, Vite y frameworks CSS modernos.
                </p>
                <p>
                  Desde noviembre de 2025 trabajo como desarrollador Full Stack en Peek Softworks.
                  Desarrollo una plataforma SaaS para transporte público: APIs, autenticación,
                  integraciones de pagos y geolocalización, interfaces web y despliegues con Docker y DigitalOcean.
                </p>
              </div>
            </div>

            {/* Pasatiempos */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-neon-pink">🎮 Más Sobre Mí</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🏋️‍♂️</div>
                  <h4 className="text-lg font-bold text-neon-cyan mb-2">Fitness Enthusiast</h4>
                  <p className="text-gray-300 text-sm">Mantener un estilo de vida saludable y activo</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎮</div>
                  <h4 className="text-lg font-bold text-neon-purple mb-2">Gaming Lover</h4>
                  <p className="text-gray-300 text-sm">Disfruto de los videojuegos en mi tiempo libre</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💻</div>
                  <h4 className="text-lg font-bold text-neon-pink mb-2">Code Passion</h4>
                  <p className="text-gray-300 text-sm">Proyectos personales y contribuciones open source</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🌱</div>
                  <h4 className="text-lg font-bold text-neon-blue mb-2">Continuous Learning</h4>
                  <p className="text-gray-300 text-sm">Siempre aprendiendo nuevas tecnologías</p>
                </div>
              </div>
            </div>
          </div>

          {/* Información Técnica */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-neon-blue">📍 Información</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-gray-300">Ubicación</p>
                    <p className="text-neon-cyan font-bold">Veracruz, México</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🗣️</span>
                  <div>
                    <p className="text-gray-300">Idiomas</p>
                    <p className="text-neon-purple font-bold">Español (Nativo), Inglés (Intermedio)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="text-gray-300">Especialización</p>
                    <p className="text-neon-pink font-bold">Backend Development, API Design</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="text-gray-300">Enfoque</p>
                    <p className="text-neon-blue font-bold">Performance, Scalability, Clean Code</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Valores */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-neon-pink">💎 Mis Valores</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-neon-cyan text-xl">🔧</span>
                  <div>
                    <h4 className="font-bold text-neon-cyan">Calidad de Código</h4>
                    <p className="text-gray-300 text-sm">Código limpio, mantenible y bien documentado</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-neon-purple text-xl">🚀</span>
                  <div>
                    <h4 className="font-bold text-neon-purple">Innovación</h4>
                    <p className="text-gray-300 text-sm">Siempre buscando las mejores soluciones</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-neon-pink text-xl">🤝</span>
                  <div>
                    <h4 className="font-bold text-neon-pink">Colaboración</h4>
                    <p className="text-gray-300 text-sm">Trabajo en equipo y comunicación efectiva</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-neon-blue text-xl">📈</span>
                  <div>
                    <h4 className="font-bold text-neon-blue">Crecimiento</h4>
                    <p className="text-gray-300 text-sm">Aprendizaje continuo y mejora constante</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
