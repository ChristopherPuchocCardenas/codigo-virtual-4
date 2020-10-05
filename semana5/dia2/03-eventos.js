// Los eventos: son los sucesos que ocurren cuando un elemento es afectado por una accion
// ejm:clic, pasar el mouse por encima, presionar una tecla
// mantener el clic presionado, escribir algo sobre el elemento(input)

// ¿como se configura un evento?
// forma 1
// elemento.on[evento] = ()=>{}
// forma 2
// elemento.addEventListener("[evento]",()=>{})


let contador = 0;

const textoContador = document.getElementById("textoContador");

// Forma 1
const btn1 = document.getElementById("btn1");
btn1.onclick = () => {
    contador++;
    textoContador.innerText = contador
    console.log(`Ups... me hicieron clic`);
}

// Capturar informacion que trae un evento

const btn2 = document.getElementById("btn2");
btn2.onclick = (evento) => {
    // Informacion que produce un evento

    // evento.target = retorna el elemento en el que sucede el evento
    console.log(`**evento.target**`);
    console.log(evento.target);

    // evento.clientX = coordenada en x respecto del VIEWPORT en px en donde se hizo clic
    // evento.clientY = coordenada en y respecto del VIEWPORT en px en donde se hizo clic
    console.log(`**evento.clientX**`);
    console.log(evento.clientX);
    console.log(`**evento.clientY**`);
    console.log(evento.clientY);

    // evento.offsetX = coordenadaen x respecto del elemento en px en donde se hizo clic
    // evento.offsetY = coordenadaen y respecto del elemento en px en donde se hizo clic
    console.log(`**evento.offsetX**`);
    console.log(evento.offsetX);
    console.log(`**evento.offsetY**`);
    console.log(evento.offsetY);

    // evento.altKey = retorna true si el evento ha sido ejecutado con la ayuda de la tecla alt, caso contrario retorna false

    console.log(`**evento.altKey**`);
    console.log(evento.altKey);

    // 



}