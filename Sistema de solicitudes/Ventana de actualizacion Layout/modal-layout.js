document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('modalLayoutOverlay');
    const btnAbrir = document.getElementById('btnAbrirModalLayout');
    const btnCerrarX = document.getElementById('btnCerrarXLayout');
    const btnAceptar = document.getElementById('btnAceptarLayout');

    function abrirModalLayout() {
        overlay.classList.add('active');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                overlay.classList.add('visible');
            });
        });
    }

    function cerrarModalLayout() {
        overlay.classList.remove('visible');
        overlay.addEventListener('transitionend', function handler() {
            overlay.classList.remove('active');
            overlay.removeEventListener('transitionend', handler);
        });
    }

    if (btnAbrir) {
        btnAbrir.addEventListener('click', abrirModalLayout);
    }

    if (btnCerrarX) {
        btnCerrarX.addEventListener('click', cerrarModalLayout);
    }

    if (btnAceptar) {
        btnAceptar.addEventListener('click', cerrarModalLayout);
    }

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            cerrarModalLayout();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            cerrarModalLayout();
        }
    });
});

/**
 * Muestra el modal de actualización de layout con mensaje personalizado.
 * Puede ser llamada externamente:
 * mostrarModalLayout('Mensaje principal', 'Detalle opcional');
 */
function mostrarModalLayout(titulo, detalle) {
    const tituloEl = document.querySelector('.layout-titulo');
    const detalleEl = document.querySelector('.layout-detalle');

    if (tituloEl && titulo) {
        tituloEl.textContent = titulo;
    }
    if (detalleEl && detalle) {
        detalleEl.textContent = detalle;
    }

    const overlay = document.getElementById('modalLayoutOverlay');
    if (overlay) {
        overlay.classList.add('active');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                overlay.classList.add('visible');
            });
        });
    }
}
