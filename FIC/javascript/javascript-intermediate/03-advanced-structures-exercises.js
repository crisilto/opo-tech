// 1. Utiliza map, filter y reduce para crear un ejemplo
const numbers = [13, 5, 6, 21, 10]
numbers.map(element => console.log(element)) //iterar el array
let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)
let sum = numbers.reduce((previous, current) => previous + current, 0)
console.log(sum)

const words = ["apple", "banana", "kiwi"]
//map-> transformar cadenas a mayúsculas
const uppercasedWords = words.map(word => word.toUpperCase())
console.log(uppercasedWords)
//map-> calcular longitudes de cada palabra
const lengthsWords = words.map(word => word.length)
console.log(lengthsWords)

const names = ["Alice", "Bob", "Amanda", "Charlie", "Ana"]
//filter-> filtrar nombres que empiezan por "A"
const aNames = names.filter(name => name.startsWith("A"))
console.log(aNames)
//filter-> filtrar nombres con más de 4 letras
const longNames = names.filter(name => name.length > 4)
console.log(longNames)

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]
//reduce-> contar cuántas veces aparece cada fruta
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc
}, {})
console.log(fruitCount)

// MAP lo usamos para transformar elementos (texto, números, objetos).
// FILTER lo usamos para seleccionar elementos que cumplen una condición.
// REDUCE lo usamos para acumular o transformar un array en un único valor u objeto.

//entender REDUCE:

//sintaxis:

// array.reduce((acumulador, elementoActual) => {
//      lógica
//   return nuevoAcumulador
// }, valorInicial)

// acumulador → el valor que se va "guardando" y se pasa de vuelta en cada iteración.
// elementoActual → cada item del array en orden.
// valorInicial → el valor de partida para el acumulador. (Ej: 0 si estás sumando, {} si estás creando un objeto, [] si quieres armar un array).

//sumar números
const numbersReduce = [2, 4, 6]
const totalNumbersReduce = numbersReduce.reduce((acc, num) => {
    return acc + num
}, 0)
console.log(totalNumbersReduce)

//concatenar strings
const wordsReduce = ["I", "like", "fay"]
const sentenceReduce = wordsReduce.reduce((acc, word) => {
    return acc + " " + word
}) //se podria poner , "", e imprimiria primero un string vacío ( I like fay)
console.log(sentenceReduce)

//contar elementos
const fruitsReduce = ["apple", "banana", "apple", "orange", "banana", "apple"]
const myFruitCount = fruitsReduce.reduce((acc, fruit) => {
    if (!acc[fruit]) {
        acc[fruit] = 1
    } else {
        acc[fruit]++
    }
    return acc
}, {})
console.log(myFruitCount)

// Piensa en reduce como una mochila (acc) que llevas recorriendo el array.
// En cada paso decides:
// qué meter en la mochila,
// qué transformar,
// qué acumular.


// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo 
// y filtra solo los números pares
const square = numbers.map(num => num * num)
console.log(square)
const squareEvens = square.filter(num => num % 2 === 0)
console.log(squareEvens)

// 3. Utiliza flat y flatMap para crear un ejemplo

// 4. Ordena un array de números de mayor a menor

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

// 6. Itera los resultados del ejercicio anterior

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) 
// e itera los datos

// 8. Dado el mapa anterior, crea un array con los nombres

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios
//  mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa 
// con clave el email de cada usuario y como valor todos los datos del usuario