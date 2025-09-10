// FUNCIONES - EJERCICIOS

// 1. Declara una función llamada `saludar` que imprima "Hola, mundo".
function saludar() {
    console.log("hola mundo")
}
saludar()

// 2. Declara una función llamada `saludarUsuario` que reciba un parámetro `nombre` y lo imprima saludando.
function saludarUsuario(nombre) {
    console.log(`hola ${nombre}`)
}
saludarUsuario("cris")

// 3. Crea una función anónima asignada a una constante que reciba una edad y diga si es mayor de edad.
const mayorEdad = function (edad) {
    edad >= 18 ? console.log("mayor edad") : console.log("menor edad")
}
mayorEdad(15)
mayorEdad(19)

// 4. Escribe una arrow function que reciba dos números y devuelva su suma.
const suma = (a, b) => a + b
console.log(suma(10, 5))

// 5. Escribe una arrow function de una sola línea que multiplique dos números y devuelva el resultado.
const mult = (a, b) => a * b
console.log(mult(5, 2))

// 6. Declara una función `restar` que tenga parámetros por defecto (a = 0, b = 0).
const resta = (a = 0, b = 0) => a - b
console.log(resta())

// 7. Declara una función `areaRectangulo` que reciba base y altura, y devuelva el área usando `return`.
function areaRectangulo(base, altura) {
    return base * altura
}
console.log(areaRectangulo(5, 5))

// 8. Crea una función `esPar` que reciba un número y devuelva true si es par, false si no.
function esPar(num) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}
console.log(esPar(3))

// 9. Crea una función `externa` que contenga otra función `interna` y ambas impriman un mensaje.
function externa() {
    console.log("funcion externa")
    function interna() {
        console.log("funcion interna")
    }
    interna()
}
externa()

// 10. Intenta llamar a la función `interna` desde fuera de `externa`. ¿Qué pasa?
//no se puede acceder a ella

// 11. Crea una función de orden superior llamada `aplicarOperacion` que reciba una función y dos números, y devuelva el resultado de aplicar esa función.
const division = (a, b) => a / b
function aplicarOperacion(func, a, b) {
    return func(a, b)
}
console.log(aplicarOperacion(division, 10, 2))

// 12. Usa `aplicarOperacion` para pasarle una función que reste y otra que multiplique.
console.log(aplicarOperacion(resta, 10, 2))
console.log(aplicarOperacion(mult, 10, 2))

// 13. Crea un array de nombres y recórrelo con `forEach`, imprimiendo cada uno con su índice.
let nombres = ["lilith", "kenneth", "cris"]
nombres.forEach((nombre, index) => {
    console.log(`${index}: ${nombre}`)
});

// 14. Declara un `Set` con varios valores y recórrelo con `forEach`, imprimiendo cada elemento.
let mySet = new Set(["cris", 13, true, true, "cris"])
mySet.forEach(element => {
    console.log(element)
})

// 15. Declara un `Map` con 3 pares clave-valor y recórrelo con `forEach`, mostrando la clave y el valor.
let myMap = new Map([
    ["nombre", "cris"],
    ["edad", 27],
    ["estado", "lamentable"]
])
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`)
})

// 16. Crea una función llamada `duplicarArray` que reciba un array de números y devuelva un nuevo array con cada número duplicado.
let numeros1 = [1, 4, 2, 5]
function duplicarArray(arr) {
    let arrDuplicado = []
    for (let i = 0; i < arr.length; i++) {
        arrDuplicado.push(arr[i])
        arrDuplicado.push(arr[i])
    }
    return arrDuplicado
}
console.log(duplicarArray(numeros1))

// 17. Escribe una función `esVocal` que reciba una letra y devuelva true si es vocal (usa `return` y una condición).
function esVocal(letra) {
    let vocales = "aeiou"
    for (let vocal of vocales) {
        if (letra == vocal) {
            return true
        } else {
            return false
        }
    }
}
console.log(esVocal("f"))
console.log(esVocal("a"))

// 18. Crea una función `mayusculas` que reciba un array de strings y devuelva un nuevo array con todos los strings en mayúsculas.
let canciones = ["up from the bottom", "waiting for the end", "good things go"]
function mayusculas(arr) {
    let arrMay = []
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        let strMay = str.toUpperCase()
        arrMay.push(strMay)
    }
    return arrMay
}
console.log(mayusculas(canciones))

// 19. Declara una función que reciba cualquier cantidad de parámetros numéricos y devuelva su suma total (usa `...params`).
function sumaGrande(...params) {
    let total = 0
    for (let num of params) {
        total += num
    }
    return total
}
console.log(sumaGrande(5, 10, 4, 1, 5, 10))

// 20. Escribe una función llamada `filtrarNumeros` que reciba un array mixto (strings, números, booleanos) y devuelva solo los números.
let arrMixto = [4, true, false, "cris", 13, 67, "lilith"]
function filtrarNumeros(arr) {
    let arrNum = []
    for (let i = 0; i < arr.length; i++) {
        let dato = arr[i]
        if (typeof dato == "number") {
            arrNum.push(dato)
        }
    }
    return arrNum
}
console.log(filtrarNumeros(arrMixto))