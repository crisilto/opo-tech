// LOOPS - EJERCICIOS

// 1. Usa un bucle `for` para imprimir los números del 1 al 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Usa un bucle `for` para recorrer un array de frutas e imprimir cada una con su índice.
let frutas = ["banana", "manzana", "fresas"];
for (let i = 0; i < frutas.length; i++) {
    console.log(`${i}: ${frutas[i]}`);
}

// 3. Declara un array de 5 números. Usa un bucle `for` para crear un nuevo array con cada número al cuadrado.
let numeros = [13, 11, 12, 21, 23];
let numerosCuadrado = [];
for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    numerosCuadrado.push(Math.pow(num, 2));
}
console.log(numerosCuadrado);

// 4. Usa un bucle `while` para contar del 10 al 1 e imprimir los números en orden descendente.
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// 5. Usa un bucle `while` para recorrer un array hasta que encuentres un valor mayor que 100.
let valores = [13, 78, 100, 23, 101, 2, 124, 300, 2];
let j = 0;
while (j < valores.length) {
    let valor = valores[j];
    if (valor > 100) {
        console.log(`valor mayor a 100 encontrado: ${valor}`);
        break;
    }
    j++;
}

// 6. Usa un `do...while` para imprimir al menos una vez el mensaje "Intentando acceder..." aunque la condición sea falsa.
let intentos = 0;
let passwordCorrecta = "1234";
let inputPassword;
do {
    console.log("Intentando acceder...");
    inputPassword = "0000";
    intentos++;
} while (inputPassword !== passwordCorrecta && intentos < 3);
if (inputPassword === passwordCorrecta) {
    console.log("Acceso concedido");
} else {
    console.log("Demasiados intentos. Acceso denegado");
}

// 7. Crea un bucle `for...of` que recorra un array de nombres y los imprima uno por uno.
let nombres = ["cris", "lidia", "fay"]
for (let nombre of nombres) {
    console.log(nombre)
}

// 8. Declara un `Set` con varios valores únicos. Usa `for...of` para imprimir cada uno.
let valoresUnicos = new Set(["cris", 27, true, 13, "cries"])
for (let valorUnico of valoresUnicos) {
    console.log(valorUnico)
}

// 9. Declara un `Map` con tres claves y valores. Usa `for...of` para imprimir cada par clave-valor.
let clavesValores = new Map([
    ["nombre", "cris"],
    ["edad", 27],
    ["estudia", true]
])
for (let claveValor of clavesValores) {
    console.log(claveValor)
}
// 10. Usa `for...of` junto con `Object.entries(obj)` para recorrer las claves y valores de un objeto.
let myPerson = {
    "nombre": "cris",
    "edad": 27,
    "estudia": true
}
for (const [key, value] of Object.entries(myPerson)) {
    console.log(`${key}: ${value}`)
}

// 11. Usa un bucle `for` con `continue` para saltarte el número 4 al imprimir del 1 al 6.
for (let i = 1; i <= 6; i++) {
    if (i == 4) {
        continue
    }
    console.log(i)
}

// 12. Usa un bucle `for` con `break` para cortar la ejecución cuando el número llegue a 5.
for (let i = 0; i < 100; i++) {
    if (i == 5) {
        break
    }
    console.log(i)
}

// 13. Crea una función que recorra un array de palabras y detenga el bucle si encuentra la palabra "fin".
let palabras = ["hola", "que tal", "fin", "bien"]
function encontrarFin(arr) {
    let palabra = ""
    for (let i = 0; i < arr.length; i++) {
        palabra = arr[i]
        if (palabra == "fin") {
            break
        }
        console.log(palabra)
    }
}
encontrarFin(palabras)

// 14. Crea un bucle que recorra los caracteres de una string y los imprima uno por uno.
let myString = "omoplato"
// for (let myIndex in myString) {
//     console.log(myString[myIndex])
// } //el for...in está pensado para objetos y el for...of para strings
for(let letra of myString){
    console.log(letra)
}

// 15. Recorre un array anidado (array de arrays) usando bucles anidados y muestra cada elemento.
let arrayAnidado = [
    ["cristina", "silvestre"],
    [true, 27],
    ["lidia", 27]
]
for (let i = 0; i < arrayAnidado.length; i++) {
    let subArray = arrayAnidado[i]
    for (let j = 0; j < subArray.length; j++) {
        console.log(subArray[j])
    }
}

// 16. Usa `for...of` para sumar todos los valores numéricos de un `Set` de números.
let numerosSet = new Set([5, 10, 5, 15])
let suma = 0
for (let numero of numerosSet) {
    suma += numero
}
console.log(suma) //30 y no 35 porque los valores en set tienen que ser unicos y 5 se repita, asi que 5+10+15

// 17. Usa `for...of` para crear un string con todos los valores de un `Map`, en el formato: "clave: valor".
let valoresMap = new Map([
    ["pelicula", "efecto mariposa"],
    ["libro", "metamorfosis"],
    ["grupo", "linkin park"]
])
let valoresString = "";
for (let [clave, valor] of valoresMap) {
    valoresString += `${clave}: ${valor}\n`; 
}
console.log(valoresString);

// 18. Crea una cuenta regresiva con `while` desde 5 hasta 0, e imprime "¡Despegue!" al final.
let num = 5
while (num >= 0) {
    console.log(num)
    num--
}
console.log("despegue")

// 19. Recorre un array y salta los elementos que no sean strings usando `continue`.
let myArr = ["perro", 13, "gato", true, false, "loro"]
for (let i = 0; i < myArr.length; i++) {
    if (typeof myArr[i] !== "string") {
        continue
    }
    console.log(myArr[i])
}

// 20. Crea un bucle `do...while` que sume números introducidos por el usuario (simulado con un array de entrada), hasta que se escriba un número negativo.
let inputNums = [5, 1, 10, 4, -3, 0, 4, 1]
let sum = 0 //inicializar la suma
let k = 0 //indice
let inputNum //cada numero
do {
    inputNum = inputNums[k] //almacenar cada valor de cada indice como numero 
    if (inputNum >= 0) { 
        sum += inputNum
    }
    k++
} while (inputNum >= 0); 
console.log(sum)