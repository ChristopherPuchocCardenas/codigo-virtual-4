// Creacion de elementos en el DOM

// document.createElement("nombre_de_la_etiqueta");
// retorna la referencia a un elemento que aun no esta presente en el DOM, pero que sera agregado en lo posterior.

const titulo = document.createElement("h1")
titulo.innerText = "Titulo de mi app";

// element.appenChild(elemento)
// agrega a un element un elemento creado
// si el elemento no existia en el DOM, ahora va a estar como hijo
// del element

const header = document.getElementById("header");
header.appendChild(titulo);

titulo.innerText = "CodiGo - Bootcamp";