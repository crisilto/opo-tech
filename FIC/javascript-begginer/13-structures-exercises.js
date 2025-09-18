// 1. Crea un array que almacene cinco animales.
let animals = ["gato", "perro", "caballo", "elefante", "lobo"]

// 2. Añade dos más. Uno al principio y otro al final.
animals.unshift("conejo") // Añade al principio
animals.push("tigre") // Añade al final

// 3. Elimina el que se encuentra en tercera posición.
animals.splice(2, 1) // Elimina el elemento en el índice 2 ("perro")

// 4. Crea un set que almacene cinco libros.
let books = new Set(["Harry Potter", "El conde de Montecristo", "El resplandor", "El programador pragmático", "Código Limpio"])

// 5. Añade dos más. Uno de ellos repetido.
books.add("Carrie")
books.add("Harry Potter") // No se añade porque ya existe

// 6. Elimina uno concreto a tu elección.
books.delete("El conde de Montecristo") // Elimina el libro indicado explícitamente

// 7. Crea un mapa que asocie el número del mes a su nombre.
let months = new Map([
    [1, "Enero"], [2, "Febrero"], [3, "Marzo"], [4, "Abril"],
    [5, "Mayo"], [6, "Junio"], [7, "Julio"], [8, "Agosto"],
    [9, "Septiembre"], [10, "Octubre"], [11, "Noviembre"], [12, "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.
if (months.has(5)) {
    console.log(`El mes 5 es: ${months.get(5)}`) // El mes 5 es: Mayo
} else {
    console.log("El mes 5 no existe")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano.
let mesesVerano = [6, 7, 8] // Índices de los meses de verano
let verano = ["Junio", "Julio", "Agosto"] // Nombres de los meses de verano
months.set(mesesVerano, verano)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.
let brandsArray = ["Nike", "Adidas", "Puma"]
let brandsSet = new Set(brandsArray) // Convierte el array en un Set
let brandsMap = new Map([["brands", brandsSet]]) // Crea un Map con el Set


// MÁS EJERCICIOS

// Ejercicios de ARRAY

//Operaciones básicas:
//         Crea un array con tus tres comidas favoritas. 
let comidas = ["Pizza", "Hamburguesa", "Gnocchis"]
//             Luego:
//             Añade una comida al principio y otra al final.
comidas.unshift("Pollo frito")
comidas.push("Pantrucas")
console.log(comidas)
//             Elimina la segunda comida de la lista.
comidas.splice(1, 1)
console.log(comidas)
//             Usa .slice() para crear un nuevo array que contenga solo las dos primeras comidas.
//         Muestra el array final y su longitud.
let dosPrimeras = comidas.slice(0, 2)
console.log(dosPrimeras)

//     Búsqueda en arrays:
//         Crea un array con números del 1 al 10.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//         Usa un bucle para encontrar y mostrar los números mayores que 5.
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero > 5) {
        console.log(numero)
    }
}
//         Usa .includes() para verificar si el número 7 está en el array.
if (numeros.includes(7)) {
    console.log("El número 7 está en el array")
} else {
    console.log("El número 7 no está en el array")
}

//     Manipulación avanzada:
//         Crea un array con los nombres de cinco ciudades.
let ciudades = ["Madrid", "Valencia", "Barcelona", "Granada", "Albacete"]
//         Usa .splice() para eliminar la tercera ciudad y reemplazarla por otra.
ciudades.splice(2, 1, "Sevilla")
console.log(ciudades)
//         Usa .reverse() para invertir el orden del array.
let ciudades2 = [...ciudades]
let reversed = ciudades2.reverse() // el método reverse muta el array original por lo que hemos creado ciudades2 para que no afecte a ciudades
console.log(reversed)

//         Usa .sort() para ordenar las ciudades alfabéticamente.
let ciudades3 = [...ciudades]
let sorted = ciudades3.sort() // el método sort muta el array original por lo que hemos creado ciudades3 para que no afecte a ciudades
console.log(sorted)

// Ejercicios de Set

//     Creación y métodos básicos:
//         Crea un Set que contenga cinco colores diferentes.
let colores = new Set()
colores = new Set(["blanco", "naranja", "gris", "verde", "amarillo"])
console.log(colores)

//         Añade dos colores más, uno de ellos repetido.
colores.add("rojo") // se añade al final del Set
colores.add("blanco") // no se añade al Set ya que ya existe un elemento igual
console.log(colores)

//         Verifica si el color "rojo" existe en el Set.
let rojo = colores.has("rojo") ? "El color rojo existe" : "El color rojo no existe"
console.log(rojo)

//         Convierte el Set en un array y muestra el array resultante.
let coloresArray = Array.from(colores)
console.log(coloresArray)

//     Filtrar duplicados:
//         Crea un array con números, incluyendo algunos repetidos.
let numerosArray = [13, 18, 15, 13]
//         Convierte el array en un Set para eliminar duplicados.
let numerosSet = new Set(numerosArray)
console.log(numerosSet)
//         Convierte el Set de vuelta a un array y muestra el resultado.
numerosArray = Array.from(numerosSet)
console.log(numerosArray)

//     Operaciones avanzadas:
//         Crea dos Sets:
//             Uno con los números pares del 1 al 10.
let pares = new Set()
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        pares.add(i)
    }
}
console.log(pares)
//             Otro con los números del 5 al 15.
let numeros2 = new Set()
for (let i = 5; i <= 15; i++) {
    numeros2.add(i)
}
console.log(numeros2)

