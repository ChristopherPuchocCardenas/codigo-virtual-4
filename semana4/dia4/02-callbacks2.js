// CALLBACKS

const nombres = ["christopher", "liliana", "pamela"];
const dnis = ["20146978", "45697512", "24563871"];

const buscarPorDNI = (dni, callback) => {
    for (let c = 0; c < dnis.length; c++) {
        if (dnis[c] === dni) {
            callback(nombres[c]);
            return;
        }
    }
    callback(null);
};

buscarPorDNI("45697512", (rpta) => {
    if (rpta) {
        console.log((`Encontrado: ${rpta}`));
    } else {
        console.log(`No existen coincidencias`);
    }
});