
function determinarTipoTriangulo(a, b, c) {
    if (!esTrianguloValido(a, b, c)) {
        return "Los lados proporcionados no forman un triángulo válido.";
    }

    if (a === b && b === c) {
        return "El triángulo es equilátero.";
    } else if (a === b || b === c || a === c) {
        return "El triángulo es isósceles.";
    } else {
        return "El triángulo es escaleno.";
    }
}

// Función para verificar si los lados forman un triángulo válido
function esTrianguloValido(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}