// SCOPE & HOISTING - EJERCICIOS

// 1. Declara una variable global y una local dentro de una función. Intenta acceder a ambas desde dentro y fuera de la función.
let globalVar = "variable global"
function testScope() {
    let localVar = "variable local"
    console.log(globalVar)
    console.log(localVar)
}
testScope() // importante ejecutar la función para ver los valores
console.log(globalVar)
// console.log(localVar) // ReferenceError: localVar is not defined

// 2. Declara una variable dentro de un `if` usando `let` y otra con `var`. Intenta acceder a ambas desde fuera del `if`.
if (true) {
    let localL = "variable local con let"
    var localV = "variable local con var"
}
// console.log(localL) // ReferenceError: localL is not defined
console.log(localV) // sí se puede acceder porque var se eleva al contexto más amplio

// 3. Declara una función `testHoist()` que use una variable `var` antes de declararla. ¿Qué pasa?
function testHoist() {
    console.log(myLocalVar) // undefined (hoisting pero sin valor asignado)
    var myLocalVar = "hola"
}
testHoist()

// 4. Intenta usar una variable `let` antes de declararla. ¿Qué error te da?
// console.log(song) // ReferenceError: Cannot access 'song' before initialization
let song = "good things go"

// 5. Declara una función tradicional (`function nombre()`) después de llamarla. ¿Funciona?
nombre() // sí funciona
function nombre() {
    console.log("cris")
}

// 6. Declara una función flecha (`const nombre = () =>`) después de llamarla. ¿Funciona?
// decirNombre() // ReferenceError: Cannot access 'decirNombre' before initialization
const decirNombre = () => console.log("cris")

// 7. Dentro de una función, declara una variable `let mensaje = "Hola"` y otra `var mensaje2 = "Adiós"`. ¿Ambas viven solo dentro de la función?
function mensajes() {
    let mensaje1 = "hola"
    var mensaje2 = "adios"
    console.log(mensaje1)
    console.log(mensaje2)
}
mensajes()
// console.log(mensaje1) // ReferenceError
// console.log(mensaje2) // ReferenceError: var tampoco escapa fuera de la función

// 8. Crea un bloque `if (true)` y dentro de él declara una constante. Intenta acceder desde fuera del bloque.
if (true) {
    const apellido = "silvestre"
    console.log(apellido)
}
// console.log(apellido) // ReferenceError

// 9. Declara dos variables con el mismo nombre: una en el scope global y otra dentro de una función. Imprime ambas y observa la diferencia.
var hola = "hola"
function saludo() {
    var hola = "hola modificado"
    console.log("Dentro de la función:", hola)
}
console.log("Fuera de la función:", hola)
saludo()

// 10. Crea una función que declare una variable local con el mismo nombre que una global y la modifique. ¿La global cambia?
var global = "variable global"
function localVar() {
    var global = "variable local con el mismo nombre"
    console.log("Dentro de la función:", global)
}
localVar()
console.log("Fuera de la función:", global) // no cambia
