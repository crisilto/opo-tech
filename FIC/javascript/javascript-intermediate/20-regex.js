// REGULAR EXPRESSIONS (Expresiones Regulares)
// ------------------------------------------------------------
// Las expresiones regulares son patrones que sirven para buscar,
// validar o extraer partes de un texto. En JavaScript se crean
// con la sintaxis /patrón/ o con el constructor RegExp("patrón").

// 1️⃣ Creación de expresiones regulares
// -------------------------------------

// Forma literal:
const regex = /abc/

// Forma con el constructor:
const regex2 = RegExp("abc")

// Ambas buscan la secuencia exacta de caracteres "abc" dentro de un texto


// 2️⃣ Método test()
// -------------------------------------
// .test(string) devuelve true si el patrón se encuentra en el texto, y false si no.
const text = "hi abc javascript"

console.log(regex.test(text))   // true -> "abc" está dentro del texto
console.log(regex2.test(text))  // true -> mismo resultado


// 3️⃣ Clases de caracteres y rangos
// -------------------------------------
// Las clases de caracteres permiten definir qué tipos de caracteres
// queremos buscar. Se encierran entre corchetes [].

// Ejemplo de texto con números:
const text2 = "my age is 27"

// \d  → coincide con cualquier dígito del 0 al 9
const regex3 = /\d/
console.log(regex3.test(text2))  // true -> encuentra "2" o "7"

// [0-1] → coincide solo con los números 0 o 1
const regex4 = /[0-1]/
console.log(regex4.test(text2))  // false -> "27" no contiene 0 ni 1

// [8-9] → coincide solo con los números 8 o 9
const regex5 = /[8-9]/
console.log(regex5.test(text2))  // false -> "27" tampoco contiene 8 ni 9


// ✅ RESUMEN RÁPIDO
// ------------------------------------------------------------
// /abc/   → busca "abc" literal
// /\d/    → busca cualquier número (0–9)
// /[0-1]/ → busca 0 o 1
// /[8-9]/ → busca 8 o 9
// .test() → devuelve true o false según si el patrón aparece en el texto



// ============================================================
// 🔹 EXPRESIONES REGULARES INTERMEDIAS
// ============================================================

// 4️⃣ Cuantificadores
// -------------------------------------
// Sirven para indicar cuántas veces puede repetirse un patrón:

// +  → una o más veces
// *  → cero o más veces
// ?  → cero o una vez
// {n}     → exactamente n veces
// {n,}    → al menos n veces
// {n,m}   → entre n y m veces

const text3 = "hellooo"
console.log(/o+/.test(text3))   // true -> hay varias 'o'
console.log(/lo*/.test(text3))  // true -> 'l' seguido de cero o más 'o'
console.log(/lo?/.test(text3))  // true -> 'l' seguido de una 'o' opcional
console.log(/o{2,4}/.test(text3)) // true -> hay entre 2 y 4 'o'


// 5️⃣ Metacaracteres comunes
// -------------------------------------
// \d  → cualquier dígito (0-9)
// \w  → cualquier carácter alfanumérico (letras, números o guion bajo)
// \s  → espacio en blanco (espacio, tabulación o salto de línea)
// .   → cualquier carácter (excepto salto de línea)

const text4 = "user_123"
console.log(/\w+/.test(text4))   // true -> letras y números
console.log(/\d+/.test(text4))   // true -> hay dígitos
console.log(/\s/.test(text4))    // false -> no hay espacios
console.log(/user.123/.test(text4)) // true -> el punto reemplaza cualquier carácter


// 6️⃣ Anclas
// -------------------------------------
// ^  → inicio del texto
// $  → final del texto
// Sirven para indicar la posición del patrón dentro de la cadena

const text5 = "javascript"
console.log(/^java/.test(text5))   // true -> empieza por "java"
console.log(/script$/.test(text5)) // true -> termina con "script"
console.log(/^script/.test(text5)) // false -> no empieza por "script"


// 7️⃣ Agrupación y alternancia
// -------------------------------------
// ( ) → agrupar patrones
// |   → “o lógico” (alternativa)

