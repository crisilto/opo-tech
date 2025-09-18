//funciones avanzadas

//ciudadanos de primera clase

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

//IIFE clásico
(function () {
    console.log("IIFE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})();


//parámetros rest (...)
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
const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}
console.log(sumWithSpread(1, 2, 3)) //sin spread
console.log(sumWithSpread(...numbers)) //con spread

//closures (clausuras): conserva el scope de la función que está conteniendo
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
function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}
console.log(factorial(5))


//funciones parciales
//idea de dividir una función con varios parámetros en funciones más pequeñas que reciben parte de los parámetros, y retornan una nueva función que espera los siguientes parámetros

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}
const sumWith = partialSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(4, 3))


//currying

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