// Calcular el mayor de 3 numero (asumiendo que son diferentes de todos)
// y mostrarlo en la consola
// Los numeros pueden ser ingresados por el usuario o declararlos al inicio del programa

const nro1 = 9;
const nro2 = 1;
const nro3 = 8;

if (nro1 > nro2) {
    if (nro1 > nro3) {
        console.log(`El numero mayor es el ${nro1}`);
    } else {
        console.log(`El numero mayor es el ${nro3}`);
    }
} else {
    if (nro2 > nro3) {
        console.log(`El numero mayor es el ${nro2}`);
    } else {
        console.log(`El numero mayor es el ${nro3}`);
    }
}