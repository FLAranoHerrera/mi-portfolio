# 🚀 Portfolio Profesional - Francisco Arano

Portfolio personal desarrollado con React 19, TypeScript y Vite 7, optimizado para SEO, accesibilidad y performance. Incluye CI/CD completo, testing automatizado y despliegue automático.

## ✨ Características Principales

- 🎨 **Diseño Gaming**: Estética cyberpunk con colores neón y animaciones
- 📱 **Responsive Design**: Optimizado para móvil, tablet y desktop
- ⚡ **Performance**: Lazy loading, React.memo y code splitting
- 🔍 **SEO Avanzado**: Meta tags, Open Graph, Twitter Cards, Schema.org
- ♿ **Accesibilidad**: Navegación por teclado, ARIA labels y contraste
- 🧪 **Testing Completo**: 48 tests unitarios con Vitest y Testing Library
- 🔒 **Seguridad**: Headers de seguridad, CSP y validación de enlaces
- 🚀 **CI/CD**: Pipeline automatizado con GitHub Actions y Lighthouse CI
- 📊 **Analytics**: Google Analytics 4 integrado
- 🐳 **Docker**: Containerización para desarrollo y producción

## 🛠️ Stack Tecnológico

### Frontend
- **React 19** - Biblioteca de UI con hooks y Suspense
- **TypeScript** - Tipado estático para mayor robustez
- **Vite 7** - Build tool ultra rápido
- **TailwindCSS 3** - Framework CSS utility-first
- **React Helmet Async** - Gestión de meta tags dinámicos

### Testing & Quality
- **Vitest** - Test runner moderno y rápido
- **React Testing Library** - Testing de componentes
- **Jest DOM** - Matchers para DOM testing
- **ESLint** - Linting de código
- **Prettier** - Formateo de código

### Performance & SEO
- **Lazy Loading** - Carga diferida de componentes
- **Code Splitting** - División automática de bundles
- **React.memo** - Optimización de re-renders
- **Schema.org** - Datos estructurados para SEO
- **Sitemap.xml** - Mapa del sitio para crawlers

### CI/CD & DevOps
- **GitHub Actions** - Pipeline de CI/CD
- **Lighthouse CI** - Auditorías de performance
- **Dependabot** - Actualizaciones automáticas
- **CodeQL** - Análisis de seguridad
- **GitHub Pages** - Despliegue automático

## 📁 Estructura del Proyecto

```
mi-portfolio/
├── src/
│   ├── components/          # Componentes React tipados
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   ├── SEOHead.tsx
│   │   └── GoogleAnalytics.tsx
│   ├── hooks/              # Custom hooks
│   │   ├── useMobileMenu.ts
│   │   └── useImageLazyLoading.ts
│   ├── config/             # Configuración centralizada
│   │   ├── constants.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── seo.ts
│   ├── types/              # Definiciones TypeScript
│   │   └── index.ts
│   ├── test/               # Tests unitarios
│   │   ├── setup.ts
│   │   └── *.test.tsx
│   └── utils/              # Utilidades
├── public/
│   ├── images/projects/    # Imágenes SVG de proyectos
│   ├── robots.txt
│   └── sitemap.xml
├── .github/workflows/      # GitHub Actions
│   ├── ci.yml
│   ├── codeql.yml
│   └── dependabot.yml
└── docs/                   # Documentación
    └── DEPLOYMENT.md
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 20+
- npm 9+

### Configuración Inicial

```bash
# Clonar el repositorio
git clone https://github.com/FLAranoHerrera/mi-portfolio.git
cd mi-portfolio

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores
```

### Scripts de Desarrollo

```bash
# Servidor de desarrollo
npm run dev

# Construcción para producción
npm run build

# Preview de producción local
npm run preview

# Tests en modo watch
npm run test

# Tests una sola vez
npm run test:run

# Tests con cobertura
npm run test:coverage

# Tests con UI interactiva
npm run test:ui

# Linting del código
npm run lint
```

## 🌐 Demo en Vivo

**[Ver Portfolio en Vivo](https://flaranoherrera.github.io/mi-portfolio/)**

## 📱 Secciones del Portfolio

### 🎯 Hero Section
- Animación de escritura con efecto neón
- Presentación personal con efectos visuales
- Navegación suave entre secciones

### 👨‍💻 Sobre Mí
- Información personal y profesional
- Valores y filosofía de trabajo
- Hobbies e intereses personales

### 🚀 Proyectos Destacados
- **Ecommerce API**: Backend NestJS con Stripe y PostgreSQL
- **Lienzo Culinario**: Plataforma fullstack colaborativa
- **Sushi POS**: Sistema de punto de venta para restaurante japonés

### ⚡ Skills & Tecnologías
- **Backend**: NestJS, Node.js, PostgreSQL, MongoDB
- **Frontend**: React, TypeScript, TailwindCSS, Vite
- **DevOps**: Docker, GitHub Actions, Render, Vercel
- **Testing**: Vitest, Jest, React Testing Library

### 📞 Contacto
- Información de contacto
- Enlaces a redes sociales
- Formulario de contacto (futuro)

## 🔧 Configuración Avanzada

### Variables de Entorno

```bash
# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Configuración del sitio
VITE_SITE_URL=https://flaranoherrera.github.io/mi-portfolio/
VITE_SITE_NAME=Francisco Arano - Portfolio
VITE_SITE_DESCRIPTION=Desarrollador Fullstack especializado en NestJS, React y TypeScript

