// OBJETOS
// los objetos se crean a traves de la abstraccion
// de los elementos que querramos crear o representar

// abstraer, significa llevar caracteristicas de un entorno real a un entorno virtual

// esto corresponde a la anotacion JSON:
let mascota = {
    nombre: "kone",
    raza: "labrador",
    tipo: "can",
    "edad": 1,
    vacuna: false,
    habilidades: [{
        nombre: "Se hace el muertito",
        nivel: "experto",
    }, {
        nombre: "se para en dos patitas",
        nivel: "intermedio",
    }],
    colores: ["negro", "gris"],
    propietario: {
        nombre: "Christopher Puchoc",
        direccion: "jr. jose santos chocano",
    },
};


console.log(mascota);
// Mostrando atributos:
console.log(`nombre: ${mascota.nombre}`);
// modificando atributos
mascota.vacuna = true;
console.log(mascota);
// Crear nuevos atributos
mascota.comida = "ricocan";
console.log(mascota);
// imprimir subobjeto
console.log("Direccion: " + mascota.propietario.direccion);
// impriminedo todos los colores de la mascota
mascota.colores.forEach((elemento, i) => {
    console.log(`${i + 1} - ${elemento}`);
});
// imprimiendo los nombres de las habilidades
mascota.habilidades.forEach((habilidad, i) => {
    console.log(habilidad.nombre);
})