// Una funcion es un conjunto de lineas de codigo
// que se ejecutaran cuando sean invocados, no antes, no despues
// 


function tablaDel5() {
    for (let c = 0; c <= 10; c++) {
        console.log(`${c} x 5 = ${c*5}`);
    }
}

// Obs: una funcion no se ejecuta hasta que se le invoque

tablaDel5();

// la ventaja de una funcion es que puede ser invocada n veces

console.log("----------");
tablaDel5();
console.log("----------");
tablaDel5();