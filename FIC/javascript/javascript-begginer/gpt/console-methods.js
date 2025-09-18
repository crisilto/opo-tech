// CONSOLE - EJERCICIOS

// 1. Muestra un mensaje de saludo en la consola usando `console.log()`.
console.log("hola")

// 2. Simula un error de conexión a base de datos y muestra un mensaje de error con `console.error()`.
console.error("error con la bdd")

// 3. Muestra una advertencia al usuario sobre una acción peligrosa usando `console.warn()`.
console.warn("accion peligrosa")

// 4. Muestra un mensaje informativo sobre el estado de un proceso con `console.info()`.
console.info("mensaje informativo")

// 5. Crea un array de arrays con nombres y edades, y muéstralo como tabla con `console.table()`.
let datos = [
    ["cris", 27],
    ["lilith", 4]
]
console.table(datos)

// 6. Crea un array de objetos con claves `nombre` y `edad`, y muéstralo con `console.table()`.
// 6. Crea un array de objetos con claves `nombre` y `edad`, y muéstralo con `console.table()`.
let personas = [
    { nombre: "cris", edad: 27 },
    { nombre: "lilith", edad: 4 }
]
console.table(personas)

// 7. Agrupa mensajes en consola relacionados con un "Usuario" usando `console.group()` y `console.groupEnd()`.
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}
let miUsuario = new Usuario("cris", 27)
console.group("Información del usuario")
console.log("Nombre:", miUsuario.nombre)
console.log("Edad:", miUsuario.edad)
console.groupEnd()

// 8. Usa `console.time()` y `console.timeEnd()` para medir cuánto tarda un bucle `for` que se repite 100000 veces.
console.time("execution time")
for (let i = 1; i <= 100000; i++) {
    console.log(i)
}
console.timeEnd("execution time")

// 9. Escribe una función que haga dos operaciones (simples) y mide el tiempo que tarda en ejecutarse con `console.time()`.
const suma = (a, b) => a + b
const resta = (a, b) => a - b
console.time("ex time")
console.log(suma(10, 5))
console.log(resta(10, 5))
console.timeEnd("ex time")

// 10. Usa `console.assert()` para mostrar un error si un número no es mayor que 10.
let num = 3
console.assert(num > 10, "el num tiene q ser mayor a 10")

// 11. Crea una variable `edadUsuario` y usa `console.assert()` para validar si es mayor de edad (18).
let edadUsuario = 10
console.assert(edadUsuario >= 18, "el usuario tiene que ser mayor de edad")

// 12. Simula un botón "Click" llamando varias veces a `console.count("Click")` y luego resetea el contador con `console.countReset()`.
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// 13. Llama a una función dentro de otra y usa `console.trace()` para seguir la cadena de llamadas.
function funcA() {
    funcB()
}
function funcB() {
    console.trace("Execution monitoring")
}
funcA()

// 14. Simula una ruta de ejecución donde varias funciones se llaman entre sí y usa `console.trace()` para inspeccionar el flujo.
function funcionA() {
    funcionB()
}
function funcionB() {
    funcionC()
}
function funcionC() {
    console.trace("Ruta de ejecución:")
}
funcionA()

// 15. Crea una función que reciba un número y use `console.assert()` para lanzar un mensaje si no es par.
function verificarPar(num) {
    console.assert(num % 2 === 0, `El número ${num} no es par`)
}
verificarPar(3)
verificarPar(4)

// 16. Usa `console.clear()` para limpiar la consola después de imprimir varios mensajes.
console.log("Mensaje 1")
console.log("Mensaje 2")
console.clear()

// 17. Muestra los resultados de una operación matemática dentro de una `console.table()` con distintas filas.
let resultados = [
    { operacion: "suma", resultado: 5 + 3 },
    { operacion: "resta", resultado: 10 - 6 },
    { operacion: "multiplicacion", resultado: 4 * 7 },
    { operacion: "division", resultado: 20 / 4 }
]
console.table(resultados)

// 18. Usa `console.group()` para organizar información de un proceso (por ejemplo: inicio, proceso, fin).
console.group("Proceso de carga")
console.log("Inicio del proceso")
console.log("Cargando datos...")
console.log("Proceso completado")
console.groupEnd()

// 19. Crea una simulación con 3 botones clicados varias veces y cuenta cuántas veces fue clicado cada uno con `console.count()`.
function clickBoton1() {
    console.count("Botón 1")
}
function clickBoton2() {
    console.count("Botón 2")
}
function clickBoton3() {
    console.count("Botón 3")
}
clickBoton1()
clickBoton1()
clickBoton2()
clickBoton3()
clickBoton3()
clickBoton3()

// 20. Mide el tiempo total de ejecución de varias funciones usando `console.time()` y compara cuál es más rápida.
function funcionLenta() {
    for (let i = 0; i < 1e6; i++) { }
}
function funcionRapida() {
    for (let i = 0; i < 1e4; i++) { }
}

console.time("Lenta")
funcionLenta()
console.timeEnd("Lenta")

console.time("Rápida")
funcionRapida()
console.timeEnd("Rápida")
