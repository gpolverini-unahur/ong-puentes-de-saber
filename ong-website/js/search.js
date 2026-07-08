/**
 * Search Bar Functionality - Puentes de Saber
 * Busca en todo el contenido del sitio
 */

// Base de datos de contenido indexado
const searchDatabase = [
    // Index.html
    {
        title: 'Misión',
        content: 'Puentes de Saber es una ONG educativa que conecta estudiantes universitarios voluntarios con niños y jóvenes de zonas vulnerables',
        page: 'index.html',
        section: 'Misión'
    },
    {
        title: 'Visión',
        content: 'Ser la organización líder en inclusión digital educativa',
        page: 'index.html',
        section: 'Visión'
    },
    {
        title: 'Alfabetización Digital',
        content: 'Enseñanza de fundamentos informáticos: uso de computadoras, navegación en internet, procesadores de texto',
        page: 'index.html',
        section: 'Programas'
    },
    {
        title: 'Talleres de Programación',
        content: 'Introducción a la programación mediante plataformas visuales como Scratch y Code.org, y lenguajes como Python',
        page: 'programas.html',
        section: 'Programas'
    },
    {
        title: 'Ciudadanía Digital',
        content: 'Talleres sobre uso responsable de internet, redes sociales, privacidad, noticias falsas',
        page: 'programas.html',
        section: 'Programas'
    },
    
    // Nosotros.html
    {
        title: 'Historia',
        content: 'Fundada en 2018 por un grupo de estudiantes de Ingeniería en Sistemas de la Universidad Nacional de Hurlingham',
        page: 'nosotros.html',
        section: 'Historia'
    },
    {
        title: 'Valores',
        content: 'Inclusión, Colaboración, Empoderamiento, Innovación, Compromiso social',
        page: 'nosotros.html',
        section: 'Valores'
    },
    {
        title: 'Beneficiarios',
        content: 'Más de 500 niños y jóvenes capacitados, 15 escuelas y centros comunitarios',
        page: 'nosotros.html',
        section: 'Datos'
    },
    {
        title: 'Voluntarios',
        content: '80 estudiantes universitarios activos en Puentes de Saber',
        page: 'nosotros.html',
        section: 'Datos'
    },
    
    // Contacto.html
    {
        title: 'Contacto',
        content: 'info@puentesdesaber.org +54 11 1234-5678',
        page: 'contacto.html',
        section: 'Información'
    },
    {
        title: 'Voluntariado',
        content: 'Si eres estudiante universitario y quieres compartir tus conocimientos tecnológicos',
        page: 'contacto.html',
        section: 'Participación'
    },
    {
        title: 'Alianzas',
        content: 'Si representas una escuela o centro comunitario interesado en nuestros programas',
        page: 'contacto.html',
        section: 'Participación'
    },
    {
        title: 'Donaciones',
        content: 'Aceptamos donaciones de equipamiento informático y contribuciones para conectividad',
        page: 'contacto.html',
        section: 'Participación'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
});

/**
 * Inicializar la barra de búsqueda
 */
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput) return;
    
    // Evento cuando se escribe
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        
        if (query.length < 2) {
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            return;
        }
        
        const results = performSearch(query);
        displayResults(results);
    });
    
    // Cerrar resultados al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
        }
    });
}

/**
 * Realizar búsqueda
 * @param {string} query - Término de búsqueda
 * @returns {Array} Resultados encontrados
 */
function performSearch(query) {
    const lowerQuery = query.toLowerCase();
    
    return searchDatabase.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(lowerQuery);
        const contentMatch = item.content.toLowerCase().includes(lowerQuery);
        const sectionMatch = item.section.toLowerCase().includes(lowerQuery);
        
        return titleMatch || contentMatch || sectionMatch;
    }).slice(0, 8); // Limitar a 8 resultados
}

/**
 * Mostrar resultados de búsqueda
 * @param {Array} results - Resultados encontrados
 */
function displayResults(results) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No se encontraron resultados</div>';
        searchResults.style.display = 'block';
        return;
    }
    
    let html = '';
    results.forEach(result => {
        const preview = result.content.substring(0, 60) + '...';
        html += `
            <a href="${result.page}" class="search-result-item">
                <div class="search-result-title">${escapeHtml(result.title)}</div>
                <div class="search-result-preview">${escapeHtml(preview)}</div>
                <small class="search-result-page">${result.section}</small>
            </a>
        `;
    });
    
    searchResults.innerHTML = html;
    searchResults.style.display = 'block';
}

/**
 * Escapar caracteres HTML
 * @param {string} text - Texto a escapar
 * @returns {string} Texto escapado
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Resaltar término de búsqueda en resultados
 * @param {string} text - Texto a resaltar
 * @param {string} query - Término de búsqueda
 * @returns {string} HTML con término resaltado
 */
function highlightText(text, query) {
    const regex = new RegExp(`(${escapeHtml(query)})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
}
