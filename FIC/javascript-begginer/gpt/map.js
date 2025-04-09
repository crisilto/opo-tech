// MAP - EJERCICIOS

// 1. Crea un Map vacío llamado `miMapa` y muéstralo por consola.
let miMapa = new Map()
console.log(miMapa)

// 2. Inicializa un Map con las claves: "nombre", "apellido" y "edad", con tus datos.
let misDatos = new Map([
    ["nombre", "cristina"],
    ["apellido", "silvestre"],
    ["edad", 27]
])
console.log(misDatos)

// 3. Agrega una nueva clave "profesion" con el valor que elijas usando `.set()`.
misDatos.set("profesion", "nini")
console.log(misDatos)

// 4. Actualiza el valor de la clave "nombre" por otro distinto usando `.set()`.
misDatos.set("nombre", "fay")
misDatos.set("apellido", "bruch")
misDatos.set("edad", 26)
console.log(misDatos)

// 5. Obtén el valor de la clave "apellido" y muéstralo por consola usando `.get()`.
console.log(misDatos.get("apellido"))

// 6. Intenta obtener el valor de una clave que no exista (por ejemplo, "email") y observa el resultado.
console.log(misDatos.get("email")) //devuelve undefined

// 7. Usa `.has()` para comprobar si el Map contiene la clave "edad".
console.log(misDatos.has("edad")) //devuelve true
console.log(misDatos.has("email")) //devuelve false

// 8. Escribe una condición que verifique si una clave "email" existe en el Map. Si existe, imprímela; si no, muestra un mensaje de error.
misDatos.has("email") ? console.log("existe email S" + misDatos.get("email")) : console.log("error: no existe email")
misDatos.has("nombre") ? console.log("existe nombre " + misDatos.get("nombre")) : console.log("error: no existe nombre")

// 9. Elimina la clave "edad" del Map y muestra el resultado actualizado.
misDatos.delete("edad")
console.log(misDatos) //ha eliminado tanto la clave como el valor

// 10. Intenta eliminar una clave que no existe y muestra qué devuelve el método `.delete()`.
console.log(misDatos.delete("email")) //devuelve false

// 11. Usa `.clear()` para eliminar todos los elementos del Map y muéstralo vacío por consola.
misDatos.clear()
console.log(misDatos) //Map(0) {}

// 12. Vuelve a inicializar un Map con tres pares clave-valor de tu elección.
let hija = new Map([
    ["nombre", "lilith"],
    ["edad", 4],
    ["isACat", true]
])
console.log(hija)

// 13. Muestra por consola cuántos elementos tiene el Map usando `.size`.
console.log(hija.size)

// 14. Usa `.keys()` para obtener todas las claves del Map y recógelas en un array con `Array.from()`.
let claves = Array.from(hija.keys())
console.log(claves)

// 15. Usa `.values()` para obtener todos los valores del Map y muéstralos uno por uno usando un bucle `for...of`.
let valores = Array.from(hija.values())
console.log(valores)
for (const valor of valores) {
    console.log(valor)
}

// 16. Usa `.entries()` para recorrer todas las claves y valores a la vez con un bucle `for...of` y mostrar cada par.
let parejas = Array.from(hija.entries())
for (const pareja of parejas) {
    console.log(pareja)
}

// 17. Crea una función que reciba un objeto (con `{}`) y devuelva un Map con las mismas claves y valores.
const perro = {
    nombre: "Rocky",
    raza: "yorkshire",
    edad: 14
}
function objToMap(obj) {
    return new Map(Object.entries(obj))
}
const perroMap = objToMap(perro)
console.log(perroMap)

// 18. Convierte un Map en un objeto plano usando `Object.fromEntries()`.
let madrid = new Map([
    ["portero", "courtois"],
    ["defensa", "asencio"],
    ["centrocampista", "bellingham"],
    ["delantero", "mbappe"]
])
console.log(madrid)
let madridObj = Object.fromEntries(madrid)
console.log(madridObj)

// 19. Crea un Map que relacione nombres de usuarios con sus contraseñas. Luego verifica si un usuario existe y muestra su contraseña.
let usuarios = new Map([
    ["criscries", "pass123"],
    ["faycries", "pass456"],
    ["lidiacries", "pass789"],
])
console.log(usuarios)
if (usuarios.has("criscries")) {
    console.log(`contraseña de criscries: ${usuarios.get("criscries")}`)
} else {
    console.log("el usuario no existe")
}
if (usuarios.has("criscriess")) {
    console.log(`contraseña de criscries: ${usuarios.get("criscries")}`)
} else {
    console.log("el usuario no existe")
}
//otra opción es declarar el usuario como variable
let user = "faycries"
if(usuarios.has(user)){
    console.log(`la contraseña de ${user}: ${usuarios.get(user)}`)
}else{
    console.log(`el usuario ${user} no existe`)
}

// 20. Explica con un comentario por qué Map permite claves que no sean solo strings (a diferencia de los objetos).
// En los objetos tradicionales ({}), las claves siempre se convierten a string automáticamente.
// Por ejemplo:
const obj = {};
obj[true] = "valor";        // La clave `true` se convierte en la string "true"
obj[42] = "otro valor";     // La clave `42` se convierte en la string "42"
console.log(obj)
// En cambio, los Map sí permiten cualquier tipo de dato como clave, sin convertirlo:
// - strings
// - números
// - booleanos
// - objetos
// - funciones
const miMapa2 = new Map();
miMapa2.set(true, "booleano");
miMapa2.set(42, "número");
miMapa2.set({ nombre: "cristina" }, "objeto");
miMapa2.set(() => { }, "función");
console.log(miMapa2);
// Por eso Map es más flexible que los objetos para manejar claves no textuales.
