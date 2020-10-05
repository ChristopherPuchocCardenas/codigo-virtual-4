// Operadores Aritmeticos

/**
 * suma = +
 * resta = -
 * multiplicacion = *
 * division = cociente de una division = /
 * modulo = residuo de una division = %
 * potencia = **
 */

let a = 60;
let b = 20;
let division = a / b;
let modulo = a % b;

console.log(`division ${a} / ${b} = ${division}`);
console.log(`modulo ${a} % ${b} = ${modulo}`);

// Operadores Adicionales

/**
 * incremento = "+="
 * decremento = "-="
 * incremento en una unidad = "++"
 * decremento en una unidad = "--"
 */

// debugger; crea un punto de interrupcion en la ejecucion de un programa permitiendonos ir paso a paso hasta el fin del mismo

let numero = 50;
let numero2 = 100;
// numero = numero + numero2 => numero += numero2
numero += numero2;
// numero *= numero2 => numero = numero * numero2
console.log(numero);

numero2++;

console.log(numero2);