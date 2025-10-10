const projects = {
  featured: [
    {
      id: 1,
      title: 'Ecommerce API - NestJS',
      description: 'API REST completa para plataforma de ecommerce con autenticación JWT, pagos con Stripe, inventario y notificaciones automáticas.',
      longDescription: 'Backend robusto desarrollado con NestJS que incluye módulos de autenticación, productos, carrito de compras, pagos con Stripe, sistema de notificaciones, documentación Swagger completa y deploy en Render con base de datos Neon.',
      technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'JWT', 'Stripe', 'Swagger', 'Cloudinary', 'Docker'],
      category: 'Backend',
      link: 'https://ecommerce-flarano-herrera.onrender.com/api',
      github: 'https://github.com/FLAranoHerrera/ecommcerce_m4',
      image: 'https://via.placeholder.com/400x250/1f2937/22d3ee?text=Ecommerce+API',
      status: 'Production',
      metrics: '56 Commits • 99.9% Uptime • 2.5s Response Time',
      achievements: ['Autenticación JWT completa', 'Integración con Stripe', 'Documentación Swagger', 'Deploy en Render']
    },
    {
      id: 2,
      title: 'Lienzo Culinario - Fullstack',
      description: 'Plataforma de delivery de comida con panel administrativo, gestión de pedidos, sistema de pagos y reseñas.',
      longDescription: 'Aplicación fullstack colaborativa desarrollada durante el bootcamp de Henry. Incluye frontend en React, backend en NestJS, base de datos PostgreSQL, integración con Stripe para pagos, sistema de reseñas y gestión completa de órdenes.',
      technologies: ['NestJS', 'TypeScript', 'React', 'PostgreSQL', 'JWT', 'Stripe', 'Cloudinary', 'Auth0'],
      category: 'Fullstack',
      link: 'https://lienzofront.vercel.app',
      github: 'https://github.com/lienzoculinariog2/nuevolienzoback-',
      image: 'https://via.placeholder.com/400x250/1f2937/f472b6?text=Lienzo+Culinario',
      status: 'Production',
      metrics: '132 Commits • 5 Contributors • 500+ Users',
      achievements: ['Proyecto colaborativo', 'Integración con Stripe', 'Sistema de reseñas', 'Gestión de ingredientes']
    },
    {
      id: 3,
      title: 'Sistema de Turnos Médicos',
      description: 'Sistema fullstack para gestión de turnos médicos con autenticación segura, notificaciones por email y gestión de perfil.',
      longDescription: 'Aplicación fullstack desarrollada con Node.js, TypeScript y React. Incluye sistema de autenticación JWT, gestión de turnos con validaciones de horario, notificaciones automáticas por email con Nodemailer, subida de fotos de perfil y validaciones de seguridad robustas.',
      technologies: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'JWT', 'Nodemailer', 'bcrypt', 'Express'],
      category: 'Fullstack',
      link: 'https://github.com/FLAranoHerrera/PM3-FLAranoHerrera',
      github: 'https://github.com/FLAranoHerrera/PM3-FLAranoHerrera',
      image: 'https://via.placeholder.com/400x250/1f2937/10b981?text=Medical+System',
      status: 'Completed',
      metrics: '26 Commits • 49.5% TypeScript • Security Focused',
      achievements: ['Autenticación JWT segura', 'Notificaciones por email', 'Gestión de perfil', 'Validaciones de horario']
    },
    {
      id: 4,
      title: 'Sushi POS Backend',
      description: 'Sistema de punto de venta para restaurante japonés con gestión de productos, categorías, órdenes y roles.',
      longDescription: 'Backend API desarrollado con NestJS para sistema POS de restaurante japonés. Incluye gestión completa de productos con subcategorías y extras, sistema de roles y permisos, integración con Cloudinary para imágenes, documentación automática con Swagger y arquitectura modular escalable.',
      technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'JWT', 'Cloudinary', 'Swagger', 'TypeORM', 'class-validator'],
      category: 'Backend',
      link: 'https://github.com/FLAranoHerrera/sushi-pos-backend',
      github: 'https://github.com/FLAranoHerrera/sushi-pos-backend',
      image: 'https://via.placeholder.com/400x250/1f2937/ef4444?text=Sushi+POS',
      status: 'Development',
      metrics: '16 Commits • 99.1% TypeScript • Modular Architecture',
      achievements: ['Arquitectura modular', 'Sistema de roles', 'Gestión de imágenes', 'Documentación Swagger']
    }
  ],
  other: [
    {
      id: 5,
      title: 'Cinema Explorer',
      description: 'CRUD completo de películas con búsqueda avanzada, filtros múltiples e interfaz moderna responsive.',
      longDescription: 'Aplicación web fullstack para gestión de películas desarrollada con Node.js, Express, MongoDB Atlas. Incluye búsqueda avanzada por título, director, año, género y calificación, interfaz moderna con Bootstrap 5, testing completo con Jest y diseño responsive.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Jest', 'Bootstrap 5', 'JavaScript ES6+', 'Webpack'],
      category: 'Fullstack',
      github: 'https://github.com/FLAranoHerrera/PM2-FLAranoHerrera',
      status: 'Completed',
      metrics: '17 Commits • 56.7% JavaScript • Testing Complete',
      achievements: ['CRUD completo', 'Búsqueda avanzada', 'Testing con Jest', 'MongoDB Atlas']
    },
    {
      id: 6,
      title: 'Página Web de Presentación',
      description: 'Página web personal con sistema CRUD de actividades, barras de progreso animadas y persistencia con localStorage.',
      longDescription: 'Proyecto del Módulo 1 de Henry Bootcamp. Incluye presentación personal, sección de tecnologías con barras de progreso animadas, sistema CRUD completo para gestión de actividades, persistencia automática con localStorage, diseño responsive y animaciones fluidas.',
      technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'LocalStorage', 'Jasmine', 'Git'],
      category: 'Frontend',
      github: 'https://github.com/FLAranoHerrera/PM1-FLAranoHerrera',
      status: 'Completed',
      metrics: '13 Commits • 42.4% CSS • 40.3% JavaScript',
      achievements: ['CRUD completo', 'Barras de progreso animadas', 'Persistencia localStorage', 'Diseño responsive']
    },
    {
      id: 7,
      title: 'Sistema de Seguridad',
      description: 'Sistema de seguridad modular con diferentes componentes, desarrollado como proyecto educativo del bootcamp Henry.',
      longDescription: 'Proyecto del Módulo 0 de Henry Bootcamp. Sistema de seguridad con múltiples módulos, arquitectura modular bien organizada, herramientas de build integradas y enfoque educativo en JavaScript, HTML y CSS.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Build Tools', 'Git'],
      category: 'Frontend',
      github: 'https://github.com/FLAranoHerrera/PM0-FLAranoHerrera',
      status: 'Completed',
      metrics: '42.6% JavaScript • 31.3% HTML • 26.1% CSS',
      achievements: ['Arquitectura modular', 'Sistema de seguridad', 'Proyecto educativo', 'Herramientas de build']
    },
    {
      id: 8,
      title: 'Portfolio Profesional',
      description: 'Portfolio personal con diseño gaming, optimizado para SEO y accesibilidad completa.',
      technologies: ['React', 'Vite', 'TailwindCSS', 'JavaScript', 'SEO', 'Accessibility'],
      category: 'Frontend',
      github: 'https://github.com/FLAranoHerrera/mi-portfolio',
      status: 'Production',
      metrics: '100% Lighthouse Score • Mobile First'
    }
  ]
};

function Projects() {
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
                <img 
                  src={project.image} 
                  alt={`Captura de pantalla del proyecto ${project.title}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
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
}

export default Projects;
