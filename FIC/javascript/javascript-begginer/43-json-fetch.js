// ---------------------------------------
// JSON (JavaScript Object Notation)
// ---------------------------------------

// JSON es un formato de texto ligero para almacenar e intercambiar datos.
// Se basa en la sintaxis de los objetos en JavaScript (clave: valor)
// Se usa mucho para comunicarse con APIs o guardar datos en localStorage.

// OBJETO JS NORMAL:
const persona = {
    nombre: "Cristina",
    edad: 27
}
console.log("Objeto JS:", persona)

// JSON.stringify(objeto) → convierte un objeto de JS a una cadena JSON (texto plano)
const personaJSON = JSON.stringify(persona)
console.log("JSON.stringify:", personaJSON) // '{"nombre":"Cristina","edad":27}'
// Esta cadena se puede guardar en localStorage o enviar por HTTP (API)

// JSON.parse(string) → convierte un string en formato JSON a un objeto JS
const personaParseada = JSON.parse(personaJSON)
console.log("JSON.parse:", personaParseada) // { nombre: 'Cristina', edad: 27 }

// NOTA: JSON solo admite:
// - strings, números, booleanos, null, arrays, objetos (sin métodos)
// - No admite funciones, símbolos, ni propiedades con `undefined`


// ---------------------------------------
// FETCH BÁSICO
// ---------------------------------------

// fetch() permite hacer peticiones HTTP (a APIs por ejemplo)
// Es asíncrono y devuelve una **promesa**
// Por defecto, realiza una petición GET

// Ejemplo de petición GET a una API falsa para obtener datos de un usuario
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        // Validamos si la respuesta fue exitosa
        if (!response.ok) throw new Error("Error en la respuesta")
        return response.json() // Convertimos el body a un objeto JS
    })
    .then(data => {
        // Aquí ya tenemos los datos en formato objeto
        console.log("Usuario recibido:", data)
    })
    .catch(error => {
        // Capturamos cualquier error (de red o conversión)
        console.error("Error con fetch:", error.message)
    })


// ---------------------------------------
// FETCH con POST (enviar datos)
// ---------------------------------------

// También podemos usar fetch para enviar datos (por ejemplo, crear un post)

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", // Método HTTP
    headers: {
        "Content-Type": "application/json" // Indicamos que estamos enviando JSON
    },
    body: JSON.stringify({   // Convertimos el objeto JS a string JSON
        title: "Mi primer post",
        body: "¡Hola mundo!",
        userId: 1
    })
})
.then(response => response.json()) // Convertimos la respuesta a objeto
.then(data => {
    console.log("Respuesta del POST:", data)
})
.catch(error => {
    console.error("Error en el POST:", error.message)
})

// IMPORTANTE:
// - Siempre que envíes datos, usá JSON.stringify()
// - Siempre que recibas datos, usá .json() para convertirlos a objeto JS
// - fetch no detona un catch por errores 404/500; hay que verificar con .ok