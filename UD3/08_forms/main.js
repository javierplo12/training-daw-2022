window.onload = function() {
    const preguntaSi = document.getElementById('pregunta_si');
    const opciones = document.getElementById('opciones');
    const condiciones = document.getElementById('condiciones');
    const privacidad = document.getElementById('privacidad');
    const nombre = document.getElementById('name');
    const apellidos = document.getElementById('surname');
    const descripcion = document.getElementById('description');
    const submitBtn = document.getElementById('submit');
    let submitting = false;

    // Habilita el combo si se selecciona "si"
    preguntaSi.onchange = function() {
        opciones.disabled = !preguntaSi.checked;
    };
    document.getElementById('pregunta_no').onchange = document.getElementById('pregunta_nsnc').onchange = function() {
        opciones.disabled = true;
    };

    // Habilita el botón de enviar si ambos checkboxes están seleccionados
    condiciones.onchange = privacidad.onchange = function() {
        submitBtn.disabled = !(condiciones.checked && privacidad.checked);
    };

    // Avisar del límite de caracteres
    descripcion.oninput = function() {
        const desc_limit = document.getElementById('desc_limit');
        desc_limit.textContent = `Máximo 80 caracteres. Restantes: ${80 - descripcion.value.length}`;
    };

    // Prevención del doble submit y validación de campos obligatorios
    document.getElementById('main_form').onsubmit = function(e) {
        if (submitting) {
            e.preventDefault();
            return;
        }
        if (!nombre.value.trim() || !apellidos.value.trim()) {
            e.preventDefault();
            alert("Por favor, complete el nombre y los apellidos.");
            return;
        }
        submitting = true;
    };
};