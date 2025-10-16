// 🧪 TESTING EN DESARROLLO DE SOFTWARE

// 🔹 ¿Qué es el testing?
// El "testing" o prueba de software es el proceso de comprobar que el código
// funciona correctamente, cumple los requisitos esperados y no contiene errores.
// Se basa en ejecutar funciones o componentes con distintos valores y verificar
// que el resultado sea el correcto.

// 🔹 ¿Por qué es importante?
// 1. Aumenta la calidad del software: detecta errores antes de llegar al usuario.
// 2. Facilita el mantenimiento: si cambias código, las pruebas te dicen si rompiste algo.
// 3. Permite refactorizar con confianza.
// 4. Ahorra tiempo y dinero a largo plazo (detectar errores en producción es más costoso).
// 5. Es esencial en entornos profesionales donde varios desarrolladores trabajan en el mismo proyecto.

// -----------------------------------------------------------
// ⚙️ TIPOS DE PRUEBAS EN DESARROLLO PROFESIONAL
// -----------------------------------------------------------

// 1️⃣ PRUEBAS UNITARIAS (Unit Tests)
// - Comprueban el comportamiento de una sola función, clase o componente en aislamiento.
// - Son las más rápidas y numerosas.
// - Ejemplo: verificar que una función "sumar(2,3)" devuelva 5.
function sumar(a, b) {
    return a + b
}
module.exports = sumar
// prueba unitaria manual
console.log(sumar(2, 3) === 5) // true → test pasa
console.log(sumar(2, -1) === 1) // true → test pasa

// 2️⃣ PRUEBAS DE INTEGRACIÓN (Integration Tests)
// - Comprueban cómo interactúan varias partes del sistema entre sí.
// - Ejemplo: si una función depende de otra, o un módulo usa una API interna.
function obtenerUsuario() {
    return { nombre: "Cris", edad: 27 }
}
function saludarUsuario() {
    const usuario = obtenerUsuario()
    return `Hola ${usuario.nombre}`
}
// prueba de integración: comprueba que ambas funciones trabajen bien juntas
console.log(saludarUsuario() === "Hola Cris") // true → test pasa

// 3️⃣ PRUEBAS E2E (End to End)
// - Simulan la experiencia real del usuario final.
// - Se ejecutan normalmente en el navegador con herramientas como Cypress o Playwright.
// - Comprueban todo el flujo: desde abrir la página hasta realizar acciones y ver el resultado.
// - Ejemplo: “el usuario inicia sesión y ve su panel”.

// Estas pruebas son más lentas y complejas, pero aseguran que la app funciona de principio a fin.
// En un entorno real no se hacen a mano, sino con automatización.

// -----------------------------------------------------------
// 💡 Resumen rápido:
// Unitarias → pequeñas piezas
// Integración → piezas conectadas
// E2E → flujo completo del usuario
// -----------------------------------------------------------