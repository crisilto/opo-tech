// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los nÃºmeros del 1 al 20.
// FOR
for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// WHILE
let i = 1
while (i <= 20) {
    console.log(i)
    i++
}

// DO-WHILE
i = 1
do {
    console.log(i)
    i++
} while (i <= 20)

// 2. Crea un bucle que sume todos los nÃºmeros del 1 al 100 y muestre el resultado.
// FOR
let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum)

// WHILE
sum = 0
let j = 1
while (j <= 100) {
    sum += j
    j++
}
console.log(sum)

// DO-WHILE
sum = 0
let k = 1
do {
    sum += k
    k++
} while (k <= 100)
console.log(sum)

// 3. Crea un bucle que imprima todos los nÃºmeros pares entre 1 y 50.
// FOR
for (let i = 2; i <= 50; i += 2) {
    console.log(i)
}
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// WHILE
i = 1
while (i <= 50) {
    if (i % 2 == 0) {
        console.log(i)
    }
    i++
}

// DO-WHILE
i = 1
do {
    if (i % 2 == 0) {
        console.log(i)
    }
    i++
} while (i <= 50)

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.
let nombres = ["Lilith", "Kenneth", "Raúl", "Cristina"]

// FOR
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

// WHILE
let n = 0
while (n < nombres.length) {
    console.log(nombres[n])
    n++
}

// DO-WHILE
n = 0
do {
    console.log(nombres[n])
    n++
} while (n < nombres.length)

// FOR OF
for (let nombre of nombres) {
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el nÃºmero de vocales en una cadena de texto.
let cadena = "SAlamandra venenosa"
let vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
let contadorVocales = 0

// FOR
for (let i = 0; i < cadena.length; i++) {
    let letra = cadena[i].toLowerCase()
    if (vocales.includes(letra)) {
        contadorVocales++
    }
}
console.log(contadorVocales)

// FOR OF
contadorVocales = 0
for (let letra of cadena) {
    let letraMinuscula = letra.toLowerCase()
    if (vocales.includes(letraMinuscula))
        contadorVocales++
}
console.log(contadorVocales)

// WHILE
contadorVocales = 0
let v = 0
while (v < cadena.length) {
    let letra = cadena[v].toLowerCase()
    if (vocales.includes(letra)) {
        contadorVocales++
    }
    v++
}
console.log(contadorVocales)

// DO-WHILE
contadorVocales = 0
i = 0
do {
    let letra = cadena[i].toLowerCase()
    if (vocales.includes(letra)) {
        contadorVocales++
    }
    i++
} while (i < cadena.length)
console.log(contadorVocales)

// 6. Dado un array de nÃºmeros, usa un bucle para multiplicar todos los nÃºmeros y mostrar el producto.
let numeros = [2, 6, 3, 2]
let producto = 1

// FOR
for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i]
}
console.log(producto)

// FOR OF
producto = 1
for (numero of numeros) {
    producto *= numero
}
console.log(producto)

// WHILE
i = 0
producto = 1
while (i < numeros.length) {
    producto *= numeros[i]
    i++
}
console.log(producto)

// DO-WHILE
i = 0
producto = 1
do {
    producto *= numeros[i]
    i++
} while (i < numeros.length)
console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.

// FOR
for (let i = 0; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
}

// WHILE
i = 0
while (i <= 10) {
    console.log(`5 x ${i} = ${5 * i}`)
    i++
}

// DO-WHILE
i = 0
do {
    console.log(`5 x ${i} = ${5 * i}`)
    i++
} while (i <= 10)

// 8. Usa un bucle para invertir una cadena de texto.
cadena = "javascript mola"
let cadenaInvertida = ""

// FOR
for (let i = 0; i < cadena.length; i++) {
    cadenaInvertida = cadena[i] + cadenaInvertida
}
console.log(cadenaInvertida)

// WHILE
i = 0
cadenaInvertida = ""
while (i < cadena.length) {
    cadenaInvertida = cadena[i] + cadenaInvertida
    i++
}
console.log(cadenaInvertida)

// DO-WHILE
i = 0
cadenaInvertida = ""
do {
    cadenaInvertida = cadena[i] + cadenaInvertida
    i++
} while (i < cadena.length)
console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 nÃºmeros de la secuencia de Fibonacci.
/* 
Empieza por un 0 y un 1, despues, se sumará el último número al penúltimo y así repetidamente
0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597...
declaras variable fibonacci= 0, 1
declaras variable ultimo ultNum = fibonacci[fibonacci.length -1]
declaras variable penultimo penultNum = fibonacci[fibonacci.length -2]
iteras
fibonacci = fibonacci.push(ultNum + penultNum)
*/
let fibonacci = [0, 1];

// FOR
for (let i = 2; i < 10; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}

console.log(fibonacci);

// WHILE
i = 2
fibonacci = [0, 1]
while (i < 10) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    i++
}
console.log(fibonacci);

// DO-WHILE
i = 2
fibonacci = [0, 1]
do {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    i++
} while (i < 10)
console.log(fibonacci);

// 10. Dado un array de nÃºmeros, usa un bucle para crear un nuevo array que contenga solo los nÃºmeros mayores a 10.
let nums = [2, 10, 15, 17, 18, 1, 3, 27, 24, 0, 13]
let numsMayoresA10 = []

// FOR
for(let i = 0; i < nums.length; i++){
    if(nums[i] > 10){
        numsMayoresA10.push(nums[i])
    }
}
console.log(numsMayoresA10)

// Y ordenalos.
let numsMayoresA10Ordenados = [...numsMayoresA10].sort()
console.log(numsMayoresA10Ordenados)

// FOR OF
numsMayoresA10 = []
for(let num of nums){
    if(num > 10){
        numsMayoresA10.push(num)
    }
}
console.log(numsMayoresA10)