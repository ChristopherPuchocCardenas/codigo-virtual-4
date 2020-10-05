// FILTER

// Es una funcion propia de los arreglos,
// recibe un callback con los mismos parametros de la funcion forEach
// La dirferencia es que filter retorna un nuevo arreglo con los elementos filtrados


const numeros = [12, 0, 0, -25, 21, -5, -1];

let resultado = numeros.filter((elemento) => {
    if (elemento < 0) {
        return elemento;
    }
})
console.log(resultado);