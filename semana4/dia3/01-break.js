// La sentencia "break" determina el fin de una estructura iterativa(for,while,switch,etc)
// todo depende de la logica que se utiliza

// Algoritmo que recorre un arreglo hasta encontrar un numero "0"
// entonces el algoritmo se detiene

const edades = [10, 15, 20, 0, 69, 7];

for (let c = 0; c < edades.length; c++) {
    if (edades[c] === 0) {
        break;
    }
    console.log(edades[c]);
}