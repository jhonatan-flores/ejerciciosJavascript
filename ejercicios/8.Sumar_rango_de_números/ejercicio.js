function sumarRango(inicio, fin) {
    let suma = 0; // Inicializamos la suma en 0
    for (let i = inicio; i <= fin; i++) {
        suma += i; // Sumamos cada número en el rango
    }
    return suma; // Retornamos el total
}

// Código de prueba
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 5
