// La Clase MATH nos ayuda a trabajar con funciones matematicas
// 

// Para usar la clase math y sus metodos
// No se necesita crear un objeto

// RANDOM
// math.random()
// Retorna un numero aleatorio entre 0 y 1

let aleatorio = Math.random();
console.log(aleatorio);

// Retornar un numero aleatorio entre min y max
// Math.random()* (max - min) + min;

let aleatorioEntre50y100 = Math.random() * (100 - 50) + 50;
console.log(aleatorioEntre50y100);

// Obtener el piso de un numero
// es obtener la parte entera proxima inferior de un numero decimal
// Ejemplo:16.99 = 16, 5.85 = 5
// Math.floor(numero)

console.log(Math.floor(aleatorioEntre50y100));

// Obtener el techo de un numero decimal
// Math.ceil(numero_decimal)

console.log(Math.ceil(52.01));

// Redondear un numero de forma fisica
// Math.round(numero_decimal)

console.log(Math.round(52.3));