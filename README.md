# Portfolio de Francisco Arano

Portfolio estático con React 19, TypeScript, Vite y Tailwind CSS. Presenta mi experiencia de desarrollo Full Stack, proyectos y contacto.

[Ver portfolio](https://flaranoherrera.github.io/mi-portfolio/)

## Desarrollo

Requiere Node.js 22.12 o posterior (la versión de referencia está en `.nvmrc`).

```sh
npm ci
npm run dev
```

Para habilitar Analytics, copiar `.env.example` a `.env.local` y completar `VITE_GA_MEASUREMENT_ID`. Sin un identificador válido no se carga el servicio. Las variables `VITE_` son públicas: no colocar secretos.

## Validación

```sh
npm run check
```

Ejecuta ESLint, TypeScript, tests con cobertura y build. También están disponibles `npm run test`, `npm run test:ui` y `npm run preview`. La cobertura se guarda en `coverage/`; no equivale a una auditoría visual, de accesibilidad o de rendimiento.

## Estructura

- `src/App.tsx`: navegación y composición de secciones estáticas.
- `src/components/`: presentación, proyectos, habilidades, contacto y Analytics opcional.
- `src/hooks/`: comportamiento del menú móvil.
- `src/config/`: datos de proyectos y habilidades.
- `src/types/`: contratos de datos.
- `src/test/`: pruebas de componentes e interacciones.
- `index.html`: única fuente de metadatos SEO, datos estructurados y canonical.
- `public/`: favicon, capturas, sitemap y robots.
- `.github/workflows/`: validación de PRs, despliegue y CodeQL.

## Mantenimiento

El recorrido es presentación, experiencia, proyectos, stack y contacto. Los proyectos secundarios se agrupan en un desplegable. El CV se conserva en `public/cv/`; actualizarlo al cambiar la experiencia profesional.

Actualizar proyectos en `src/config/projects.ts` y habilidades en `src/config/skills.ts`. Las imágenes deben existir en `public/`; sus URLs en React incorporan `import.meta.env.BASE_URL` para GitHub Pages. No publicar métricas de usuarios, rendimiento o disponibilidad sin evidencia.

La presentación profesional se edita en Hero y About. Los metadatos y la imagen social se editan en `index.html`; el sitemap contiene la página principal, no enlaces a secciones. Actualizar su fecha cuando cambie el contenido.

El diseño usa tipografía sans serif para lectura, acentos cian y violeta y estilos en `src/index.css`, con soporte para movimiento reducido. Las secciones se cargan juntas y las capturas usan carga diferida nativa del navegador.

Antes de publicar, revisar pantallas estrechas, navegación por teclado, imágenes, enlaces externos y metadatos. No se afirma un puntaje de Lighthouse sin ejecutar y guardar una auditoría.

Consultar [DEPLOYMENT.md](DEPLOYMENT.md) para la publicación.
