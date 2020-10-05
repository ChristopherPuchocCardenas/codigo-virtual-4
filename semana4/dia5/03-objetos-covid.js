// Funcion para recibir el nombre de un pais introducido por el usuario
// y mostrar:
// Total de casos
// Total de recuperados
// Total de fallecidos

const mostrarDataPorPais = (pais) => {
    for (let c = 0; c < covid.length; c++) {
        if (covid[c].country === pais) {
            let Resumen = {
                nombrePais: covid[c].country,
                totalCasos: covid[c].cases,
                totalRecuperados: covid[c].recovered,
                totalFallecidos: covid[c].deaths,
            }
            console.log(Resumen);
            return;
        }
    }
};
mostrarDataPorPais("Brazil")

// La misma funcion de arriba pero con find
const mostrarDataPorPaisV2 = (pais) => {
    const paisEncontrado = covid.find((estadistica) => {
        if (estadistica.country === pais) {
            return estadistica;
        }
    });
    let Encontrado = {
        nombrePais: paisEncontrado.country,
        totalCasos: paisEncontrado.cases,
        totalRecuperados: paisEncontrado.recovered,
        totalFallecidos: paisEncontrado.deaths,
    }
    console.log(Encontrado);
};
mostrarDataPorPaisV2("Peru");