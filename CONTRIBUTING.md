# Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto! Este documento proporciona pautas para contribuir al sitio web.

## Código de Conducta

Este proyecto se adhiere a un Código de Conducta. Al participar, se espera que respetes este código. Por favor lee [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) para más detalles.

## ¿Cómo puedo contribuir?

### Reportar Bugs

Si encuentras un bug, por favor crea un issue incluyendo:

- Una descripción clara del problema
- Pasos para reproducir el comportamiento
- Comportamiento esperado vs. comportamiento actual
- Capturas de pantalla si son relevantes
- Navegador y versión donde ocurre el problema

### Sugerir Mejoras

Las sugerencias de mejoras son bienvenidas. Por favor crea un issue describiendo:

- La mejora propuesta
- Por qué sería útil para los visitantes del sitio
- Ejemplos de uso si es aplicable

### Pull Requests

1. **Fork el repositorio** y crea tu rama desde `main`
2. **Escribe código HTML/CSS válido** siguiendo las convenciones del proyecto
3. **Valida tu código** con el validador W3C antes de enviar el PR (0 errores)
4. **Prueba la navegación** entre todas las páginas
5. **Verifica los enlaces**: Asegúrate de que todos funcionen (internos, mailto:, tel:, externos)
6. **Actualiza la documentación** si es necesario
7. **Escribe mensajes de commit claros** y descriptivos

#### Proceso de Pull Request

1. **Validación W3C**: Tu código HTML debe pasar con 0 errores
2. **Prueba de enlaces**: Verifica que todos los enlaces funcionen (navegación, mailto:, tel:, externos)
3. **Prueba de navegación**: Asegúrate de poder navegar entre todas las páginas
4. **Actualiza README.md**: Si cambias información de la organización
5. **Actualiza CHANGELOG.md**: Documenta tus cambios en la sección [Unreleased]
6. **Revisión**: El PR será revisado por los mantenedores del proyecto

### Convenciones de Código

#### HTML
- **Usa HTML5 semántico**: `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`
- **Declara el idioma**: `<html lang="es">`
- **Usa codificación UTF-8**: `<meta charset="UTF-8">`
- **Incluye viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- **Respeta la jerarquía de headings**: Un solo `<h1>` por página, seguido de `<h2>`, `<h3>`, etc. sin saltar niveles
- **Imágenes accesibles**: Todas deben tener atributo `alt` descriptivo
- **Rutas relativas**: Usa `./` para enlaces internos (ej: `./index.html`)
- **Enlaces externos seguros**: Incluye `target="_blank"` y `rel="noopener noreferrer"`
- **Enlaces descriptivos**: Evita textos genéricos como "clic aquí"

#### Estructura de Archivos
- Todas las páginas HTML en el directorio `ong-website/`
- Imágenes en `ong-website/img/`
- Nombres de archivo en minúsculas con guiones (ej: `programas.html`)

### Estructura del Proyecto

```
ong-website/
├── css/                # Estilos CSS
│   └── styles.css
├── img/                # Imágenes del sitio
│   └── UNAHUR.png
├── js/                 # Scripts JavaScript
│   └── main.js
├── index.html          # Página de inicio
├── nosotros.html       # Historia y equipo
├── programas.html      # Programas e iniciativas
└── contacto.html       # Información de contacto
```

### Validación W3C

Todos los cambios HTML deben pasar la validación W3C sin errores:

1. Visita https://validator.w3.org/
2. Sube tu archivo HTML o pega el código
3. Corrige todos los errores antes de enviar el PR
4. Las advertencias (warnings) son aceptables si están justificadas

### Mensajes de Commit

- Usa el tiempo presente ("Agrega sección" no "Agregada sección")
- Usa el modo imperativo ("Actualiza contacto" no "Actualizando contacto")
- Limita la primera línea a 72 caracteres o menos
- Referencia issues y pull requests cuando sea relevante

Ejemplo:
```
Agrega sección de testimonios en index.html

- Implementa estructura semántica con article
- Incluye 3 testimonios de beneficiarios
- Valida con W3C (0 errores)
- Fixes #123
```

### Actualización de Contenido de la ONG

Si necesitas actualizar información sobre la organización (misión, programas, contacto, etc.):

1. **Edita el archivo README.md** - este es la fuente de información sobre la organización
2. **Actualiza las páginas HTML correspondientes** - refleja los cambios del README.md en las páginas web
3. No dupliques información innecesariamente entre archivos

### Documentar Cambios en CHANGELOG.md

Todos los cambios notables deben documentarse en CHANGELOG.md siguiendo el formato [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/):

**Tipos de cambios:**
- **Agregado** - Funcionalidades nuevas
- **Cambiado** - Cambios en funcionalidades existentes
- **Obsoleto** - Funcionalidades que serán eliminadas
- **Eliminado** - Funcionalidades eliminadas
- **Corregido** - Corrección de bugs
- **Seguridad** - Vulnerabilidades

**Formato:**
```markdown
## [Unreleased]

### Agregado
- Nueva sección de testimonios en index.html

### Corregido
- Error en enlace de contacto en el footer
```

Cuando se haga un release, la sección [Unreleased] se convierte en una versión numerada con fecha.

## Preguntas

Si tienes preguntas sobre cómo contribuir, no dudes en crear un issue con la etiqueta "question".

## Licencia

Al contribuir a este proyecto, aceptas que tus contribuciones serán licenciadas bajo la licencia MIT del proyecto.
