let arreglo = [1, 2, 4, 5, 7, -9, 0, -6];
let p = 0;
let n = 0;
let z = 0;

for (let c = 0; c < arreglo.length; c++) {
    if (arreglo[c] > 0) {
        p++;
    } else {
        if (arreglo[c] < 0) {
            n++;
        } else {
            z++;
        }
    }

}
console.log(`Positivos ${p}`);
console.log(`Negativos ${n}`);
console.log(`Ceros ${z}`);