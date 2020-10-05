// Crear un algritmo para verificar
// si un año ingresado por el usuario el bisiesto

// TEORIA
// los años bisiestos son divisibles entre 4
// Excepto si es divisible entre 100
// o que sea divisible entre 400

const anio = 2016;

if (anio % 4 === 0) {
    if (anio % 100 !== 0) {
        console.log(`El ${anio} es bisiesto`);
    } else {
        console.log(`El ${anio} no es bisiesto`);
    }
} else {
    if (anio % 400 === 0) {
        console.log(`El ${anio} es bisiesto`);
    } else {
        console.log(`El ${anio} no es bisiesto`);
    }
}

/**FORMA SIMPLIFICADA*******************/

if (anio % 4 === 0 && anio % 100 !== 0 || anio % 400 === 0) {
    console.log(`El ${anio} es bisiesto`);
} else {
    console.log(`El ${anio} no es bisiesto`);
}