# Información de contacto
VITE_CONTACT_EMAIL=aranoherrera92@gmail.com
VITE_LINKEDIN_URL=https://www.linkedin.com/in/francisco-leonardo-arano-herrera-540198169
VITE_GITHUB_URL=https://github.com/FLAranoHerrera
```

### Google Analytics Setup

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una nueva propiedad
3. Copia tu Measurement ID (formato: G-XXXXXXXXXX)
4. Actualiza `VITE_GA_MEASUREMENT_ID` en tu `.env.local`

## 🧪 Testing

El proyecto incluye **48 tests unitarios** que cubren:

- ✅ Renderizado de componentes
- ✅ Interacciones de usuario
- ✅ Navegación y accesibilidad
- ✅ Datos y props
- ✅ Estados y efectos

```bash
# Ejecutar todos los tests
npm run test

# Tests con UI interactiva
npm run test:ui

# Tests con cobertura de código
npm run test:coverage
```

## 🚀 Despliegue

### GitHub Pages (Automático)

El proyecto se despliega automáticamente:

1. **Push a main** → GitHub Actions ejecuta el pipeline
2. **Tests automáticos** → Linting, testing, type checking
3. **Build de producción** → Construcción optimizada
4. **Lighthouse CI** → Auditorías de performance (en PRs)
5. **Deploy automático** → GitHub Pages

### Pipeline CI/CD

```yaml
# .github/workflows/ci.yml
- Test Suite: Linting, testing, type checking
- Build: Construcción de la aplicación
- Lighthouse: Auditorías de performance
- Deploy: Despliegue automático a GitHub Pages
```

### Despliegue Manual

```bash
# Construir para producción
npm run build

# Los archivos se generan en dist/
# Subir el contenido a tu servidor web
```

## 📊 Métricas de Performance

- **Lighthouse Score**: 100% en todas las categorías
- **Bundle Size**: Optimizado con code splitting
- **Loading Time**: < 2s en conexiones 3G
- **Core Web Vitals**: Optimizados
- **Accessibility**: 100% accesible
- **SEO**: 100% optimizado

## 🔒 Seguridad

### Headers de Seguridad
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### Content Security Policy (CSP)
Configurado para prevenir XSS y otros ataques

### Validación de Enlaces
- `rel="noopener noreferrer"` en enlaces externos
- Validación de URLs
- Sanitización de contenido

## 🤝 Contribuciones

1. **Fork** el proyecto
2. **Crea una rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

### Guías de Contribución

- Sigue las convenciones de código existentes
- Añade tests para nuevas funcionalidades
- Actualiza la documentación si es necesario
- Asegúrate de que todos los tests pasen

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Francisco Leonardo Arano Herrera**

- 📧 **Email**: aranoherrera92@gmail.com
- 💼 **LinkedIn**: [Francisco Arano](https://www.linkedin.com/in/francisco-leonardo-arano-herrera-540198169)
- 🐙 **GitHub**: [FLAranoHerrera](https://github.com/FLAranoHerrera)
- 🌐 **Portfolio**: [flaranoherrera.github.io/mi-portfolio](https://flaranoherrera.github.io/mi-portfolio/)
- 📍 **Ubicación**: Veracruz, México

## 🏆 Logros del Proyecto

- ✅ **100% TypeScript** - Código completamente tipado
- ✅ **48 Tests** - Cobertura completa de testing
- ✅ **100% Lighthouse** - Performance, SEO, Accessibility
- ✅ **CI/CD Pipeline** - Despliegue automático
- ✅ **Security Headers** - Protección completa
- ✅ **Responsive Design** - Optimizado para todos los dispositivos
- ✅ **SEO Optimizado** - Meta tags, Schema.org, Sitemap
- ✅ **Google Analytics** - Tracking completo

---

**Desarrollado con ❤️ por Francisco Leonardo Arano Herrera**

⭐ **Si te gusta este proyecto, ¡dale una estrella!**