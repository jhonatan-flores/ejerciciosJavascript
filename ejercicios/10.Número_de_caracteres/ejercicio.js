function numeroDeCaracteres(texto, caracter) {
    let contador = 0; // Inicializamos un contador en 0
    for (let letra of texto) { // Recorremos cada letra del string
        if (letra === caracter) { // Verificamos si es el caracter buscado
            contador++; // Incrementamos el contador
        }
    }
    return contador; // Retornamos el total
}

// Código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4
