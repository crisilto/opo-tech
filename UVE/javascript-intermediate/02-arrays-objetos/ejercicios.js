// ===============================================
// EJERCICIOS: MANIPULACIÓN AVANZADA DE ARRAYS Y OBJETOS
// ===============================================

// 🧩 1. Usa .map() para transformar un array de números a sus cuadrados.
const numbers = [2, 5, 100]
console.log(numbers.map(n => Math.pow(n, 2)))

// 🧩 2. Usa .filter() para quedarte solo con los nombres que tengan más de 4 letras.
const names = ["name1", "n2", "name3", "n"]
console.log(names.filter(name => name.length > 4))

// 🧩 3. Usa .reduce() para sumar todos los elementos de un array de precios.
const prices = [20, -30, 10, 20]
console.log(prices.reduce((acc, val) => acc + val, 0))

// 🧩 4. Usa .reduceRight() para concatenar los strings de un array al revés.
const strings = ["a", "b", "c", "d", "e", "f", "u"]
console.log(strings.reduceRight((acc, val) => acc + " " + val))

// 🧩 5. Usa .find() para encontrar el primer número par en un array.
console.log(numbers.find(n => n % 2 == 0))

// 🧩 6. Usa .findIndex() para encontrar el índice del primer número mayor a 50.
console.log(numbers.findIndex(n => n > 50))

// 🧩 7. Usa .some() para verificar si al menos un número es negativo en un array.
console.log(prices.some(n => n < 0))

// 🧩 8. Usa .every() para verificar si todos los elementos son mayores a 18.
console.log(prices.every(n => n > 18))

// 🧩 9. Usa .flat() para aplanar un array de arrays con 1 nivel de profundidad.
const arrOfArr = [30, [10, 10], 10]
console.log(arrOfArr.flat())

// 🧩 10. Usa .flatMap() para transformar un array de frases en un array de todas las palabras separadas.
const songs = ["up from the bottom", "good things go"]
console.log(songs.flatMap(song => song.split(" ")))

// 🧩 11. Usa .sort() para ordenar un array de objetos por la propiedad "edad" (de menor a mayor).
const objects = [
    { name: "cris", age: 27 },
    { name: "lilith", age: 4 },
    { name: "lidia", age: 27 },
    { name: "fay", age: 26 },
]
console.log([...objects].sort((a, b) => a.age - b.age))

// 🧩 12. Usa .reverse() para invertir un array de letras.
console.log(strings.reverse())

// 🧩 13. Usa .split() para convertir una frase en palabras. Luego, con .join(), vuelve a unirlas con guiones.
const sentence = "am i forgiven mother"
const words = sentence.split(" ")
console.log(words)
const togetherAgain = words.join(" ")
console.log(togetherAgain)

// 🧩 14. Usa Object.entries() para recorrer las propiedades de un objeto y mostrar "clave: valor" por consola.
const cat = { name: "lilith", age: 4, meow: true }
console.log(Object.entries(cat))

// 🧩 15. Usa Object.keys() y Object.values() para imprimir por separado las claves y los valores de un objeto.
console.log(`keys: ${Object.keys(cat)}, values: ${Object.values(cat)}`)

// 🧩 16. Usa el operador spread (...) para fusionar dos arrays y dos objetos distintos.
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const obj1 = { name: "object 1" }
const obj2 = { name: "object 2" }
console.log([...arr1, ...arr2, { ...obj1 }, { ...obj2 }])

// 🧩 17. Crea una función que use el operador rest (...) para recibir cualquier cantidad de argumentos y devolver la media.
// function average(...args) {
//     let total = 0
//     args.forEach(arg => {
//         total += arg
//     });
//     return total / args.length
// }
// console.log(average(13, 12, 10))
function average(...args) {
    const total = args.reduce((acc, val) => acc + val, 0)
    return total / args.length
}

// 🧩 18. Usa destructuring para extraer el segundo valor de un array sin guardar los otros.
const colors = ["violet", "blue", "pink"]
const [, second] = colors
console.log(second)

// 🧩 19. Usa destructuring profundo para extraer la propiedad "ciudad" de un objeto anidado en "usuario.direccion.ciudad".
const user = {
    name: "Cris",
    address: {
        street: "Calle Falsa 123",
        city: "Madrid",
        cp: 28000
    }
}
const { address: { city } } = user
console.log(city)

// 🧩 20. BONUS: combina destructuring + spread:
//    - extrae una propiedad concreta de un objeto
//    - guarda el resto de propiedades en otro objeto usando ...rest
const person = {
    name: "Ana",
    age: 30,
    profesion: "developer",
    country: "Spain"
}
const { profesion, ...rest } = person
console.log(profesion)
console.log(rest)