const regex6 = /(cat|dog)/
console.log(regex6.test("I have a cat")) // true
console.log(regex6.test("I have a dog")) // true
console.log(regex6.test("I have a bird")) // false


// 8️⃣ Banderas (flags)
// -------------------------------------
// i → ignora mayúsculas/minúsculas
// g → búsqueda global (no se detiene en la primera coincidencia)
// m → modo multilínea (^ y $ se aplican por línea)

const text6 = "JavaScript is fun. javascript is powerful."
const regex7 = /javascript/gi
console.log(text6.match(regex7)) // ["JavaScript", "javascript"]


// ✅ RESUMEN DE NUEVOS CONCEPTOS
// ------------------------------------------------------------
// +, *, ?, {n,m} → controlan la cantidad de repeticiones
// \w, \d, \s, .  → tipos de caracteres
// ^, $           → anclas (inicio/fin)
// ( ) y |        → agrupación y alternativas
// i, g, m        → modificadores o banderas


// MÉTODOS ÚTILES CON EXPRESIONES REGULARES
// ============================================================

// 🔹 replace()
// ------------------------------------------------------------
// El método .replace() busca coincidencias de una expresión regular
// dentro de un texto y las reemplaza por el valor que indiquemos.
// Sintaxis: string.replace(regex, nuevoTexto)

// Ejemplo 1: reemplazar una palabra literal
const regex8 = /JavaScript/
console.log("Hola JavaScript".replace(regex8, "JS"))
// Resultado → "Hola JS"
// En este caso solo reemplaza la primera coincidencia (porque no tiene flag /g)


// Ejemplo 2: reemplazar *todas* las coincidencias usando la bandera "g"
// /g = global (no se detiene en la primera coincidencia)
const regex9 = /\d/g  // patrón que busca cualquier número (0–9)
const text7 = "Estoy contando 1 2 3 4 5 6 7"

console.log(text7.replace(regex9, "[numero]"))
// Resultado → "Estoy contando [numero] [numero] [numero] [numero] [numero] [numero] [numero]"
// Cada número fue reemplazado por "[numero]"


// 💡 EXTRA: también existe .replaceAll(), que actúa igual pero solo acepta cadenas (no regex).
// Ejemplo: text.replaceAll("perro", "gato")


// ============================================================
// 🔹 exec()
// ------------------------------------------------------------
// El método .exec() busca coincidencias detalladas de una expresión regular
// dentro de un texto y devuelve un objeto con información sobre cada match.
//
// A diferencia de .test() (que solo devuelve true/false),
// .exec() devuelve un array con:
//  - [0]: el texto que coincidió
//  - index: la posición donde empieza la coincidencia
//  - input: el texto original
// Si no hay coincidencias, devuelve null.


// Ejemplo con bucle para encontrar todas las coincidencias
let match
while ((match = regex9.exec(text7)) !== null) {
    console.log(match)
    // Cada iteración imprime un array similar a:
    // [ '1', index: 17, input: 'Estoy contando 1 2 3 4 5 6 7', groups: undefined ]
    // [ '2', index: 19, input: 'Estoy contando 1 2 3 4 5 6 7', groups: undefined ]
    // etc...
}

// 🔎 NOTA: el bucle while funciona porque .exec() recuerda su última posición
// dentro del texto si usamos la bandera "g". Cada vez que encuentra un match,
// el siguiente .exec() empieza donde el anterior terminó.


// ============================================================
// 💡 RECURSO MUY ÚTIL:
// ------------------------------------------------------------
// https://regex101.com/ → una herramienta online para probar expresiones regulares.
// Permite ver coincidencias en tiempo real y explica el significado de cada parte
// del patrón (grupos, rangos, cuantificadores, etc).

// ------------------------------------------------------------
// ✅ RESUMEN FINAL
// ------------------------------------------------------------
// .replace(regex, nuevoTexto) → reemplaza coincidencias en el texto
// .exec(string)               → devuelve detalles de cada coincidencia
// /g                          → bandera para buscar todas las coincidencias
// regex101.com                → sitio recomendado para practicar y entender RegEx
