function numeroDeAes(texto) {
    let contador = 0; // Inicializamos un contador en 0
    for (let letra of texto) { // Recorremos cada letra del string
        if (letra === 'a') { // Verificamos si es una 'a'
            contador++; // Incrementamos el contador
        }
    }
    return contador; // Retornamos el total
}

// Código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0
