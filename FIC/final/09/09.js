// Diseña un programa que calcule la suma de un array de números utilizando reduce.
const numeros = [5, 10, 15, 10, 25]
const suma = numeros.reduce((acc, actual) => acc + actual, 0)
console.log(suma)