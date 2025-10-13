// 1️⃣ Realiza una petición GET con fetch() a JSONPlaceholder 
// y muestra en la consola la lista de publicaciones.

// Hacemos la petición GET a la URL de la API
fetch("https://jsonplaceholder.typicode.com/posts")
    // fetch devuelve una Promesa que se resuelve con un objeto Response
    .then(response => {
        // Convertimos la respuesta en JSON (esto también devuelve una Promesa)
        return response.json()
    })
    .then(data => {
        // Aquí ya tenemos los datos procesados (un array con las publicaciones)
        console.log("publicaciones:", data)
    })
    .catch(err => {
        // Captura errores de red o problemas al procesar la respuesta
        console.error("error al consumir la API:", err)
    })


// 2️⃣ Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando 
// response.ok. Si no lo es, lanza y muestra un error.

// En esta versión seguimos usando .then(), pero añadimos verificación con response.ok
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        // Comprobamos si la respuesta fue exitosa (status 200–299)
        if (response.ok) {
            // Si es correcta, procesamos el cuerpo de la respuesta como JSON
            return response.json()
        } else {
            // Si no es correcta, lanzamos un error
            throw new Error("La respuesta no fue satisfactoria (HTTP error)")
        }
    })
    .then(data => {
        // Mostramos los datos solo si no hubo errores
        console.log("publicaciones:", data)
    })
    .catch(err => {
        // Capturamos errores de red o del throw anterior
        console.error("error al consumir la API:", err.message)
    })


// 3️⃣ Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas.

async function getPosts() {
    try {
        // Esperamos a que fetch resuelva la Promesa (la petición GET)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        // Verificamos si la respuesta fue exitosa (status 200–299)
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`)

        // Si la respuesta es correcta, la convertimos a JSON
        const data = await response.json()

        // Mostramos el resultado (array de publicaciones)
        console.log("publicaciones:", data)

    } catch (error) {
        // Capturamos cualquier error de red o del throw anterior
        console.error("error API:", error.message)
    }
}

// Ejecutamos la función
getPosts()


// 4️⃣ Realiza una petición POST a JSONPlaceholder para crear una nueva publicación.
// Envía un objeto con propiedades como title o body.

fetch('https://jsonplaceholder.typicode.com/posts', {
    // Indicamos que queremos usar el método POST (crear un nuevo recurso)
    method: "POST",

    // Indicamos al servidor que el cuerpo de la petición estará en formato JSON
    headers: {
        "Content-Type": "application/json"
    },

    // Enviamos el cuerpo de la solicitud convertido a JSON (string)
    body: JSON.stringify({
        title: "my new post",
        body: "the body of my new post",
        userId: 1   // opcional, muchas APIs lo usan para identificar al autor
    })
})

    // Cuando el servidor responde, procesamos la respuesta
    .then(response => {
        // Comprobamos si la respuesta fue exitosa
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
        return response.json()
    })

    // Mostramos el resultado que nos devuelve la API
    .then(data => {
        console.log("Nueva publicación creada:", data)
    })

    // Capturamos cualquier error de red o respuesta inválida
    .catch(err => {
        console.error("Error al crear la publicación:", err.message)
    })



// 5️⃣ Utiliza el método PUT para actualizar completamente un recurso 
// (por ejemplo, modificar una publicación) en JSONPlaceholder

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    // ✅ Es importante indicar el ID del recurso en la URL (por ejemplo, el post 1)

    method: "PUT", // PUT reemplaza el recurso completo por el que enviamos
    headers: {
        "Content-Type": "application/json" // Indicamos que el cuerpo será JSON
    },
    body: JSON.stringify({
        id: 1, // también lo incluimos en el cuerpo (opcional, depende de la API)
        title: "my first post (updated)",
        body: "this is the updated body of my post",
        userId: 1
    })
})

    // Cuando el servidor responde, convertimos el resultado a JSON
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
        return response.json()
    })

    // Mostramos el recurso actualizado
    .then(data => {
        console.log("Publicación actualizada correctamente:", data)
    })

    // Capturamos errores
    .catch(err => {
        console.error("Error al actualizar la publicación:", err.message)
    })


// 6️⃣ Realiza una petición PATCH para modificar únicamente uno o dos campos 
// de un recurso existente

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    // Indicamos el ID del recurso (post con ID 1)

    method: "PATCH", // PATCH = actualizar parcialmente un recurso

    headers: {
        "Content-Type": "application/json" // Le decimos al servidor que mandamos JSON
    },

    // En el cuerpo (body) solo enviamos los campos que queremos modificar
    body: JSON.stringify({
        title: "title post 1 edited" // Solo cambiamos el título
        // No hace falta incluir id ni body si no queremos modificarlos
    })
})

    // Recibimos la respuesta del servidor (objeto Response)
    .then(response => {
        // Comprobamos si la respuesta fue correcta (status 200-299)
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`)

        // Transformamos la respuesta en un objeto JavaScript
        return response.json()
    })

    // Mostramos el resultado en consola
    .then(data => {
        console.log("Publicación actualizada parcialmente:", data)
    })

    // Capturamos posibles errores de red o de la API
    .catch(err => {
        console.error("Error al actualizar la publicación:", err.message)
    })


