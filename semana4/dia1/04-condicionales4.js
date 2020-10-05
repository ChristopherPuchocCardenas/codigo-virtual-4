// Operadores logicos
// 
// && and y
// || or o
// ! not negacion

const nro1 = 5;
const nro2 = 9;
const nro3 = 1000;

if (nro1 > nro2 && nro1 > nro3) {
    console.log(`El numero mayor es ${nro1}`);
} else {
    if (nro2 > nro1 && nro2 > nro3) {
        console.log(`El numero mayor es ${nro2}`);
    } else {
        console.log(`El numero mayor es ${nro3}`);
    }
}