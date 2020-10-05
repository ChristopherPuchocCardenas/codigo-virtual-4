// Funciones que reciben parametros

function tablaDeMultiplicar(numero) {
    for (let c = 0; c <= 10; c++) {
        console.log(`${c} x ${numero} = ${c*numero}`);
    }
}

// tablaDeMultiplicar(9);
console.log("------------");
// tablaDeMultiplicar(10);
console.log("------------");

let arreglo = [5, 8, 4, 7, 2, 3];

// Imprimir la tabla de multiplicar de todos los elementos del arreglo

for (let c = 0; c < arreglo.length; c++) {
    console.log(`Tabla de multiplicar del ${arreglo[c]}`);
    tablaDeMultiplicar(arreglo[c]);
}