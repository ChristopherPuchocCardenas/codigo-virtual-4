// Atrapar elementos del DOM con document
// ¿Atrapar? capturarlos en una variable
// 
// 

// Document.getElementById("id_del_elemento_en _el_dom") retorna
// una referencia al elemento del DOM con el id proporcionado

const header = document.getElementById("header");
console.log(header);

// document.getElementsByClassName("nombre_de_clase_en_comun")
// Retorna un arreglo de elementos que en el DOM, tengan el mismo nombre de clase

const cajas = document.getElementsByClassName("caja")
console.log(cajas);

console.log(cajas[0]);

// cajas.array.forEach((elemento) => {
//     console.log(elemento);
// });

// El codigo anterior, generara un error porque no es un arreglo nativo
// por ende, no tiene todas sus funciones

// TIP ¿Como convertir un HTMLCollection o cualquier otra estructura que tenga
// la forma de un arreglo a un arreglo nativo

const cajasArray = Array.from(cajas);
console.log(cajasArray);

// document.querySelector("selector_tipo_CSS")
// document.querySelectorAll("selector_tipo_CSS")
// 

const main = document.querySelector("#main");
console.log(main);

// TODOS LOS ELEMENTOS RETORNADOS POR LOS DISTINTOS SELECTORES
// son del tipo "ELEMENT"
//