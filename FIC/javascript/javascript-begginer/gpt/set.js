// SET - EJERCICIOS

// 1. Crea un Set vacío llamado `miSetFavorito` y muéstralo por consola.
let miSetFavorito = new Set()
console.log(miSetFavorito)

// 2. Inicializa un Set con tres valores diferentes: tu nombre, un número y un booleano.
let setValores = new Set(["cristina", 13, false])
console.log(setValores)

// 3. Agrega dos elementos nuevos al Set anterior usando `.add()`.
setValores.add("https://crisilto.dev")
setValores.add(14)
console.log(setValores)

// 4. Intenta agregar un elemento que ya existe en el Set. ¿Qué ocurre?
setValores.add(13) //no se añade puesto que ya existe y los elementos tienen que ser únicos en un set

// 5. Elimina un elemento del Set usando `.delete()` y muestra el Set resultante.
setValores.delete("cristina")
console.log(setValores)

// 6. Intenta eliminar un elemento que no exista. ¿Qué valor devuelve el método `.delete()`?
console.log(setValores.delete(15)) //devuelve false y en el set no ocurre nada

// 7. Crea una condición `if` que verifique si un elemento ha sido eliminado con éxito.
setValores.delete(14) ? console.log("valor 14 eliminado") : console.log("valor 14 no eliminado(no existe)")
setValores.delete(11) ? console.log("valor 11 eliminado") : console.log("valor 11 no eliminado(no existe)")

// 8. Usa `.has()` para comprobar si un elemento específico está dentro del Set.
console.log(setValores.has(10)) //devuelve false porque no está el 10 en el set
console.log(setValores.has(13)) //devuelve true porque está el 13 en el set

// 9. Muestra por consola cuántos elementos tiene un Set usando `.size`.
console.log(setValores)
console.log(setValores.size)

// 10. Convierte el Set en un array y guarda el resultado en una nueva variable.
let arrayValores = Array.from(setValores)
console.log(arrayValores)

// 11. Convierte un array con valores duplicados a un Set y muestra cuántos elementos únicos quedan.
arrayValores.push(13)
arrayValores.push(false)
console.log(arrayValores)
let setDuplicados = new Set(arrayValores)
console.log(setDuplicados.size) //sigue teniendo 3 valores porque los nuevos del array son duplicados y un set solo tiene elementos unicos

// 12. Explica por qué un Set no necesita índices para acceder a sus elementos (comentario).
//porque sus elementos son unicos entonces no sirve diferenciar por indice cuando puedes directamente llamar al valor

// 13. Agrega dos cadenas similares al Set, una en mayúsculas y otra en minúsculas, y observa qué ocurre.
setDuplicados.add("cristina")
setDuplicados.add("CRISTINA")
console.log(setDuplicados) //añade ambos valores porque existe case-sensitive, aunque el string sea el mismo, los toma por distintos 

// 14. Crea un Set con valores mezclados (número, string, boolean) y conviértelo a array para imprimirlo.
let setMezclados = new Set([13, "fay", true])
console.log(setMezclados)
let arrayMezclados = Array.from(setMezclados)
console.log(arrayMezclados)

// 15. Usa un Set para eliminar los duplicados de este array:
let duplicados = ["manzana", "pera", "manzana", "naranja", "pera", "uva"];
//     (Convierte el array a Set y luego de nuevo a array)
let eliminaDuplicados = new Set(duplicados)
console.log(eliminaDuplicados)
let arraySinDuplicados = Array.from(eliminaDuplicados)
console.log(arraySinDuplicados)

// 16. Recorre un Set con un bucle `for...of` y muestra cada elemento por consola.
let setFrutas = new Set(eliminaDuplicados)
for (const fruta of setFrutas) {
    console.log(fruta)
}

// 17. Compara un Set con un Array que contiene los mismos elementos. ¿Son iguales? ¿Por qué?
let arrayFrutas = ["manzana", "pera", "naranja"]
setFrutas = new Set(["manzana", "pera", "naranja"])
// Comparación directa
console.log(arrayFrutas == setFrutas)   // false
console.log(arrayFrutas === setFrutas)  // false
// ¿Por qué no son iguales?
// Aunque ambos contienen los mismos valores, son estructuras de datos diferentes:
// - arrayFrutas es un Array
// - setFrutas es un Set
// En JavaScript, los objetos (como arrays y sets) se comparan por referencia y tipo, no por contenido
console.log(typeof arrayFrutas)  // object
console.log(typeof setFrutas)    // object
console.log(arrayFrutas instanceof Array) // true
console.log(setFrutas instanceof Set)     // true
// Para comparar su contenido, habría que convertir el Set a un Array y compararlos elemento a elemento
let setFrutasArray = Array.from(setFrutas)
const sonIguales = (a, b) => {
    return (
        Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every(valor => b.includes(valor))
    )
}
console.log(sonIguales(arrayFrutas, setFrutasArray)) // true, ahora sí son equivalentes en contenido

// 18. Crea una función que reciba un array y devuelva un nuevo array sin duplicados, usando Set.
function eliminarDuplicados(arr) {
    return [...new Set(arr)]
}
let numerosRepetidos = [1, 1, 4, 2, 1, 3, 2]
let numerosSinRepetidos = eliminarDuplicados(numerosRepetidos)
console.log(numerosSinRepetidos)