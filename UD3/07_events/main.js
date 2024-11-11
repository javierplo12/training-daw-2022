window.onload = function(e) {
    console.log('Documento cargado');

    const enlaces = document.querySelectorAll('a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const id = this.id.split('_')[1];
            const contenido = document.getElementById(`contenidos_${id}`);

            if (contenido.style.display === 'none') {
                contenido.style.display = 'block'; 
                this.innerHTML = 'Ocultar contenidos';
            } else {
                contenido.style.display = 'none'; 
                this.innerHTML = 'Mostrar contenidos';
            }
        });
    })
};