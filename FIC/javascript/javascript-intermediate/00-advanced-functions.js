//funciones avanzadas

//ciudadanos de primera clase
//uso real: eventos, APIs, manipular funciones como datos.
//ejemplo: En un botón de una web, puedes pasar una función “saludar” como callback cuando el usuario haga click.
//button.addEventListener("click", greet)

const greet = function (name) {
    console.log(`hola, ${name}`)
}

greet("fay")

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting() {
    return greet
}

processGreeting(greet, "cris")

const greet2 = returnGreeting()
greet2("lilith")


//arrow functions avanzadas
//uso real: funciones cortas, arrays, callbacks simples.
//ejemplo: Perfectas para map, filter, reduce en arrays.
//const numbers = [1,2,3]
//const doubled = numbers.map(n => n * 2) // [2,4,6]

//retorno implícito
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

//this léxico (las arrow function no crean su propio contexto)
const handler = {
    name: "cris",
    greeting: function () {
        console.log(`hola, ${this.name}`) //este this pilla el contexto del objeto
    },
    arrowGreeting: () => {
        console.log(`hola, ${this.name}`) //no tiene su propio this
    },
    arrowGreeting2: () => {
        console.log(`hola, ${handler.name}`) //sí puede usar una ref directa al objeto
    },
    //si se necesita acceder al contexto-> usar función regular
}
handler.greeting()
handler.arrowGreeting()
handler.arrowGreeting2();


//IIFE (inmediately invoke function expresion) (expresión de función invocada inmediatamente)
//uso real: aislar código (poco usado en proyectos modernos, salvo librerías viejas).
//ejemplo: Para proteger variables y que no contaminen el scope global. jQuery

//IIFE clásico
(function () {
    console.log("IIFE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})();


//parámetros rest (...)
//uso real: manejar arrays de forma flexible.
//ejemplo: En una calculadora: sum(10,20,30,40) → no necesitas saber cuántos números vendrán.

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}
console.log(sum(2, 3, 2, 3))
console.log(sum(10, 25))


//operador spread (...)
//uso real: manejar arrays de forma flexible.
//ejemplo: Copiar arrays sin mutarlos:
//const copy = [...numbers]

const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}
console.log(sumWithSpread(1, 2, 3)) //sin spread
console.log(sumWithSpread(...numbers)) //con spread


//closures (clausuras): conserva el scope de la función que está conteniendo
//uso real: encapsular estados privados.
//ejemplo: Para contadores privados o estados internos sin exponer variables globales.
//En un carrito de compra: mantener cuántos ítems llevas.

function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`contador: ${counter}`)
    }
}
const counter = createCounter()
counter()
counter()

const counter2 = createCounter()
counter2()
counter2()


//recursividad (función que se llama a sí misma)
//uso real: recorrer árboles, estructuras anidadas.
//ejemplo: Buscar en una estructura de carpetas o árbol de comentarios.

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}
console.log(factorial(5))


//funciones parciales
//idea de dividir una función con varios parámetros en funciones más pequeñas que reciben parte de los parámetros, y retornan una nueva función que espera los siguientes parámetros
//uso real: reusar funciones en programación funcional.
//ejemplo: Si tienes que sumar siempre con el mismo número base (ejemplo: añadir IVA fijo del 21%).

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}
const sumWith = partialSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(4, 3))


//currying
//uso real: reusar funciones en programación funcional.
//ejemplo:fijar primero un parámetro global (tasa, divisa, etc.) y luego reusar la función en distintas partes.

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}
const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))


//callbacks-> pasar funciones como argumentos para que sean ejecutadas después de que otra operación haya terminado
//uso real: eventos, APIs, manipular funciones como datos.
//ejemplo: Antes de Promesas/async, era la forma de manejar eventos asíncronos (ej: leer un archivo, esperar a que cargue una imagen, etc.).

function processData(data, callback){
    const result = sum(...data)
    callback(result)
}
function processResult(result){
    console.log(result)
}
function processResult2(result){
    console.log(`mi resultado es ${result}`)
}
processData([1,2,3], processResult)
processData([1,2,3], processResult2)
processData([1,2,3], (result) => {
    console.log(`mi resultado en la arrow function es ${result}`)
})