# Despliegue

El sitio se publica en GitHub Pages en `/mi-portfolio/`, mediante `.github/workflows/deploy.yml`.

Un push a `main` instala con `npm ci`, ejecuta `npm run check`, sube `dist/` y publica únicamente si las comprobaciones pasan. Los PRs ejecutan el mismo control en `ci.yml` sin publicar. CodeQL mantiene un análisis independiente.

## Configuración

- GitHub Pages debe usar GitHub Actions como fuente.
- Node.js 22 y npm; se conserva el lockfile para instalaciones reproducibles.
- `base` en `vite.config.js` corresponde a `/mi-portfolio/`.
- Para Analytics en producción, definir la variable de repositorio `VITE_GA_MEASUREMENT_ID`. El workflow la pasa al build. Es un identificador público, no un secreto.
- Sin esa variable, Analytics queda desactivado. No se incluye un identificador ficticio en el HTML.

## Verificación

```sh
npm ci
npm run check
npm run preview
```

Abrir `http://localhost:4173/mi-portfolio/`. Después de publicar, comprobar la ejecución de Pages, la navegación móvil, imágenes y enlaces. Los previews sociales pueden quedar en caché en servicios externos.

Los headers del servidor local de Vite solo se aplican al entorno local. Este proyecto no declara que aplique CSP, rate limiting ni headers personalizados en GitHub Pages. No utiliza backend ni procesa formularios: el contacto abre el cliente de correo.

Si falla una instalación, conservar `package-lock.json` y revisar el error; no borrarlo como solución rutinaria.
