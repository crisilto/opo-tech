//estructuras avanzadas

//arrays avanzados

//MÉTODOS FUNCIONALES

//forEach
//recorre cada elemento de un array y ejecuta una función, no devuelve nada, solo actúa
let numbers = [1, 2, 3, 4, 5]
numbers.forEach(element => console.log(element))
//uso práctico:
//mostrar datos en pantalla, enviar logs, actualizar el DOM o aplicar efectos secundarios
//ejemplo:
//mostrar productos en consola o renderizarlos en HTML

//map
//recorre cada elemento de un array, devuelve un nuevo array con la transformación aplicada
let doubled = numbers.map(element => element * 2)
console.log(doubled)
//uso práctico:
//transformar datos
//ejemplo:
//en una lista de objetos {nombre, precio}, crear un nuevo array solo con los precios con IVA incluido

//filter
//devuelve un nuevo array solo con los elementos que cumplan una condición (los filtra)
let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)
//uso práctico:
//buscar elementos que cumplan algo
//ejemplo:
//filtrar usuarios mayores de 18 años, productos en stock o mensajes no leídos

//reduce
//reduce (acumula) todos los elementos en un solo valor (numero, objeto, string...)
let sum = numbers.reduce((previous, current) => previous + current, 0)
console.log(sum)
//uso práctico:
//calcular totales, agrupar datos, convertir arrays en objetos
//ejemplo:
//sumar todos los precios de un carrito de compra o contar cuántas veces aparece cada palabra en un texto


//EJEMPLO
let cart = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 },
    { name: "Headphones", price: 150, quantity: 0 }
]

// 1. forEach → mostrar productos
cart.forEach(item => {
    console.log(`${item.name} - ${item.quantity} units`)
})

// 2. map → calcular el precio total de cada producto
let totals = cart.map(item => ({
    name: item.name,
    total: item.price * item.quantity
}))
console.log(totals)

// 3. filter → obtener solo los productos en stock
let available = cart.filter(item => item.quantity > 0)
console.log(available)

// 4. reduce → calcular el precio final del carrito
let finalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
console.log(`Total: $${finalPrice}`)


//MANIPULACIÓN

//flat
//sirve para aplanar arrays anidados en un único array hasta determinada profundidad 
let nestedArray = [1, [2, [3, [4]]]]
let flatArrat = nestedArray.flat(nestedArray.length + 1)
console.log(flatArrat)
//uso práctico:
//quitar niveles innecesarios de arrays cuando importas datos de una API
//unir listas en una sola...
//ejemplo:
//imagina que una API devuelve las categorías de grupos agrupadas en subarrays:
let categories = [["tech", "gadgets"], ["fashion"], ["home", ["kitchen"]]]
console.log(categories.flat(2))  // ["tech", "gadgets", "fashion", "home", "kitchen"]

//flatMap
//combinación de map + flat(1)
//aplica una transformación a cada elemento y aplana automáticamente un nivel de profundidad
let phrases = ["hello world", "goodbye world"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)
//uso práctico:
//dividir textos en palabras, párrafos en frases, etc
//procesar datos que están juntos en un string o array y necesitas separarlos
//ejemplo:
//extraer todos los hashtags de varios posts
let posts = [
    "Loving the sun #summer #vacation",
    "Back to work #monday #coffee"
]

