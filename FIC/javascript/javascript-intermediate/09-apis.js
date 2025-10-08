//manejo de APIs

//APIs REST (HTTP + URLs + JSON)
//REST Representational State Transfer:
//estilo arquitectónico que permite que las aplicaciones se comuniquen entre sí
//a través de peticiones a URLs específicas, usando métodos y devolviendo datos
//usualmente en formato JSON (javascript object notation), objeto para poder intercambiar datos.

//métodos HTTP
//GET: solicitar datos
//POST: enviar datos que van a acabar creando un nuevo recurso 
//PUT: enviar datos pero que van a actualizar un recurso
//DELETE: eliminar un recurso

//códigos de respuesta HTTP
//200 OK indica éxito
//201 OK y recurso creado
//400 error por parte del cliente
//404 se ha solicitado algo que no existe
//500 error por parte del servidor

//consumir una API
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        //transforma la respuesta a JSON
        return response.json()
    })
    .then(data => {
        //procesa los datos/los muestra
        console.log(data)
    })
    .catch(err => {
        //captura errores
        console.log("error, " + err)
    })


//lo mismo pero con async await
async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("error, " + err)
    }
}
getPosts()

//solicitud post
async function createPost() {
    try {
        const newPost = { //petición enviándole nuevo post
            userId: 1,
            title: "este es el titulo de mi post",
            body: "este es el cuerpo de mi post"
        }
        //petición pasándola a JSON
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("error, " + err)
    }
}
createPost()


//Herramientas para realizar peticiones HTTP
//Postman
//Apidog
//ThunderClient (extensión VSCode)


//manejo de errores

fetch("https://jsonplaceholder.typicode.com/crisilto")
    .then(response => {
        if (!response.ok) {
            throw Error("Status http: " + response.status)
        }
        return response.json()
    })
    .catch(err => {
        console.log("error, " + err)
    })

//métodos HTTP adicionales
//PATCH: actualizar parcialmente un recurso (con PUT es el recurso completo)
//OPTIONS: permite consultar al servidor qué métodos HTTP están permitidos para un recurso

//update parcial con PATCH
async function partialPostUpdate() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: "este es el nuevo titulo de mi post" })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("error, " + err)
    }
}
partialPostUpdate()


//autenticación
//https://home.openweathermap.org/api_keys
async function getWeather(city) {
    const apiKey = "7aebc3fa60d2b7b6ee0b2407b8719586"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("error, " + err)
    }
}
getWeather("Madrid")

//otros métodos de autenticación y autorización
//bearer tokens
//jwt

//versionado de APIs

//otras APIs
//https://api.example.com/v1/resources
//https://api.example.com/v2/resources

//https://pokeapi.co/

async function getPokemon(pokemon) {

    // https://pokeapi.co
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(`Habilidades de ${data.name}`)
        data.abilities.forEach(ability => {
            console.log(ability.ability.name)
        })
    } catch (error) {
        console.log("Error", error)
    }
}

getPokemon("pikachu")