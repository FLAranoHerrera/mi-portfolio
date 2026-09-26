import { ProjectsData } from '@/types';

export const PROJECTS_DATA: ProjectsData = {
  featured: [
    {
      id: 1,
      title: 'Backend Ecommerce — API de compras',
      description: 'API de comercio electrónico con compras transaccionales, control de inventario y autorización por usuario y rol.',
      longDescription: 'Proyecto individual de especialización con NestJS, PostgreSQL y TypeORM. Incluye autenticación JWT, bloqueo de productos durante la compra, migraciones, pruebas de comportamiento y comprobaciones automáticas en GitHub Actions. No incluye una pasarela de pagos.',
      contribution: 'Desarrollo y evolución de la API: autenticación, compras, inventario, documentación y pruebas.',
      technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'JWT', 'Jest', 'Docker', 'GitHub Actions'],
      category: 'Backend',
      link: 'https://ecommerce-flarano-herrera.onrender.com/api',
      github: 'https://github.com/FLAranoHerrera/ecommcerce_m4',
      image: '/images/projects/ecommerce-api.jpg',
      status: 'Completed',
      metrics: '',
      achievements: ['Compras transaccionales', 'Control concurrente de stock', 'Migraciones de base de datos', 'Pruebas y CI'],
      demoNote: 'La API puede tardar en iniciar. El repositorio incluye instrucciones para ejecutarla localmente.'
    },
    {
      id: 2,
      title: 'Lienzo Culinario — Ecommerce colaborativo',
      description: 'Ecommerce de comida desarrollado en equipo durante Henry, con pedidos, pagos con Stripe y gestión de recursos multimedia.',
      longDescription: 'Proyecto colaborativo con frontend en Next.js y backend en NestJS. Mi participación se centró en el backend: pagos con Stripe, autenticación y recursos multimedia con Cloudinary.',
      contribution: 'Colaboración en backend: pagos, autenticación y recursos multimedia. El frontend fue desarrollado por otros integrantes del equipo.',
      technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Stripe', 'Next.js', 'Cloudinary', 'Auth0'],
      category: 'Backend',
      link: 'https://lienzofront.vercel.app',
      github: 'https://github.com/lienzoculinariog2/nuevolienzoback-',
      image: '/images/projects/lienzo-culinario.jpg',
      status: 'Completed',
      metrics: '',
      achievements: ['Trabajo colaborativo', 'Pagos con Stripe', 'Autenticación', 'Recursos multimedia'],
      demoNote: 'Proyecto académico. La disponibilidad de los servicios de la demo puede variar.'
    },
    {
      id: 3,
      title: 'Sushi POS — Punto de venta',
      description: 'Proyecto de punto de venta con productos, órdenes e inventario. Incluye una demo frontend con datos ficticios para explorar el flujo de atención.',
      longDescription: 'Backend con NestJS, TypeORM y PostgreSQL, e interfaz con Next.js y React. La demo permite seleccionar productos, crear y cancelar órdenes y simular un cobro. No procesa pagos reales ni demuestra una operación comercial en producción.',
      contribution: 'Desarrollo de servicios para usuarios, productos, categorías y órdenes; mejoras de integridad y demo frontend del flujo de venta.',
      technologies: ['NestJS', 'TypeScript', 'Next.js', 'PostgreSQL', 'React', 'TypeORM', 'JWT', 'Swagger'],
      category: 'Fullstack',
      link: 'https://sushi-pos-frontend.vercel.app/demo',
      github: 'https://github.com/FLAranoHerrera/sushi-pos-backend',
      frontendGithub: 'https://github.com/FLAranoHerrera/sushi-pos-frontend',
      image: '/images/projects/sushi-pos.jpg',
      status: 'Development',
      metrics: '',
      achievements: ['Órdenes e inventario', 'Demo sin registro', 'Datos ficticios', 'Pruebas de comportamiento'],
      demoNote: 'Simulación en el navegador: sin cuentas, datos de clientes ni cobros reales.'
    }
  ],
  other: [
    {
      id: 4,
      title: 'Sistema de Turnos Médicos',
      description: 'Sistema fullstack para gestión de turnos médicos con autenticación segura, notificaciones por email y gestión de perfil.',
      longDescription: 'Aplicación fullstack desarrollada con Node.js, TypeScript y React. Incluye sistema de autenticación JWT, gestión de turnos con validaciones de horario, notificaciones automáticas por email con Nodemailer, subida de fotos de perfil y validaciones de seguridad robustas.',
      technologies: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'JWT', 'Nodemailer', 'bcrypt', 'Express'],
      category: 'Fullstack',
      link: 'https://github.com/FLAranoHerrera/PM3-FLAranoHerrera',
      github: 'https://github.com/FLAranoHerrera/PM3-FLAranoHerrera',
      image: '/images/projects/medical-system.svg',
      status: 'Completed',
      metrics: '',
      achievements: ['Autenticación JWT segura', 'Notificaciones por email', 'Gestión de perfil', 'Validaciones de horario']
    },
    {
      id: 5,
      title: 'Cinema Explorer',
      description: 'CRUD completo de películas con búsqueda avanzada, filtros múltiples e interfaz moderna responsive.',
      longDescription: 'Aplicación web fullstack para gestión de películas desarrollada con Node.js, Express, MongoDB Atlas. Incluye búsqueda avanzada por título, director, año, género y calificación, interfaz moderna con Bootstrap 5, testing completo con Jest y diseño responsive.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Jest', 'Bootstrap 5', 'JavaScript ES6+', 'Webpack'],
      category: 'Fullstack',
      github: 'https://github.com/FLAranoHerrera/PM2-FLAranoHerrera',
      image: '/images/projects/cinema-explorer.svg',
      status: 'Completed',
      metrics: '',
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
      image: '/images/projects/personal-website.svg',
      status: 'Completed',
      metrics: '',
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
      image: '/images/projects/security-system.svg',
      status: 'Completed',
      metrics: '',
      achievements: ['Arquitectura modular', 'Sistema de seguridad', 'Proyecto educativo', 'Herramientas de build']
    },
    {
      id: 8,
      title: 'Portfolio Profesional',
      description: 'Portfolio personal con React y TypeScript, presentación de experiencia, proyectos y acceso al CV.',
      longDescription: 'Portfolio con React, TypeScript y Vite. Incluye navegación adaptable, imágenes de proyectos, pruebas de navegación y contenido con Vitest y Testing Library y despliegue mediante GitHub Actions.',
      technologies: ['React 19', 'TypeScript', 'Vite 7', 'TailwindCSS', 'Vitest', 'Testing Library', 'GitHub Actions', 'SEO', 'Accessibility'],
      category: 'Frontend',
      github: 'https://github.com/FLAranoHerrera/mi-portfolio',
      image: '/images/projects/portfolio.svg',
      status: 'Production',
      metrics: '',
      achievements: ['Pruebas de navegación', 'GitHub Actions', 'Diseño adaptable', 'CV descargable']
    }
  ]
};
