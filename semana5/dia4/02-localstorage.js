const formulario = document.getElementById("formulario");
const inputColor = document.getElementById("inputColor")
const body = document.querySelector("body");
const reseteo = document.getElementById("reseteo");

reseteo.onclick = () => {
    // Eliminar un item del local storage
    // window.localstorage.removeItem("clave")
    window.localStorage.removeItem("color");
    body.style.backgroundColor = "#fff"
}



formulario.onsubmit = (e) => {
    e.preventDefault();
    console.log(inputColor.value);
    // Guardar el color favorito en el local starage
    // window.localstorage.setItem("clave","valor")
    // "valor" simepre debe ser un string
    let colorFavorito = inputColor.value;
    window.localStorage.setItem("color", colorFavorito)
    body.style.backgroundColor = colorFavorito;
}

const verificarStorage = () => {
    // Funcion que obtendra el color favorito del local storage y lo colocara
    // como background del body, en caso no exista el local storage, no sucedera
    // window.localstorage.getItem("clave")= retorna el valor en string de la clave proporcionada 
    const colorFavorito = window.localStorage.getItem("color");
    // Si el color favorito existe
    if (colorFavorito !== null) {
        body.style.backgroundColor = colorFavorito;
    }
}
verificarStorage();