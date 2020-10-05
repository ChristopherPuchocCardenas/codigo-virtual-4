// Hacer un algoritmo para calcular el factorial de un numero 
// como es..?
// ejm: factorial de 5 = 5x4x3x2x1=120
// 

let productoTotal = 1;
let nro = 5;
for (let c = 1; c < 6; c++) {
    console.log(c);
    productoTotal = productoTotal * c;
}
console.log(`El factorial de 5 es ${productoTotal}`);