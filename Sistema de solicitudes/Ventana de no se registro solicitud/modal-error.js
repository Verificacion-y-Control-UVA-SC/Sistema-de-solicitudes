document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('modalErrorOverlay');
    const btnAbrir = document.getElementById('btnAbrirModalError');
    const btnCerrarX = document.getElementById('btnCerrarXError');
    const btnCerrar = document.getElementById('btnCerrarError');

    function abrirModalError() {
        overlay.classList.add('active');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                overlay.classList.add('visible');
            });
        });
    }

    function cerrarModalError() {
        overlay.classList.remove('visible');
        overlay.addEventListener('transitionend', function handler() {
            overlay.classList.remove('active');
            overlay.removeEventListener('transitionend', handler);
        });
    }

    if (btnAbrir) {
        btnAbrir.addEventListener('click', abrirModalError);
    }

    if (btnCerrarX) {
        btnCerrarX.addEventListener('click', cerrarModalError);
    }

    if (btnCerrar) {
        btnCerrar.addEventListener('click', cerrarModalError);
    }

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            cerrarModalError();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            cerrarModalError();
        }
    });
});

/**
 * Muestra el modal de error con un mensaje personalizado.
 * Puede ser llamada externamente:
 * mostrarModalError('Mensaje principal', 'Detalle del error');
 */
function mostrarModalError(titulo, detalle) {
    const tituloEl = document.querySelector('.error-titulo');
    const detalleEl = document.querySelector('.error-detalle');

    if (tituloEl && titulo) {
        tituloEl.textContent = titulo;
    }
    if (detalleEl && detalle) {
        detalleEl.textContent = detalle;
    }

    const overlay = document.getElementById('modalErrorOverlay');
    if (overlay) {
        overlay.classList.add('active');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                overlay.classList.add('visible');
            });
        });
    }
}
