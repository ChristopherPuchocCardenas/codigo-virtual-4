// Los strings y sus propiedades
// 
// 
let frase = "MAS SABE EL DIABLO POR DIABLO VIEJO DIABLO QUE POR DIABLO";
console.log(frase);

console.log("**********************");
// 
// STRING.LENGTH
//Obtiene el tamaño de caracteres que tiene una cadena 
let longitud = frase.length;
console.log(`Longitud:${longitud}`);

// STRING.TOLOWERCASE()
// Retorna la misma cadena con todos sus cararcteres en minusculas
// Ojo:No transforma la cadena inical

console.log("****************");
let enMinuscula = frase.toLowerCase();
console.log(`En minusculas: `);
console.log(enMinuscula);

// STRING.TOUPPERCASE()
// retorna la misma cadena con todos sus caracteres en mayusculas
// Ojo:No transforma la cadena inicial

console.log("******************");
let enMayuscula = frase.toUpperCase();
console.log(`En mayuscula`);
console.log(enMayuscula);

// STRING[POSICION]
// Se puede manejar a un string como un arreglo
// es decir,podemos acceder a sus posiciones
// con un valor numerico

console.log("********************");
let posicion5 = frase[5]
console.log(`Posicion 5: ${posicion5}`);

// STRING.SUBSTR(posicion_inicial, cantidad_de_cararcteres)
// Retorna una sub-cadena desde la posicion_inicial, se cuenta una cantidad de caracteres
// a la derecha

console.log("***********************");
let subCadena = frase.substr(5, 2);
console.log(`subcadena: ${subCadena}`);

// STRING.SUBSTRING(posicion_inicial, posicion_final)
// retorna una subcadena desde la posicion_inicial hasta un caracter antes de la posicion_final
// 

console.log("*************************");
let subCadena2 = frase.substring(5, 10);
console.log(`subcadena:substring(5,10)`);
console.log(subCadena2);

// STRING.INCLUDES("cadena");
// Retorna true si es que la cadena pasada por parametros esta dentro de la cadena completa
// completa, y false, si la cadena no es parte de la frase completa

console.log("***************************");
let palabraClave = frase.includes("VIEJO");
console.log(`Incluye la palabra "VIEJO": ${palabraClave}`);

// STRING.INDEXOF("cadena", )
// Retorna la posicion en la que la cadena inicia dentro de la frase, en caso de que no exista dicha subcadena, retorna -1
// Opcionalmente si envia un segundo parametro (opcional_posicion_inicial)
// La subcadena se busca desde la posicion de dicho parametro

console.log("***************************");
let posicionViejo = frase.indexOf("VIEJO");
console.log(`Posicion de la palabra "VIEJO": ${posicionViejo}`);


// STRING.TRIM()
// Funcion que retorna la misma cadena sin incluir los espacios en blanco tanto al final como al inicio (No los espacios intermedios)
// 

let frase2 = "  Cualquier frase interna ";
console.log(frase2);
console.log(`${frase2.trim()}`);


// Ejemplo cuando se busca mas de una subcadena en la cadena general

const posicionesDeDiablo = () => {
    let posicionEncontrada = 0;
    while (true) {
        posicionEncontrada = frase.indexOf("DIABLO", posicionEncontrada);
        if (posicionEncontrada !== -1) {
            console.log(`Encontrado en posicion: ${posicionEncontrada}`);
            posicionEncontrada++;
        } else {
            break;
        }
    }
}
posicionesDeDiablo();



// FUNCION QUE IMPRIME LA CANTIDAD DE VOCALES DE UNA FRASE
// SIN IMPORTAR QUE SEAN MAYUSCULA O MINUSCULA









// FUNCION QUE IMPRIME LA CANTIDAD DE PALABRAS QUE TENGA UNA FRASE
// 







// FUNCION QUE IMPRIME SI UNA FRASE ES UN PALINDROMO
// PALINDROMO:Frase que se lee igual al derecho y al reves
// EJ.
// Anita lava la tina (si consideramos quitar los espacios en blanco, la frase se lee igual)
// La ruta natural

// HINT:
// --Antes de cualquiera de las dos formas, quitarle los espacios intermedios
// ¿como?
// Recorrer toda la cadena e ir sumando letra a letra un nuevo string y cada vez que se encuentre un espacio en blanco, saltar a la siguiente ietracion

// Forma 1:
// Recorrer toda la cadena de caracteres desde el final hasta el inicio, en cada iteracion,ir sumando un string que inicialmente este vacio con cada nuevo caracter. Al final de todas las iteraciones, comparar el string original con el string creado en el ciclo for

// Forma 2:
// Recorrer toda la cadena de caracteres, desde el inicio hasta la mitad de la cadena y comparar en cada iteracion por ejemplo lo siguiente:
// Iteracion 1:
// Posicion 0 con posicion length-0
// Iteracion 2:
// Posicion 1 con posicion length-1
// Iteracion 3:
// Posicion 2 con posicion length-2
// y asi sucesivamente...en cada iteracion deben de compararse que ambos caracteres son iguales