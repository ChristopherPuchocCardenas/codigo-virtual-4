// leer tantos numeros como el usuario decida en cada iteracion
// al final mostrar la sumatoria
// (El usuario debe ingresar "s" en caso de que quiera ingresar
// el siguiente numero y "n" cuando el usuario ya no desee ingresar mas)
// 


let rpta = "s";
let sumatoria = 0;

while (rpta === "s") {
    let nro = +prompt("Ingresar numero");
    sumatoria = sumatoria + nro;
    rpta = prompt("Desea seguir ingresando numeros..? Si(s) o No(n)");
    while (rpta !== "s" && rpta !== "n") {
        rpta = prompt("ERROR..!! Ingrese una respuesta valida Si(s) o No(n)");
    }
}
console.log(`La sumatoria total es ${sumatoria}`);