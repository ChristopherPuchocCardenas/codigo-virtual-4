// ForEach

// foreach es una funcion propia de los arreglos y sirve para recorrer
// un arreglo sin la necesidad de usar un ciclo for

const nombres = ["juliana", "carlos", "monica", "abel", "pepito"];

// forEach recibe una funcion anonima la cual ejecutara tantas veces como elementos
// tenga en mi arreglo
// Puede recibir los siguientes parametros
// (elemento,iterador,arreglo)=>{}




nombres.forEach((elemento, c, arreglo) => {
    console.log(`Elemento ${elemento}, c=${c}`);
    console.log(nombres);
})