//         Encuentra la intersección entre ambos conjuntos (números comunes).
let interseccion = new Set([...pares].filter(x => numeros2.has(x)))
console.log(interseccion)

//         Encuentra la diferencia (números que están en el primer Set pero no en el segundo).
let diferencia = new Set([...pares].filter(x => !numeros2.has(x)))
console.log(diferencia)

// Crea dos Sets:

//     Uno con las letras de la palabra "javascript".
let js = new Set("javascript")

//     Otro con las letras de la palabra "typescript".
let ts = new Set("typescript")

// Encuentra:

//     Intersección: Las letras que están en ambas palabras.
let inter = new Set([...js].filter((x) => ts.has(x)))

//     Diferencia: Las letras que están en "javascript" pero no en "typescript".
let dif = new Set([...js].filter((x) => !ts.has(x)))

// Muestra los resultados como un Set y como un Array.
console.log(inter)
console.log(dif)

let interArr = Array.from(inter)
let difArr = Array.from(dif)
console.log(interArr)
console.log(difArr)

// Ejercicios de Map

//     Asociaciones básicas:
//         Crea un Map que relacione nombres de países con sus capitales (por ejemplo, España -> Madrid).
let myMap = new Map([
    ["España", "Madrid"],
    ["Francia", "Paris"],
    ["Inglaterra", "Londres"],
])
//         Añade dos pares más al Map.
myMap.set("Italia", "Roma")
myMap.set("Alemania", "Berlin")
console.log(myMap)
//         Cambia la capital de uno de los países.
myMap.set("España", "Valencia")
console.log(myMap)
//         Verifica si un país específico existe en el Map.
let italiaExiste = myMap.has("Italia") ? "Italia existe" : "Italia no existe"
console.log(italiaExiste)
//         Usa .get() para mostrar la capital de uno de los países.
let capitalEspaña = myMap.get("España")
console.log(capitalEspaña)

//     Agrupación:
//         Crea un Map donde las claves sean géneros musicales (por ejemplo, "rock", "pop") y los valores sean arrays con tres artistas de cada género.
let myMap2 = new Map([
    ["rock", ["Axl Rose", "Kurt Cobain", "Chester Bennington"]],
    ["pop", ["Bruno Mars", "Marc Antoine", "Taylor Swift"]],
    ["jazz", ["George Harrison", "John Coltrane", "Johnny Cash"]]
])
console.log(myMap2)
//         Añade un nuevo artista a uno de los géneros.
let rockArtists = myMap2.get("rock")
rockArtists.push("Bon Jovi")
myMap2.set("rock", rockArtists)
console.log(myMap2)
//         Muestra todos los géneros con sus artistas.
console.log(myMap2.entries()) // imprime un iterador, no tan fácil de leer
for (let [genre, artists] of myMap2) {
    console.log(`${genre}: ${artists.join(", ")}`)
} // bucle forof para un resultado más limpio

//     Claves no estándar:
//         Crea un Map donde las claves sean objetos que representen libros ({ title: "El Principito", author: "Antoine de Saint-Exupéry" }) 
//         y los valores sean el año de publicación.
let booksMap = new Map()
let book1 = { title: "El Principito", author: "Antoine de Saint-Exupéry" }
let book2 = { title: "1984", author: "George Orwell" }
let book3 = { title: "Cien años de soledad", author: "Gabriel García Márquez" }

booksMap.set(book1, 1943)
booksMap.set(book2, 1949)
booksMap.set(book3, 1967)

