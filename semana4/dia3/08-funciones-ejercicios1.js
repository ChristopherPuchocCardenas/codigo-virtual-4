// Crear un algoritmo donde exista una funcion que reciba un arreglo de edades y retorne
// a todos los mayores de edad en el nuevo arreglo


const filtroMayores = (edades) => {

    let mayores = [];

    for (let c = 0; c < edades.length; c++) {
        if (edades[c] >= 18) {
            mayores.push(edades[c]);
        }
    }
    return mayores;
};
let arreglo = [12, 19, 17, 58, 42, 10];
let losMayores = filtroMayores(arreglo);
console.log(losMayores);