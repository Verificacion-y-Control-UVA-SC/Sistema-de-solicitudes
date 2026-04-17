document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('modalOverlay');
    const btnAbrir = document.getElementById('btnAbrirModal');
    const btnCerrarX = document.getElementById('btnCerrarX');
    const btnCerrar = document.getElementById('btnCerrar');

    function abrirModal() {
        overlay.classList.add('active');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                overlay.classList.add('visible');
            });
        });
    }

    function cerrarModal() {
        overlay.classList.remove('visible');
        overlay.addEventListener('transitionend', function handler() {
            overlay.classList.remove('active');
            overlay.removeEventListener('transitionend', handler);
        });
    }

    if (btnAbrir) {
        btnAbrir.addEventListener('click', abrirModal);
    }

    btnCerrarX.addEventListener('click', cerrarModal);
    btnCerrar.addEventListener('click', cerrarModal);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            cerrarModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            cerrarModal();
        }
    });
});

/**
 * Muestra el modal con un folio específico.
 * Puede ser llamada externamente: mostrarModalSolicitud(2414);
 */
function mostrarModalSolicitud(folio) {
    const folioTexto = document.querySelector('.folio-texto');
    if (folioTexto) {
        folioTexto.textContent = `Folio ${folio} registrado correctamente.`;
    }
    const overlay = document.getElementById('modalOverlay');
    if (overlay) {
        overlay.classList.add('active');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                overlay.classList.add('visible');
            });
        });
    }
}
