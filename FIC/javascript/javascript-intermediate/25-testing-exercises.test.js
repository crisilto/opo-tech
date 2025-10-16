// 2. Escribe una prueba en Jest para verificar que la función funciona correctamente
const isEven = require("./24-testing-exercises")
test("isEven devuelve true para números pares", ()=>{
    expect(isEven(2)).toBe(true)
    expect(isEven(4)).toBe(true)
    expect(isEven(100)).toBe(true)
    expect(isEven(0)).toBe(true)
})
test("isEven devuelve false para números impares", ()=>{
    expect(isEven(1)).toBe(false)
    expect(isEven(3)).toBe(false)
    expect(isEven(99)).toBe(false)
    expect(isEven(-5)).toBe(false)
})
// 3. Verifica que la prueba se ejecuta satisfactoriamente