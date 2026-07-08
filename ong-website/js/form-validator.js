/**
 * Validación de Formularios - Puentes de Saber
 * Script para validar el formulario de contacto con Bootstrap
 */

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario
    const form = document.querySelector('form');
    
    if (form) {
        // Agregar evento al enviar el formulario
        form.addEventListener('submit', function(event) {
            // Prevenir el envío por defecto
            event.preventDefault();
            
            // Validar el formulario
            if (validateForm()) {
                // Si es válido, mostrar mensaje de éxito
                showSuccessMessage();
                // Limpiar el formulario
                form.reset();
                // Opcionalmente, retirar las clases de validación
                removeValidationClasses();
            }
        });
        
        // Validación en tiempo real mientras escribe
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                validateField(this);
            });
        });
    }
});

/**
 * Validar todo el formulario
 * @returns {boolean} True si el formulario es válido
 */
function validateForm() {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');
    
    let isValid = true;
    
    // Validar nombre
    if (!validateNombre(nombre.value)) {
        markFieldInvalid(nombre, 'El nombre es requerido');
        isValid = false;
    } else {
        markFieldValid(nombre);
    }
    
    // Validar email
    if (!validateEmail(email.value)) {
        markFieldInvalid(email, 'Por favor ingresa un email válido');
        isValid = false;
    } else {
        markFieldValid(email);
    }
    
    // Validar asunto
    if (!validateAsunto(asunto.value)) {
        markFieldInvalid(asunto, 'El asunto es requerido');
        isValid = false;
    } else {
        markFieldValid(asunto);
    }
    
    // Validar mensaje
    if (!validateMensaje(mensaje.value)) {
        markFieldInvalid(mensaje, 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    } else {
        markFieldValid(mensaje);
    }
    
    return isValid;
}

/**
 * Validar un campo individual
 * @param {HTMLElement} field - Campo del formulario
 */
function validateField(field) {
    const fieldId = field.id;
    let isValid = false;
    
    switch(fieldId) {
        case 'nombre':
            isValid = validateNombre(field.value);
            break;
        case 'email':
            isValid = validateEmail(field.value);
            break;
        case 'asunto':
            isValid = validateAsunto(field.value);
            break;
        case 'mensaje':
            isValid = validateMensaje(field.value);
            break;
        case 'telefono':
            isValid = validateTelefono(field.value);
            break;
    }
    
    if (isValid) {
        markFieldValid(field);
    } else if (field.value.length > 0) {
        markFieldInvalid(field);
    }
}

/**
 * Validar nombre
 * @param {string} nombre - Nombre a validar
 * @returns {boolean} True si es válido
 */
function validateNombre(nombre) {
    return nombre.trim().length > 2;
}

/**
 * Validar email
 * @param {string} email - Email a validar
 * @returns {boolean} True si es válido
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validar asunto
 * @param {string} asunto - Asunto a validar
 * @returns {boolean} True si es válido
 */
function validateAsunto(asunto) {
    return asunto.trim().length > 3;
}

/**
 * Validar mensaje
 * @param {string} mensaje - Mensaje a validar
 * @returns {boolean} True si es válido
 */
function validateMensaje(mensaje) {
    return mensaje.trim().length >= 10;
}

/**
 * Validar teléfono (opcional)
 * @param {string} telefono - Teléfono a validar
 * @returns {boolean} True si es válido
 */
function validateTelefono(telefono) {
    if (telefono === '') return true; // Campo opcional
    const telefonoRegex = /^[\d\s\-\+\(\)]+$/;
    return telefonoRegex.test(telefono) && telefono.replace(/\D/g, '').length >= 10;
}

/**
 * Marcar campo como válido
 * @param {HTMLElement} field - Campo del formulario
 */
function markFieldValid(field) {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    
    // Remover mensaje de error si existe
    const feedback = field.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.remove();
    }
}

/**
 * Marcar campo como inválido
 * @param {HTMLElement} field - Campo del formulario
 * @param {string} message - Mensaje de error (opcional)
 */
function markFieldInvalid(field, message = '') {
    field.classList.remove('is-valid');
    field.classList.add('is-invalid');
    
    // Remover feedback anterior si existe
    const oldFeedback = field.nextElementSibling;
    if (oldFeedback && oldFeedback.classList.contains('invalid-feedback')) {
        oldFeedback.remove();
    }
    
    // Crear y agregar elemento de feedback
    if (message) {
        const feedback = document.createElement('div');
        feedback.className = 'invalid-feedback d-block';
        feedback.textContent = message;
        field.parentNode.insertBefore(feedback, field.nextSibling);
    }
}

/**
 * Remover clases de validación
 */
function removeValidationClasses() {
    const inputs = document.querySelectorAll('form input, form textarea');
    inputs.forEach(input => {
        input.classList.remove('is-valid', 'is-invalid');
    });
}

/**
 * Mostrar mensaje de éxito
 */
function showSuccessMessage() {
    const form = document.querySelector('form');
    const card = form.closest('.card');
    
    // Crear alerta de éxito
    const alert = document.createElement('div');
    alert.className = 'alert alert-success alert-dismissible fade show mt-3';
    alert.setAttribute('role', 'alert');
    alert.innerHTML = `
        <strong>¡Mensaje enviado!</strong>
        <p>Gracias por contactarte con Puentes de Saber. Te responderemos pronto.</p>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Insertar alerta antes del formulario
    form.parentNode.insertBefore(alert, form);
    
    // Auto-cerrar alerta después de 5 segundos
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => alert.remove(), 150);
    }, 5000);
}
