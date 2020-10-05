// Llenar un arreglo con n numeros ingresados por el usuario
// 
// 

const n = 5;
let numeros = [];

for (let c = 0; c < n; c++) {
    // numeros ingresados por el usuario
    let ingresos = +prompt("Ingrese numero");
    // ingresando los elementos del acumulador ingresos
    numeros.push(ingresos);
}
console.log(numeros);