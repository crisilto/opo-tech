// Escribe un programa que tome un array de números y elimine aquellos menores a 5 utilizando un bucle (for o while).
const numeros = [5, 13, 2, 1, 42, 0, -3, 3, 5]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 5) {
        numeros.splice(i, 1)
        i-- 
    }
}

console.log(numeros) 
