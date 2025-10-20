# 🚀 Guía de Despliegue - Portfolio Profesional

## 📋 Configuración Inicial

### 1. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# Google Analytics Configuration
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Reemplaza G-XXXXXXXXXX con tu Measurement ID real de Google Analytics
# Puedes obtenerlo en: https://analytics.google.com/
```

### 2. Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una nueva propiedad o usa una existente
3. Copia tu Measurement ID (formato: G-XXXXXXXXXX)
4. Reemplaza `G-XXXXXXXXXX` en tu archivo `.env.local`

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción
npm run build

# Preview local
npm run preview

# Testing
npm run test
npm run test:run
npm run test:coverage

# Linting
npm run lint
```

## 🌐 Despliegue

### GitHub Pages (Automático)

El proyecto está configurado para desplegarse automáticamente en GitHub Pages:

1. **Push a main**: El despliegue se ejecuta automáticamente
2. **URL**: `https://tu-usuario.github.io/mi-portfolio/`
3. **Configuración**: Ver `.github/workflows/ci.yml`

### Despliegue Manual

```bash
# 1. Construir el proyecto
npm run build

# 2. Los archivos se generan en la carpeta dist/
# 3. Sube el contenido de dist/ a tu servidor web
```

## 📊 Monitoreo de Performance

### Lighthouse CI

El proyecto incluye auditorías automáticas de Lighthouse:

- **Performance**: Mínimo 80%
- **Accessibility**: Mínimo 90%
- **Best Practices**: Mínimo 80%
- **SEO**: Mínimo 80%

### Ejecutar Lighthouse Localmente

```bash
# Instalar Lighthouse CI
npm install -g @lhci/cli

# Ejecutar auditoría
lhci autorun
```

## 🔒 Seguridad

### Headers de Seguridad

El proyecto incluye headers de seguridad configurados:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### Content Security Policy (CSP)

Configurado en `public/_headers` para Netlify y en `vite.config.js` para desarrollo.

## 🧪 Testing

### Tests Unitarios

```bash
# Ejecutar todos los tests
npm run test

# Tests con UI
npm run test:ui

# Tests con coverage
npm run test:coverage
```

### Cobertura de Tests

- **Objetivo**: >80% de cobertura
- **Configuración**: `vitest.config.ts`
- **Reportes**: Generados en `coverage/`

## 📱 Responsive Design

El portfolio está optimizado para:

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## ♿ Accesibilidad

### Características Implementadas

- ✅ Navegación por teclado
- ✅ ARIA labels y roles
- ✅ Contraste de colores optimizado
- ✅ Texto alternativo en imágenes
- ✅ Estructura semántica HTML

### Testing de Accesibilidad

```bash
# Usar herramientas como axe-core o Lighthouse
# para verificar la accesibilidad
```

## 🔄 CI/CD Pipeline

### GitHub Actions

El pipeline incluye:

1. **Test Suite**: Linting, testing, type checking
2. **Build**: Construcción de la aplicación
3. **Lighthouse**: Auditoría de performance (en PRs)
4. **Deploy**: Despliegue automático a GitHub Pages

### Configuración

- **Archivo**: `.github/workflows/ci.yml`
- **Triggers**: Push a main, Pull Requests
- **Permisos**: Pages write, Contents read

## 🐛 Troubleshooting

### Problemas Comunes

#### Error de Google Analytics

```bash
# Verificar que la variable de entorno esté configurada
echo $VITE_GOOGLE_ANALYTICS_ID
```

#### Error de Build

```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Error de Tests

```bash
# Ejecutar tests con más detalle
npm run test:run -- --reporter=verbose
```

## 📞 Soporte

Para problemas o preguntas:

- **GitHub Issues**: [Crear un issue](https://github.com/FLAranoHerrera/mi-portfolio/issues)
- **Email**: aranoherrera92@gmail.com
- **LinkedIn**: [Francisco Arano](https://www.linkedin.com/in/francisco-leonardo-arano-herrera-540198169)

---

**Desarrollado con ❤️ por Francisco Leonardo Arano Herrera**