// 7️⃣ Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) 
// y verifica la respuesta

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    // URL del recurso que queremos eliminar
    method: "DELETE" // Método HTTP para borrar un recurso
})
    // La API responde con un objeto "Response" que debemos comprobar
    .then(response => {
        // La propiedad ok indica si la petición tuvo éxito (códigos 200–299)
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`)

        // La mayoría de las APIs al borrar algo devuelven un objeto vacío o un status 204 (sin contenido)
        console.log("Recurso eliminado correctamente ✅")

        // Podemos devolver el status o el texto si queremos ver más detalles
        return response.text()
    })
    .then(data => {
        console.log("Respuesta del servidor:", data || "(sin contenido)")
    })
    .catch(err => {
        console.error("Error al eliminar el recurso ❌:", err.message)
    })


// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
// 8️⃣ Función para obtener el clima de una ciudad usando OpenWeatherMap
async function getWeather(city) {
    const apiKey = "7aebc3fa60d2b7b6ee0b2407b8719586"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    try {
        // fetch devuelve una Promesa, esperamos a que se resuelva
        const response = await fetch(url)

        // Comprobamos si la respuesta fue correcta (status 200-299)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        // Convertimos la respuesta a JSON
        const data = await response.json()

        // Mostramos la información que nos interesa
        console.log(`Clima en ${city}:`, data)
        console.log(`Temperatura: ${data.main.temp}°C`)
        console.log(`Descripción: ${data.weather[0].description}`)
        console.log(`Humedad: ${data.main.humidity}%`)
    } catch (error) {
        // Capturamos errores de red o errores HTTP
        console.error("Error al obtener el clima:", error.message)
    }
}

// Llamamos a la función
getWeather("Friburgo")


// 9️⃣ Obtener los datos de un Pokémon, su especie y su cadena evolutiva
async function getPokemon(pokemon) {
    try {
        // 1️⃣ Petición inicial: datos del Pokémon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
        const data = await response.json()
        console.log(`Datos básicos de ${pokemon}:`, data)

        // 2️⃣ Petición secundaria: detalles de la especie
        const speciesUrl = data.species.url
        const speciesResponse = await fetch(speciesUrl)
        if (!speciesResponse.ok) throw new Error(`HTTP error: ${speciesResponse.status}`)
        const speciesData = await speciesResponse.json()
        console.log(`Detalles de la especie de ${pokemon}:`, speciesData)

        // 3️⃣ Petición final: cadena evolutiva
        const evolutionUrl = speciesData.evolution_chain.url
        const evolutionResponse = await fetch(evolutionUrl)
        if (!evolutionResponse.ok) throw new Error(`HTTP error: ${evolutionResponse.status}`)
        const evolutionData = await evolutionResponse.json()
        console.log(`Cadena evolutiva completa de ${pokemon}:`, evolutionData)

        // 🔍 Extra: mostrar los nombres de la cadena evolutiva (más legible)
        let evoChain = []
        let evoData = evolutionData.chain

        // recorremos la cadena evolutiva (nivel por nivel)
        do {
            evoChain.push(evoData.species.name)
            evoData = evoData.evolves_to[0]
        } while (evoData)

        console.log(`Evoluciones de ${pokemon}:`, evoChain.join(" → "))

    } catch (error) {
        console.error("Error al obtener los datos:", error.message)
    }
}

getPokemon("machop")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint
// de una API