let hashtags = posts.flatMap(post => post.match(/#\w+/g))
console.log(hashtags) // ["#summer", "#vacation", "#monday", "#coffee"]

//EJEMPLO
cart = [
    { name: "Laptop", price: 1000, quantity: 1, categories: ["tech", ["computers"]] },
    { name: "Mouse", price: 25, quantity: 2, categories: ["tech", ["accessories"]] },
    { name: "T-shirt", price: 20, quantity: 3, categories: ["fashion", ["clothes"]] }
]

// 1. flat → aplanar las categorías de cada producto
let allCategories = cart.map(item => item.categories.flat(2))
console.log(allCategories)
// [["tech", "computers"], ["tech", "accessories"], ["fashion", "clothes"]]

// 2. flat + map → obtener todas las categorías en un solo array
let mergedCategories = cart.map(item => item.categories).flat(2)
console.log(mergedCategories)
// ["tech", "computers", "tech", "accessories", "fashion", "clothes"]

// 3. flatMap → lo mismo que arriba, pero en un solo paso
let mergedCategories2 = cart.flatMap(item => item.categories.flat(2))
console.log(mergedCategories2)
// ["tech", "computers", "tech", "accessories", "fashion", "clothes"]

// 4. flatMap práctico → generar lista de etiquetas con nombre + categoría
let productTags = cart.flatMap(item =>
    item.categories.flat(2).map(cat => `${item.name}-${cat}`)
)
console.log(productTags) // ["Laptop-tech", "Laptop-computers", "Mouse-tech", "Mouse-accessories", "T-shirt-fashion", "T-shirt-clothes"]


//ORDENACIÓN

//sort
//ordena los elementos de un array
//por defecto, convierte todo a strings y ordena alfabéticamente
let unsorted = ["a", "d", "c", "b"]
let sorted = unsorted.sort()
console.log(sorted)
//para números o criterios personalizados, se pasa una función comparadora
unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)
console.log(sorted)
//uso práctico:
//ordenar listas de usuarios por nombre, edad o puntuación
//ordenar productos por precio, valoración o fecha de lanzamiento
//ejemplo:
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
]
products.sort((a, b) => a.price - b.price)
console.log(products) // Ordenado de menor a mayor precio

//reverse
//invierte el orden del array
//muta el array, no lo clona
sorted.reverse()
console.log(sorted)
//uso práctico:
//mostrar los últimos posts primero
//mostrar los productos más caros primero en un e-commerce
//invertir listas de historial de actividad o mensajes

//EJEMPLO
cart = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 },
    { name: "Headphones", price: 150, quantity: 3 }
]

// 1. Ordenar por precio ascendente
let sortedByPrice = [...cart].sort((a, b) => a.price - b.price)
console.log("Price ascending:", sortedByPrice)

// 2. Ordenar por precio descendente
let sortedByPriceDesc = [...cart].sort((a, b) => b.price - a.price)
console.log("Price descending:", sortedByPriceDesc)

// 3. Ordenar alfabéticamente por nombre
let sortedByName = [...cart].sort((a, b) => a.name.localeCompare(b.name))
console.log("Name ascending:", sortedByName)

// 4. Invertir cualquier orden
let reversedCart = [...sortedByName].reverse()
console.log("Name descending:", reversedCart)


//BÚSQUEDA

//includes
//comprueba si un valor existe dentro del array
//devuelve true or false
console.log(sorted.includes(4))
console.log(sorted.includes(5))
//verificar si un usuario tiene cierto rol
//saber si un producto ya está en el carrito
//comprobar si una palabra existe en una lista de palabras prohibidas
//sjsmplo:
let roles = ["admin", "editor", "user"]
console.log(roles.includes("admin")) // true

//find
//devuelve el primer elemento que cumpla la condición
//si no encuentra dvuelve undefined,
let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)
roles = ["admin", "editor", "user"]
console.log(roles.includes("admin")) // true
//uso práctico:
//encontrar el primer producto en stock
//buscar un usuario por ID

//findIndex
//devuelve el índice del primer elemento que cumpla la condición. (Si n, .l)
let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)
//uso práctico:
//Saber la posición de un producto en el carrito para actualizar su cantidad.

//Buscar dónde está un usuario en una lista.

//Localizar un error en un array de logs.
products = ["Laptop", "Mouse", "Keyboard"]
let index = products.findIndex(p => p === "Mouse")
console.log(index) // 1

//Ejemplo
cart = [
    { id: 1, name: "Laptop", price: 1000, quantity: 1 },
    { id: 2, name: "Mouse", price: 25, quantity: 2 },
    { id: 3, name: "Keyboard", price: 75, quantity: 0 },
    { id: 4, name: "Headphones", price: 150, quantity: 1 }
]

// 1. includes → comprobar si un producto está en la lista de IDs del carrito
let productIds = cart.map(item => item.id)
console.log(productIds.includes(2)) // true → el mouse está en el carrito
console.log(productIds.includes(5)) // false → no existe un producto con ID 5

