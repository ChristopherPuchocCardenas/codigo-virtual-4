const formulario = document.getElementById("formulario");
const link = document.getElementById("link");
const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const tbody = document.getElementById("tbody");
const helper = document.getElementById("helper");
let usuarios = [];





const limpiarErrores = () => {
    // quitar el estilo del borde rojo al formulario
    formulario.classList.remove("borde-rojo");
    // ocultar el small (helper)
    helper.setAttribute("hidden", true);
    // Ojo, si el helper ya estaba oculto, que lo oculte nuevamente
    // no va a generar ningun error al sistema

}
const generarError = () => {
    // Va a hacer mostrar el texto de error
    // elemento.removeAttribute("atributo"), elimina el atributo de un elemento
    helper.removeAttribute("hidden");
    // Le va a colocar el borde rojo al formulario
    formulario.classList.add("borde-rojo");
}



const eliminarUsuario = (posicion) => {
    console.log("Eliminando" + posicion);
    usuarios = usuarios.filter((usu, i) => {
        if (i !== posicion) {
            return usu;
        }
    })
    redibujarTbody();
}


const redibujarTbody = () => {
    // 1.Limpiar el Tbody (borrar todo el HTML del Tbody)
    // tbody.innerHTML ="";
    // 2.Crear una variable string vacia
    // 3.Recorrer el arreglo de usuarios (ej:ForEach)
    // 4.En el forEach ir agregando al string vacio la estructurade la fila por cada usuario(concatenar STRINGS)
    // 5.Luego del forEach o for, settear el innerHTML del Tbody con el string creado
    // 6.Reto:darle estilos a las tablas
    tbody.innerHTML = "";

    usuarios.forEach((usu, i) => {
        let tr = document.createElement("tr");
        let tdNro = document.createElement("td");
        tdNro.innerText = i + 1;
        let tdNombre = document.createElement("td");
        tdNombre.innerText = usu.Nombre;
        let tdApellido = document.createElement("td");
        tdApellido.innerText = usu.Apellido;

        let tdAcciones = document.createElement("td");
        let btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.onclick = () => {
            console.log(`Se hizo clic en eliminar`);
            console.log(`Eliminando el registro de:  ${usu.Nombre}`);
            eliminarUsuario(i);
        }


        tdAcciones.appendChild(btnEliminar);

        tr.appendChild(tdNro);
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    })

    // Aqui guardaremos a todos los usuarios en el local storage
    // JSON: Es una clase (Tipo Math) que sirve para trabajar con estrucutras JSON, las convierte a string y tambien convierte de un string a un objeto JSON
    // 1. Convirtiendo un arreglo de objetos a un string
    const usuariosString = JSON.stringify(usuarios)
    console.log(usuariosString);
    // 2. Guardar los usuarios string en el localStorage
    localStorage.setItem("usuarios", usuariosString);

    // Colocar el cursos nuevamente en el campo del nombre, para que el usuario este listo para ingresar un nuevo nombre
    inputNombre.focus();

}

//formulario.onsubmit = evento que se desencadena cuando queremos procesar o enviar el formulario


formulario.addEventListener("submit", (evento) => {

    // ¿Por que se actualiza la pagina con submit?
    // porque es el comportamiento por defecto
    // ¿Como detener el comportamiento por defecto de un evento?
    // evento.preventDefault();
    evento.preventDefault();
    console.log("Procesando el formulario");

    // Validar si los campos estan llenos
    if (inputNombre.value.trim() === "" || inputApellido.value.trim() === "") {
        // Indicar un error de ingreso en datos
        generarError();


        return;
    }

    let objUsuario = {
        Nombre: inputNombre.value,
        Apellido: inputApellido.value,
    }

    usuarios.push(objUsuario);
    // Limpiar los campos del formulario
    inputNombre.value = "";
    inputApellido.value = "";
    // limpiar los errores
    // Ojo, si no tenian errores previamente, no importa, igual no afecta los estilos de la aplicacion
    limpiarErrores();
    console.log(usuarios);
    // RETO: Llamar a una funcion que redibuje el tbody cada vez que nuestro arreglo de usuarios es alterado (cambia de elementos)
    redibujarTbody();
});


link.onclick = (evento) => {
    evento.preventDefault();
    console.log(`Dieron clic al hipervinculo`);
}
const verificarStorage = () => {
    // Funcion que verifica si tenemos ususarios en el storage para settear el arreglo de usuarios
    const usuariosStorage = localStorage.getItem("usuarios");
    if (usuariosStorage !== null) {
        // significa que si existe la clave de usuarios
        // 1.Convertir un STRING a un objeto JSON
        usuarios = JSON.parse(usuariosStorage);
        console.log(usuarios);
        redibujarTbody();
    }

}
verificarStorage();