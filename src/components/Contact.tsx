import React from 'react';

const Contact: React.FC = React.memo(() => {
  return (
    <section className="py-20 bg-gray-900" id="contact" role="region" aria-label="Información de contacto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-neon-purple">
            📞 ¡Trabajemos Juntos!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu idea y cómo puedo ayudarte a hacerla realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan">💬 Contáctame</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-pink rounded-full flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a 
                      href="mailto:aranoherrera92@gmail.com?subject=Hola!%20Escribeme%20desde%20tu%20portfolio"
                      className="text-neon-cyan hover:text-neon-purple transition-colors font-semibold"
                      aria-label="Enviar email a Francisco Arano"
                    >
                      aranoherrera92@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Ubicación</p>
                    <p className="text-neon-cyan font-semibold">Veracruz, México</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-purple rounded-full flex items-center justify-center">
                    <span className="text-xl">⏰</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Disponibilidad</p>
                    <p className="text-neon-cyan font-semibold">Abierto a nuevas oportunidades</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-neon-pink">🌐 Sígueme</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/francisco-leonardo-arano-herrera-540198169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors group"
                  aria-label="Ver perfil de LinkedIn de Francisco Arano"
                >
                  <span className="text-2xl">💼</span>
                  <div>
                    <p className="font-semibold text-neon-blue group-hover:text-neon-cyan transition-colors">LinkedIn</p>
                    <p className="text-sm text-gray-400">Perfil profesional</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/FLAranoHerrera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors group"
                  aria-label="Ver repositorios de GitHub de Francisco Arano"
                >
                  <span className="text-2xl">🐙</span>
                  <div>
                    <p className="font-semibold text-neon-purple group-hover:text-neon-cyan transition-colors">GitHub</p>
                    <p className="text-sm text-gray-400">Código fuente</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* CTA y botones de acción */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-neon-purple">🚀 ¿Listo para empezar?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Si tienes un proyecto en mente o quieres colaborar, no dudes en contactarme. 
                Me especializo en desarrollo de APIs robustas, aplicaciones web modernas y 
                soluciones escalables.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:aranoherrera92@gmail.com?subject=Propuesta%20de%20Proyecto&body=Hola%20Francisco,%0A%0AMe%20interesa%20trabajar%20contigo%20en%20un%20proyecto.%20Aquí%20están%20los%20detalles:%0A%0A-%20Tipo%20de%20proyecto:%0A-%20Tecnologías%20requeridas:%0A-%20Timeline%20estimado:%0A-%20Presupuesto:%0A%0A¡Espero%20tu%20respuesta!"
                  className="block w-full bg-gradient-to-r from-neon-purple to-neon-cyan text-gray-900 font-bold py-4 px-6 rounded-xl text-center hover:shadow-neon transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-neon-purple focus:ring-opacity-50"
                  aria-label="Enviar propuesta de proyecto por email"
                >
                  💼 Propuesta de Proyecto
                </a>
                
                <a
                  href="mailto:aranoherrera92@gmail.com?subject=Consulta%20Técnica&body=Hola%20Francisco,%0A%0ATengo%20una%20consulta%20técnica%20sobre:%0A%0A-%20Tecnología:%0A-%20Problema%20específico:%0A-%20Contexto:%0A%0A¡Gracias%20por%20tu%20tiempo!"
                  className="block w-full bg-gray-700 text-neon-cyan font-bold py-4 px-6 rounded-xl text-center hover:bg-gray-600 transition-colors focus:outline-none focus:ring-4 focus:ring-neon-cyan focus:ring-opacity-50"
                  aria-label="Enviar consulta técnica por email"
                >
                  🤔 Consulta Técnica
                </a>
                
                <a
                  href="mailto:aranoherrera92@gmail.com?subject=Hola!%20Conectemos&body=Hola%20Francisco,%0A%0AMe%20gustar%C3%ADa%20conectar%20contigo%20para:%0A%0A-%20Networking%0A-%20Colaboración%0A-%20Mentoría%0A-%20O%20simplemente%20charlar%0A%0A¡Espero%20tu%20respuesta!"
                  className="block w-full bg-gray-700 text-neon-pink font-bold py-4 px-6 rounded-xl text-center hover:bg-gray-600 transition-colors focus:outline-none focus:ring-4 focus:ring-neon-pink focus:ring-opacity-50"
                  aria-label="Conectar para networking"
                >
                  🤝 ¡Conectemos!
                </a>
              </div>
            </div>

            {/* Información adicional */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan">⚡ Respuesta Rápida</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <span className="text-neon-green text-xl">✅</span>
                  <span>Respuesta en menos de 24 horas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-neon-blue text-xl">🆓</span>
                  <span>Consulta inicial gratuita</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-neon-purple text-xl">🌍</span>
                  <span>Disponible para proyectos remotos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-neon-pink text-xl">💬</span>
                  <span>Comunicación en español e inglés</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 mb-4">
            Desarrollado con ❤️ por <span className="text-neon-cyan font-bold">Francisco Arano</span>
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Francisco Leonardo Arano Herrera. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