console.log(`Mapa de libros: ${booksMap}`)

//         Verifica si un libro específico existe en el Map.
let myBook = { title: "El Principito", author: "Antoine de Saint-Exupéry" }
let bookExists = false
for (let [book] of booksMap) {
    if (book.title === myBook.title && book.author === myBook.author) {
        bookExists = true
        break
    }
}
console.log(`El libro ${myBook.title} por ${myBook.author} ${bookExists ? "existe" : "no existe"} en el inventario`)

//         Usa .forEach() para mostrar el título y el año de publicación de todos los libros.
booksMap.forEach((year, book) => {
    console.log(`Título: ${book.title}, Año: ${year}`)
})

// Ejercicios combinados

//     Gestión de inventarios:
//         Usa un Map para asociar nombres de productos (claves) con sus precios (valores).
let productos = new Map([
    ["monitor", 199.99],
    ["teclado", 99.99],
    ["mouse", 59.99],
]);
console.log(productos)
//         Convierte las claves del Map en un Set para obtener un listado único de productos.
let productosSet = new Set(productos.keys())
console.log(productosSet)
//         Usa un array para guardar las cantidades vendidas de cada producto.
let ventas = [
    ["monitor", 2],
    ["teclado", 1],
    ["mouse", 3],
]
console.log(ventas)
//         Calcula el total de ventas multiplicando las cantidades por los precios.
let totalVentas = ventas.reduce((total, [product, quantity]) => total + productos.get(product) * quantity, 0)
console.log(`Total de ventas: ${totalVentas.toFixed(2)}€`)
//     Análisis de datos:
//         Crea un array con nombres de estudiantes, algunos de ellos repetidos.
//         Convierte el array en un Set para eliminar duplicados.
//         Usa un Map para asociar cada estudiante con su calificación (por ejemplo, 85).
//         Calcula la calificación promedio.
const students = ['Alice', 'Bob', 'Charlie', 'Alice', 'David', 'Bob']
const uniqueStudents = [...new Set(students)]

function randomNumber() {
    const min = 1
    const max = 100
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const grades = new Map()
uniqueStudents.forEach(student => {
    let randomGrade = randomNumber()
    grades.set(student, randomGrade)
})

let total = 0
grades.forEach(grade => {
    total += grade
})

const average = total / grades.size

console.log("Students: ", uniqueStudents)
console.log("Grades: ", [...grades.entries()])
console.log("Average grade: ", average)

//     Calendario:
//         Crea un Map que asocie números de meses (1-12) con sus nombres.
//         Usa un array para representar los días de la semana (["Lunes", "Martes", ..., "Domingo"]).
//         Usa .get() para mostrar el nombre de un mes específico.
//         Añade al Map una clave para estaciones del año con un array de meses correspondientes (por ejemplo, "verano" -> [6, 7, 8]).
const monthsNames = new Map([
    [1, "Enero"], [2, "Febrero"], [3, "Marzo"], [4, "Abril"],
    [5, "Mayo"], [6, "Junio"], [7, "Julio"], [8, "Agosto"],
    [9, "Septiembre"], [10, "Octubre"], [11, "Noviembre"], [12, "Diciembre"]
])

const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

const selectedMonthNumber = 11
const selectedMonthName = monthsNames.get(selectedMonthNumber)
console.log(`month ${selectedMonthNumber}: ${selectedMonthName}`)

monthsNames.set("spring", [3, 4, 5])
monthsNames.set("summer", [6, 7, 8])
monthsNames.set("fall", [9, 10, 11])
monthsNames.set("winter", [12, 1, 2])

const summerMonths = monthsNames.get("summer")
console.log(`summer months: ${summerMonths.map(m => monthsNames.get(m))}`)

// Desafíos adicionales

//     Historial de visitas:
//         Crea un array con las URLs de las páginas visitadas (algunas repetidas).
//         Usa un Set para eliminar duplicados.
//         Usa un Map para asociar cada URL con la cantidad de veces que fue visitada.


//     Encuesta:
//         Crea un Map para almacenar opciones de una encuesta (claves) y el número de votos que cada opción ha recibido (valores).
//         Simula votos agregando valores al Map.
//         Encuentra la opción con más votos.

//     Cálculo de intersecciones:
//         Crea dos Sets con datos de usuarios únicos en dos aplicaciones diferentes.
//         Encuentra los usuarios comunes (intersección).
//         Encuentra los usuarios exclusivos de una aplicación (diferencia).