// ARRAY - EJERCICIOS

// 1. Crea un array vacío llamado `frutas` y agrega tres frutas usando push.
let frutas = []
frutas.push("banana", "manzana", "fresas")
console.log(frutas)

// 2. Crea un array llamado `numeros` con los números del 1 al 5. Luego elimina el último número y guarda el valor eliminado en una variable.
let numeros = [1, 2, 3, 4, 5]
console.log(numeros)
let ultimoNum = numeros.pop()
console.log(numeros)
console.log(ultimoNum)

// 3. Crea un array llamado `colores` con al menos cuatro colores. Elimina el primer color y muestra cuál fue eliminado por consola.
let colores = ["negro", "blanco", "rojo", "amarillo"]
console.log(colores)
let primerColor = colores.shift()
console.log(colores)
console.log(primerColor)

// 4. Agrega dos colores nuevos al principio del array anterior usando unshift.
colores.unshift("rosa", "azul")
console.log(colores)

// 5. Crea un array con tus tres canciones favoritas y muestra cuántas canciones hay en total usando length.
let canciones = ["Up from the bottom", "Good things go", "Waiting for the end"]
console.log(canciones)
console.log(canciones.length)

// 6. Vacía por completo un array llamado `tareas` de la forma más elegante posible.
let tareas = ["estudiar", "gym", "comer"]
console.log(tareas)
tareas = []
console.log(tareas)
//menos elegante: tareas.length = 0

// 7. Crea un array llamado `miembros` con 5 nombres. Luego crea un nuevo array con solo los elementos del índice 1 al 3 usando slice.
let miembros = ["emily", "mike", "hahn", "colin", "dave"]
let menosMiembros = miembros.slice(1, 4)
console.log(menosMiembros)

// 8. A partir de un array llamado `libros`, elimina dos libros a partir del índice 2 usando splice.
let libros = ["harry potter 1", "harry potter 2", "harry potter 3", "harry potter 4", "harry potter 5"]
let menosLibros = libros.splice(2, 2)
console.log(menosLibros)

// 9. Reemplaza dos elementos del array `libros` anteriores por los títulos "Nuevo libro 1" y "Nuevo libro 2" usando splice.
// libros.splice(0, 1, "nuevo libro 1")
// libros.splice(1, 1, "nuevo libro 2")
libros.splice(0, 2, "nuevo libro1", "nuevo libro2")
console.log(libros)

// 10. Declara un array vacío llamado `mixto` y asigna valores en las posiciones 0, 2 y 4 de forma manual.
let mixto = []
mixto[0] = "Valor 1 en posición 0"
mixto[2] = "Valor 2 en posición 2"
mixto[4] = "Valor 3 en posición 4"
console.log(mixto)

// 11. Crea un array con diferentes tipos de datos: string, number, boolean, null y undefined.
let diferentesDatos = [
    "fay",
    26,
    true,
    null,
    undefined
]
console.log(diferentesDatos)

// 12. Crea un array con tu nombre y apellido usando `new Array()`, luego accede al segundo elemento y muéstralo por consola.
let yo = new Array(2)
yo[0] = "cristina"
yo[1] = "silvestre"
console.log(yo[1])

// 13. Crea un array con los días de la semana. Usa slice para obtener un nuevo array con los días del fin de semana.
let semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
let finde = semana.slice(4, 7)
console.log(finde)

// 14. Declara un array `alumnos` y elimina el último y el primer elemento. Luego agrega un nuevo alumno al principio y otro al final.
let alumnos = ["fay", "lidia", "cris"]
alumnos.shift()
alumnos.pop()
console.log(alumnos)
alumnos.unshift("lilith")
alumnos.push("kenneth")
console.log(alumnos)

// 15. Muestra por consola cada uno de los elementos de un array llamado `animales` utilizando `console.log(animales[i])` dentro de un bucle `for`.
let animales = ["perro", "gato", "loro", "lobo"]
for (let i = 0; i < animales.length; i++) {
    console.log(animales[i])
}