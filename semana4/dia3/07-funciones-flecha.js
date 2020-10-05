// FUNCIONES DE FLECHA


// const tablaDeMultiplicar = function(numero) {
//     for (let c = 0; c <= 10; c++) {
//         console.log(`${c} x ${numero} = ${c*numero}`);
// }
// 
// }

// una funcion de flecha es una funcion anonima
// solo que esta escrito en sintaxis moderna de javascript

const tablaDeMultiplicar = (numero) => {
    for (let c = 0; c <= 10; c++) {
        console.log(`${c} x ${numero} = ${c * numero}`);
    }
};

tablaDeMultiplicar(17);