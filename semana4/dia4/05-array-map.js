// MAP
// map es una funcion propia de los arreglos y el comportamiento es muy similar
// a la funcion filter sin embargo, en la funcion map, se retornan siempre, todos
// los elementos del arreglo porque su objetivo principal es armar
// un nuevo arreglo con algunos o todos los elementos modificados

const numeros = [12, 0, 0, -25, 21, -5, -1];

let respuesta = numeros.map((elemento, i) => {
    if (elemento > 0) {
        return elemento * 2;
    } else {
        return elemento;
    }
});
console.log(respuesta);