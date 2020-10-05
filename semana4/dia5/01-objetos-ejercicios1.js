// Algoritmo para guardar n personas y registrar de cada una:
// Nombre,apellido y edad
// guardarlo en un arreglo de objetos e imprimirlo

const registrarPersonas = () => {
    const n = 3;
    const personas = [];
    for (let c = 0; c < n; c++) {
        const nombre = prompt(`Ingrese el nombre de la persona ${c+1}`);
        const apellido = prompt(`Ingrese el apellido de la persona ${c+1}`);
        const edad = +prompt(`Ingrese la edad de la persona ${c+1}`);
        const objPersona = {
            name: nombre,
            lastname: apellido,
            age: edad,
        }
        personas.push(objPersona);
    }
    console.log(personas);
};

// registrarPersonas();