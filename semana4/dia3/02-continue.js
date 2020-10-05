// La sentencia "continue" interrumpe cuando se encuentra desarrollando una estructura repetitiva
// sin embargo hace que se continue continue la siguiente iteracion
// Algoritmo que recorre un arreglo hasta encontrar un numero "0"
// 
// algoritmo que imprime los numeros diferentes de "0"

const edades = [10, 15, 20, 0, 69, 7];

for (let c = 0; c < edades.length; c++) {
    if (edades[c] === 0) {
        continue;
    }
    console.log(edades[c]);
}