// 2. find → buscar el primer producto que esté en stock
let firstAvailable = cart.find(item => item.quantity > 0)
console.log(firstAvailable)
// { id: 1, name: "Laptop", price: 1000, quantity: 1 }

// 3. findIndex → obtener el índice de un producto para actualizarlo
let keyboardIndex = cart.findIndex(item => item.name === "Keyboard")
console.log(keyboardIndex) // 2 → posición en el array


//SETS AVANZADOS
//como un array pero que no permite duplicados, sus valores son únicos

//operaciones

//eliminación de duplicados
let numbersArray = [1, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray)
//uso real:
//limpiar listas de IDs repetidos, etiquetas duplicadas en posts...

//unión
const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union)
//uso real:
//unir dos listas de usuarios sin repetir IDs

//intersección
const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)
//uso real:
//saber qué usuarios están en dos grupos a la vez

//diferencia
const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)
//uso real:
//saber qué elementos están en un grupo y no en otro (usuarios que compraron un producto A pero no el B)

//conversión
let arrayA = [...setA]
console.log(arrayA)
//uso real:
//convertir Set->Array para usar métodos como .map o .filter

//iteración
setA.forEach(element => console.log(element))
//uso real:
//recorrer los elementos únicos y mostrarlos

//MAPS AVANZADOS
//es como un objeto pero con ventajas:
//-cualquier tipo puede ser clave (no solo strings)
//-mantiene el orden de inserción
//-tiene métodos más potentes (set, get, has, delete)

//creación
let myMap = new Map([
    ["name", "fay"],
    ["age", 26]
])
console.log(myMap)
//uso real:
//guardar datos clave-valor dinámicos (configuración de usuario)

//iteración
myMap.forEach((value, key) => console.log(`${key}: ${value}`))
//uso real:
//recorrer configuraciones, pares clave-valor en un diccionario

//conversión
const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)
//pasar map->array para procesar con métodos funcionales

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)
//pasar map->object para enviarlo como JSON a una API

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)
//pasar object->map para usar sus ventajas (orden, claves complejas)

// ---------------------------
// BASE DE DATOS SIMULADA
// ---------------------------

// Usuarios que visitaron la tienda (con duplicados)
let visitors = ["cris", "fay", "cris", "alex", "cris", "fay"]

// Productos del carrito con info más detallada
let myCart = [
    { id: 1, name: "Laptop", price: 1000, quantity: 1 },
    { id: 2, name: "Mouse", price: 25, quantity: 2 },
    { id: 3, name: "Keyboard", price: 75, quantity: 1 }
]

// ---------------------------
// USO DE SET
// ---------------------------

// 1. Eliminar duplicados de visitantes
let uniqueVisitors = [...new Set(visitors)]
console.log("Unique visitors:", uniqueVisitors)
// ["cris", "fay", "alex"]

// 2. Comparar listas: usuarios que visitaron la tienda vs los que compraron
let buyers = new Set(["cris", "alex"])
let myIntersection = new Set(uniqueVisitors.filter(v => buyers.has(v)))
console.log("Visitors that bought:", myIntersection)
// {"cris", "alex"}

// ---------------------------
// USO DE MAP
// ---------------------------

// 1. Guardar la info del carrito en un Map (clave = id del producto)
let cartMap = new Map()
myCart.forEach(item => cartMap.set(item.id, item))
console.log(cartMap)

// 2. Acceder rápido a un producto (como si fuera una mini BD en memoria)
let laptop = cartMap.get(1)
console.log("Laptop:", laptop)
// { id: 1, name: "Laptop", price: 1000, quantity: 1 }

// 3. Calcular total del carrito con iteración del Map
let total = 0
cartMap.forEach(item => {
    total += item.price * item.quantity
})
console.log("Cart total:", total)
// 1150

// 4. Conversión Map → Object (para enviar a una API en JSON)
let cartObject = Object.fromEntries(
    [...cartMap].map(([key, item]) => [key, { name: item.name, total: item.price * item.quantity }])
)
console.log(cartObject)
/*
{
  "1": { name: "Laptop", total: 1000 },
  "2": { name: "Mouse", total: 50 },
  "3": { name: "Keyboard", total: 75 }
}
*/