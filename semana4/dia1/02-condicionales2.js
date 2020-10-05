// Calcular el indice de masa corporal
// e indicar si una persona se encuentra con sobrepeso
// de acuerdo a la siguiente tabla

// 15 o menos Delgadez
// 15 a 25 Peso Ideal
// 25 a mas Sobre Peso

// FORMULA DEL IMC
// IMC = peso(kg)/Altura**2

let peso = +prompt("Ingrese su peso en Kg");
let altura = +prompt("Ingrese su altura en Mt");
const imc = peso / altura ** 2;
console.log(imc);
if (imc <= 15) {
    console.log("El paciente presenta delgadez extrema");
} else {
    if (imc > 25) {
        console.log("El paciente presenta sobrepeso");
    } else {
        console.log("El paciente tiene el peso adecuado");
    }
}