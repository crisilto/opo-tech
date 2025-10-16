// ✅ IMPORTACIÓN DEL MÓDULO A TESTEAR
// Importamos la función 'sumar' que queremos probar desde el archivo 22-testing.js
// En testing, cada archivo suele probar una única funcionalidad o módulo.
const sumar = require("./22-testing")

// ✅ PRIMER TEST: comprobación correcta
// La función test() define una "prueba unitaria" (unit test).
// - El primer argumento es una descripción del test (string).
// - El segundo argumento es una función callback donde se ejecuta el test.
test("suma de 3+5 tiene que ser 8", () => {
    // expect() es una función que recibe el resultado real.
    // .toBe(valorEsperado) compara con el valor que esperamos obtener.
    // Si el resultado es correcto → el test pasa ✅
    expect(sumar(3, 5)).toBe(8)
})

// ✅ SEGUNDO TEST: comprobación con error
// Este test está diseñado para fallar ❌ a propósito.
// Esto es útil para ver cómo Jest detecta fallos y muestra los resultados.
test("suma de 3+3 tiene que ser 8", () => {
    expect(sumar(3, 3)).toBe(8)
})

// ===============================
// 🧩 MATCHERS EN JEST
// ===============================

// 📘 toBe()
// Compara valores primitivos (números, strings, booleanos...)
// Usa === internamente.
test("toBe compara valores simples", () => {
  expect(2 + 2).toBe(4)
})

// ❌ Si comparas objetos o arrays con toBe, fallará:
test("toBe no sirve para objetos", () => {
  const obj1 = { name: "Cris" }
  const obj2 = { name: "Cris" }
  // expect(obj1).toBe(obj2)  // ❌ diferentes referencias
})

// ✅ Usa toEqual() para comparar contenido
test("toEqual compara contenido de objetos o arrays", () => {
  const obj1 = { name: "Cris" }
  const obj2 = { name: "Cris" }
  expect(obj1).toEqual(obj2)
})

// 📘 toBeTruthy() y toBeFalsy()
// Evalúan si un valor es verdadero o falso en contexto booleano
test("toBeTruthy y toBeFalsy", () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
  expect("").toBeFalsy()
})

// 📘 toBeNull() y toBeUndefined()
test("valores nulos o indefinidos", () => {
  const nulo = null
  let indefinido
  expect(nulo).toBeNull()
  expect(indefinido).toBeUndefined()
})

// 📘 toContain()
// Comprueba si un elemento está dentro de un array o string
test("toContain busca dentro de arrays o strings", () => {
  const frutas = ["manzana", "pera", "naranja"]
  expect(frutas).toContain("pera")
  expect("javascript").toContain("script")
})

// 📘 toBeGreaterThan() / toBeLessThan()
// Comparaciones numéricas
test("comparaciones numéricas", () => {
  expect(10).toBeGreaterThan(5)
  expect(3).toBeLessThan(5)
  expect(5).toBeGreaterThanOrEqual(5)
})

// 📘 toMatch()
// Compara strings con expresiones regulares (RegEx)
test("toMatch con expresiones regulares", () => {
  const mensaje = "Hola JavaScript"
  expect(mensaje).toMatch(/java/i) // i = ignore case
})

// 📘 toThrow()
// Verifica que una función lance un error
function errorFunction() {
  throw new Error("algo salió mal")
}

test("toThrow verifica errores", () => {
  expect(() => errorFunction()).toThrow()
  expect(() => errorFunction()).toThrow("algo salió mal")
})
