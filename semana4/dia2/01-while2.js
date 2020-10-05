// Hacer un algoritmo para leer n numeros
// y al final del proceso calcular la sumatoria de 
// todos ellos.


const n = 10;
let c = 0;
let sumatoria = 0;
while (c < n) {
    let nro = +prompt("Ingrese un numero");
    console.log(`Ingresado ${nro}`);
    sumatoria = sumatoria + nro;
    c = c + 1
}
console.log(`sumatoria total ${sumatoria}`);