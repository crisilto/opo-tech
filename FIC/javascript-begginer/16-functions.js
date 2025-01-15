// FUNCIONES

// Simple
function hello() {
    console.log("Hola")
}
hello()

// Con parámetros
function helloSomeone(name) {
    console.log(`Hola ${name}!`)
}
helloSomeone("Cris")

// Anónimas
const helloAnon = function (name) {
    console.log(`Hola ${name}!`)
}
helloAnon("Anónimo")

// Arrow functions
const helloArrow = (name) => {
    console.log(`Hola ${name}!`)
}
helloArrow("Arrow")
const helloArrow2 = name => console.log(`Hola ${name}!`)
helloArrow2("Arrow 2")

// Suma
const sum = (a, b) => a + b
console.log(sum(2, 2))

// Parámetros por defecto
const sumDef = (a = 0, b = 0) => a + b
console.log(sumDef())

// Retorno de valores
function mult(a, b) {
    return a * b;  // No olvidar usar la palabra reservada return para devolver un valor
}
let result = mult(2, 2)
console.log(result)

// Funciones anidadas
function extern() {
    intern()
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()  // Llama a intern() desde extern() para verificar que esté funcionando correctamente.
}
// intern() //Error, fuera del scope
extern()

// Funciones de orden superior
function applyFunc(func, ...params) {
    return func(...params)
}
let sumaOrdenSuperior = applyFunc(sum, 2, 4)
console.log(sumaOrdenSuperior) 

// forEach
// array
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(value => console.log(value))
// set
const mySet = new Set(["Cristina", "Silvestre", 27, true])
mySet.forEach(value => console.log(value))
// map
const myMap = new Map([
    ["name", "cristina"],
    ["age", 27],
    ["email", "crisilto@dev.com"]
]);

myMap.forEach((value, key) => console.log(`Key: ${key}, Value: ${value}`));