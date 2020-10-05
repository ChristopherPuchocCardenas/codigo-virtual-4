// DATE es la clase o tipo de dato que nos ayudara a trabajar con fechas 

let hoy = new Date();
console.log(hoy);

// Obtener el año de una fecha
// fecha.getFullYear();
// Retorna el año de un objeto date 

let anio = hoy.getFullYear();
console.log(anio);

// fecha.getMonth();
// Retorna el numero del mes que corresponda en el calendario
// donde 0 es ENERO

let mes = hoy.getMonth();
console.log(mes);

// fecha.getDate();
// Retorna el numero del dia del mes

let diaMes = hoy.getDate();
console.log(diaMes);

// fecha.getDay();
// Retorna el numero del dia de la semana donde domingo es 0

let diaSemana = hoy.getDay();
console.log(diaSemana);

let horas = hoy.getHours();
let minutos = hoy.getMinutes();
let segundos = hoy.getSeconds();
let milisegundos = hoy.getMilliseconds();

console.log(`Horas actual = ${horas}`);
console.log(`Minutos actual = ${minutos}`);
console.log(`Segundos actual = ${segundos}`);
console.log(`Milisegundos actual = ${milisegundos}`);

// Como inicializo un objeto date con una fecha distinta?

let halloween2020 = new Date(2020, 9, 31);
console.log(halloween2020);

let halloweenMenosHoy = halloween2020 - hoy;
console.log(halloweenMenosHoy);

let diasParaHalloween = (((halloweenMenosHoy / 1000) / 60) / 60) / 24;
console.log(`Dias para Halloween: ${diasParaHalloween.toFixed()}`);

// Inicializar una fecha en formato UNIX
// new Date ()
let fechaPronostico = new Date(1601143200 * 1000)
console.log(fechaPronostico);