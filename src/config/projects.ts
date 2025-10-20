import { ProjectsData } from '@/types';

export const PROJECTS_DATA: ProjectsData = {
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
      image: '/images/projects/ecommerce-api.svg',
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
      image: '/images/projects/lienzo-culinario.svg',
      status: 'Production',
      metrics: '132 Commits • 5 Contributors • 500+ Users',
      achievements: ['Proyecto colaborativo', 'Integración con Stripe', 'Sistema de reseñas', 'Gestión de ingredientes']
    },
    {
      id: 3,
      title: 'Sushi POS - Daruma Ramen House',
      description: 'Sistema completo de punto de venta para restaurante japonés con gestión de productos, órdenes, pagos, asistencia de empleados y control de inventario.',
      longDescription: 'Aplicación fullstack desarrollada con NestJS para el restaurante Daruma Ramen House. Incluye módulos de productos con subcategorías y extras, sistema de órdenes y pagos con Stripe, gestión de asistencia de empleados con check-in/check-out automático, integración con Cloudinary para imágenes, documentación Swagger completa, containerización con Docker y despliegue en Render con base de datos Neon PostgreSQL.',
      technologies: ['NestJS', 'TypeScript', 'React', 'PostgreSQL', 'JWT', 'Stripe', 'Cloudinary', 'Swagger', 'Docker', 'bcrypt'],
      category: 'Fullstack',
      link: 'https://sushi-pos-frontend.vercel.app',
      github: 'https://github.com/FLAranoHerrera/sushi-pos-backend',
      image: '/images/projects/sushi-pos.svg',
      status: 'Production',
      metrics: '50+ Commits • 98.9% TypeScript • Deployed on Render',
      achievements: ['Sistema de asistencia automático', 'Integración con Stripe', 'Arquitectura modular', 'Despliegue en producción', 'Docker containerizado']
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
      metrics: '26 Commits • 49.5% TypeScript • Security Focused',
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
      image: '/images/projects/personal-website.svg',
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
      image: '/images/projects/security-system.svg',
      status: 'Completed',
      metrics: '42.6% JavaScript • 31.3% HTML • 26.1% CSS',
      achievements: ['Arquitectura modular', 'Sistema de seguridad', 'Proyecto educativo', 'Herramientas de build']
    },
    {
      id: 8,
      title: 'Portfolio Profesional Avanzado',
      description: 'Portfolio personal con diseño gaming, optimizado para SEO, accesibilidad completa, testing automatizado y CI/CD.',
      longDescription: 'Portfolio profesional desarrollado con React 19, TypeScript y Vite. Incluye lazy loading de componentes, optimizaciones de rendimiento con React.memo, testing completo con Vitest y Testing Library, SEO avanzado con React Helmet, headers de seguridad, CI/CD con GitHub Actions, imágenes SVG personalizadas y diseño responsive con TailwindCSS.',
      technologies: ['React 19', 'TypeScript', 'Vite 7', 'TailwindCSS', 'Vitest', 'Testing Library', 'React Helmet', 'GitHub Actions', 'SEO', 'Accessibility'],
      category: 'Frontend',
      github: 'https://github.com/FLAranoHerrera/mi-portfolio',
      image: '/images/projects/portfolio.svg',
      status: 'Production',
      metrics: '48 Tests • 100% TypeScript • CI/CD Pipeline • Security Headers',
      achievements: ['Testing automatizado completo', 'CI/CD con GitHub Actions', 'SEO optimizado', 'Headers de seguridad', 'Lazy loading implementado']
    }
  ]
};
