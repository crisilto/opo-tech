// ============================
// MANEJO DE APIs EN JAVASCRIPT
// ============================

// Las APIs REST permiten que nuestras aplicaciones se comuniquen con servidores
// usando HTTP y URLs específicas, normalmente intercambiando datos en formato JSON.

// ----------------------------------------
// 1️⃣ MÉTODOS HTTP PRINCIPALES
// ----------------------------------------
// GET:   Solicitar datos
// POST:  Enviar datos para crear un recurso
// PUT:   Enviar datos para reemplazar un recurso completo
// PATCH: Enviar datos para actualizar parcialmente un recurso
// DELETE: Eliminar un recurso

// ----------------------------------------
// 2️⃣ CÓDIGOS DE RESPUESTA HTTP
// ----------------------------------------
// 200 OK       -> Solicitud exitosa
// 201 Created  -> Recurso creado con éxito
// 400 Bad Request -> Error del cliente (malos datos)
// 404 Not Found   -> Recurso no encontrado
// 500 Internal Server Error -> Error en el servidor

// ----------------------------------------
// 3️⃣ CONSUMIR UNA API CON fetch() Y PROMESAS
// ----------------------------------------
fetch("https://jsonplaceholder.typicode.com/posts") // URL de la API
  .then(response => {
    // La respuesta no es directamente JSON, sino un objeto Response
    // Debemos transformarlo a JSON, lo que devuelve otra promesa
    return response.json()
  })
  .then(data => {
    // Aquí ya tenemos los datos procesados (array de posts)
    console.log("Posts recibidos:", data)
  })
  .catch(error => {
    // Captura cualquier error en la llamada o en el parsing JSON
    console.error("Error al consumir la API:", error)
  })

// ----------------------------------------
// 4️⃣ CONSUMIR UNA API CON ASYNC/AWAIT
// ----------------------------------------
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    
    // Comprobamos si la respuesta fue exitosa
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`)

    const data = await response.json()
    console.log("Posts recibidos con async/await:", data)
  } catch (error) {
    console.error("Error al consumir la API:", error)
  }
}
getPosts()

// ----------------------------------------
// 5️⃣ PETICIÓN POST: CREAR DATOS
// ----------------------------------------
async function createPost() {
  try {
    const newPost = {
      userId: 1,
      title: "Este es el título de mi post",
      body: "Este es el cuerpo de mi post"
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // Crear nuevo recurso
      headers: {
        "Content-Type": "application/json" // Avisamos que enviamos JSON
      },
      body: JSON.stringify(newPost) // Convertimos el objeto JS a JSON
    })

    const data = await response.json()
    console.log("Post creado:", data)
  } catch (error) {
    console.error("Error al crear el post:", error)
  }
}
createPost()

// ----------------------------------------
// 6️⃣ MANEJO DE ERRORES HTTP
// ----------------------------------------
async function getInvalidResource() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/invalidURL")

    // Si la respuesta no es 2xx, lanzamos error
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`)

    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error("Error en la solicitud:", error)
  }
}
getInvalidResource()

// ----------------------------------------
// 7️⃣ ACTUALIZACIÓN PARCIAL CON PATCH
// ----------------------------------------
async function updatePostTitle() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Nuevo título del post" }) // solo cambiamos el título
    })

    const data = await response.json()
    console.log("Post actualizado parcialmente:", data)
  } catch (error) {
    console.error("Error al actualizar el post:", error)
  }
}
updatePostTitle()

// ----------------------------------------
// 8️⃣ EJEMPLO DE AUTENTICACIÓN
// ----------------------------------------
async function getWeather(city) {
  const apiKey = "7aebc3fa60d2b7b6ee0b2407b8719586"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`)

    const data = await response.json()
    console.log(`Clima en ${city}:`, data)
  } catch (error) {
    console.error("Error al consultar el clima:", error)
  }
}
getWeather("Madrid")

// ----------------------------------------
// 9️⃣ CONSUMO DE OTRAS APIs (ej: Pokémon)
// ----------------------------------------
async function getPokemon(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`)

    const data = await response.json()
    console.log(`Habilidades de ${data.name}:`)
    data.abilities.forEach(ability => console.log(ability.ability.name))
  } catch (error) {
    console.error("Error al consultar Pokémon:", error)
  }
}

getPokemon("pikachu")