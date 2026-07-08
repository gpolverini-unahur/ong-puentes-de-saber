# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

### Agregado

### Cambiado

### Obsoleto

### Eliminado

### Corregido

### Seguridad

## [1.0.0] - 2026-07-08

### Agregado
- Arquitectura CSS modular profesional:
  - `css/variables.css` para variables CSS centralizadas
  - `css/base.css` para estilos base y reset
  - `css/components.css` para navbar, hero, cards, botones, formularios y búsqueda
  - `css/layout.css` para secciones, footer y estructura general
  - `css/utilities.css` para modo oscuro, responsive y animaciones
  - `css/styles.css` como archivo principal que importa todos los módulos
- Toggle switch moderno para modo oscuro:
  - Diseño tipo iOS/Material con animación deslizante
  - Iconos dinámicos (🌙 luna / ☀️ sol) que cambian según el estado
  - Efecto glassmorphism semi-transparente
  - Tooltip "Cambiar tema" con Bootstrap
  - Persistencia con localStorage
  - Aplicación automática al cargar la página
  - Manejo de errores con try/catch
  - Protección de scope con IIFE
  - Evento personalizado `modoChanged` para extensibilidad
- Barra de búsqueda funcional en `index.html`:
  - Base de datos indexada de contenido del sitio
  - Resultados en tiempo real mientras se escribe
  - Función `escapeHtml()` para prevenir XSS
  - Limitación de resultados a 8 máximo
  - Cierre automático al hacer clic fuera
- Sistema de validación de formularios en `contacto.html`:
  - Validación en tiempo real (eventos blur + input)
  - Validación completa antes de enviar
  - Feedback visual con clases Bootstrap (is-valid/is-invalid)
  - Mensajes de error específicos por campo
  - Alerta de éxito con auto-cierre después de 5 segundos
  - Validación de email con regex
  - Campo teléfono opcional con validación
- Encabezados de página consistentes:
  - Sección de encabezado simple en `nosotros.html`, `programas.html` y `contacto.html`
  - Diseño uniforme con título y subtítulo
  - Fondo gris claro para diferenciación visual
- Estructura HTML semántica correcta:
  - Tag `<header>` envolviendo el `<nav>` en todas las páginas
  - Uso apropiado de `<main>` para contenido principal
  - Landmarks ARIA implícitos para mejor accesibilidad

### Cambiado
- Renombrado `js/modo-oscuro.js` a `js/dark-mode.js` (convención inglés + kebab-case)
- Renombrado `js/validator.js` a `js/form-validation.js` (nombre más descriptivo)
- Organización de CSS de archivo único a arquitectura modular (6 archivos)
- Hero Section eliminado de `nosotros.html` y mantenido solo en `index.html`
- Páginas internas (`nosotros.html`, `programas.html`, `contacto.html`) ahora tienen encabezados simples consistentes
- Control de modo oscuro de botón a toggle switch moderno con iconos y tooltip
- Indentación de todos los archivos HTML a 4 espacios consistentes

### Corregido
- Modo oscuro ahora aplica correctamente la clase `dark-mode` al cargar la página
- Validación de existencia del toggle de modo oscuro para prevenir errores en consola
- Comportamiento responsive del toggle de modo oscuro (ahora dentro del navbar-collapse)
- Indentación inconsistente en todos los archivos HTML:
  - `index.html` - navbar y estructura main
  - `nosotros.html` - archivo completo re-indentado
  - `programas.html` - cards y footer
  - `contacto.html` - formulario y secciones
- Estructura HTML: navbar ahora correctamente dentro de `<header>` en todas las páginas

### Seguridad
- Implementada función `escapeHtml()` en `search.js` para prevenir ataques XSS
- Sanitización de entradas en validación de formularios
- Protección de scope global en JavaScript con IIFE

## [0.1.0] - 2026-04-21

### Agregado
- Estructura inicial del proyecto
- Documentación completa del proyecto:
  - README.md con información de la ONG Puentes de Saber
  - CONTRIBUTING.md con guía de contribución
  - CODE_OF_CONDUCT.md con código de conducta
  - LICENSE (MIT)
  - CHANGELOG.md
- Estructura de directorios del sitio web:
  - `ong-website/` directorio principal
  - `ong-website/css/` para estilos
  - `ong-website/js/` para scripts
  - `ong-website/img/` para imágenes
- Implementación completa de páginas HTML:
  - `index.html` - Página de inicio con misión, visión y programas
  - `nosotros.html` - Historia, valores, equipo y datos institucionales
  - `programas.html` - Tres programas educativos detallados
  - `contacto.html` - Información de contacto y formas de participación
- Logo de UNAHUR (`img/UNAHUR.png`)
- Logo de Puentes de Saber (`img/logo.png`)
- Archivos base para CSS (`styles.css`) y JavaScript (`main.js`)
- Favicon en todas las páginas HTML
- Meta descriptions optimizadas para SEO en todas las páginas
- Atributos `aria-label` en navegación para accesibilidad

### Cambiado

### Corregido

### Seguridad

[Unreleased]: https://github.com/gpolverini-unahur/ong-puentes-de-saber/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/gpolverini-unahur/ong-puentes-de-saber/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/gpolverini-unahur/ong-puentes-de-saber/releases/tag/v0.1.0
