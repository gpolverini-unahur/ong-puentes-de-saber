/**
 * Modo Oscuro - Puentes de Saber
 * Gestiona el cambio entre modo claro y oscuro
 */

(function() {
    'use strict';
    
    // Esperar a que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function() {
        initDarkMode();
        initTooltips();
    });
    
    /**
     * Inicializar tooltips de Bootstrap
     */
    function initTooltips() {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }
    
    /**
     * Inicializar funcionalidad de modo oscuro
     */
    function initDarkMode() {
        const toggle = document.getElementById('btn-modo');
        const html = document.documentElement;
        
        // Validar que el toggle existe
        if (!toggle) {
            console.warn('Toggle de modo oscuro no encontrado');
            return;
        }
        
        // Aplicar modo guardado al cargar la página
        applyStoredMode(html, toggle);
        
        // Configurar evento de cambio
        toggle.addEventListener('change', function() {
            toggleDarkMode(html, toggle);
        });
    }
    
    /**
     * Aplicar modo oscuro guardado en localStorage
     * @param {HTMLElement} html - Elemento HTML raíz
     * @param {HTMLElement} toggle - Toggle checkbox de modo oscuro
     */
    function applyStoredMode(html, toggle) {
        try {
            const savedMode = localStorage.getItem('modo');
            
            if (savedMode === 'oscuro') {
                html.classList.add('dark-mode');
                toggle.checked = true;
            } else {
                html.classList.remove('dark-mode');
                toggle.checked = false;
            }
        } catch (error) {
            console.error('Error al cargar preferencia de modo:', error);
        }
    }
    
    /**
     * Alternar entre modo claro y oscuro
     * @param {HTMLElement} html - Elemento HTML raíz
     * @param {HTMLElement} toggle - Toggle checkbox de modo oscuro
     */
    function toggleDarkMode(html, toggle) {
        try {
            const isChecked = toggle.checked;
            
            if (isChecked) {
                html.classList.add('dark-mode');
            } else {
                html.classList.remove('dark-mode');
            }
            
            // Guardar preferencia
            localStorage.setItem('modo', isChecked ? 'oscuro' : 'claro');
            
            // Opcional: Disparar evento personalizado para otros scripts
            const event = new CustomEvent('modoChanged', { 
                detail: { modo: isChecked ? 'oscuro' : 'claro' }
            });
            document.dispatchEvent(event);
            
        } catch (error) {
            console.error('Error al cambiar modo:', error);
        }
    }
    
})();