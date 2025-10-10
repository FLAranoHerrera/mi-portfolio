function Hero() {
  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      role="banner"
      aria-label="Presentación principal"
    >
      {/* Efecto de partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neon-purple rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse opacity-50"></div>
      </div>
      
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-neon-purple tracking-wide animate-fade-in">
          <span className="block">¡Hola! Soy</span>
          <span className="block text-neon-cyan font-mono">Francisco Arano</span>
        </h1>
        
        <div className="mb-8">
          <img
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=3000&pause=500&color=22d3ee&center=true&vCenter=true&width=600&lines=Fullstack+Developer;Backend+Specialist+%7C+NestJS;Frontend+Expert+%7C+React+%26+TypeScript;Building+Scalable+APIs;Creating+Modern+Web+Apps"
            alt="Francisco Arano - Desarrollador Fullstack especializado en NestJS, React y TypeScript"
            className="mx-auto"
          />
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4 text-lg sm:text-xl">
          <p className="text-neon-cyan font-semibold animate-slide-up">
            🚀 Desarrollador Fullstack especializado en arquitecturas escalables
          </p>
          <p className="text-gray-300 animate-slide-up delay-200">
            Construyendo aplicaciones web modernas con <span className="text-neon-blue font-bold">NestJS</span>, 
            <span className="text-neon-purple font-bold"> React</span> y 
            <span className="text-neon-pink font-bold"> TypeScript</span>
          </p>
          <p className="text-neon-pink font-bold animate-slide-up delay-400">
            💻 Código limpio • 🎮 Gaming enthusiast • 🏋️ Fitness lover
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="mt-12 animate-fade-in delay-600">
          <a 
            href="#projects" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-cyan text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-neon transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-neon-purple focus:ring-opacity-50"
            aria-label="Ver mis proyectos destacados"
          >
            🎯 Ver Mis Proyectos
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}


export default Hero;
