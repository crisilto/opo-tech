// JSON & FETCH - EJERCICIOS

// 1. Declara un objeto con tu nombre, alias y edad.
// Convierte ese objeto a JSON con `JSON.stringify()`.
let miObj = {
    nombre: "cris",
    alias: "criscries",
    edad: 27,
};
let miObjJSON = JSON.stringify(miObj);

// 2. Convierte el string JSON anterior de nuevo a objeto con `JSON.parse()`.
let miObjParseado = JSON.parse(miObjJSON);

// 3. Usa `fetch()` para hacer una petición GET a: https://jsonplaceholder.typicode.com/posts/1
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        if (!response.ok) throw new Error("Error en la respuesta");
        return response.json();
    })
    .then((data) => {
        console.log("Posts:", data);
        // 4. Muestra en consola el título (`title`) de la respuesta del post.
        console.log("Titulo: ", data.title);
    })
    .catch((error) => {
        console.error("Error con fetch:", error.message);
    });

// 5. Usa `fetch()` para hacer una petición POST a https://jsonplaceholder.typicode.com/posts con:
//    - title: "Hola desde JS"
//    - body: "Este es mi post"
//    - userId: 3
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "Hola desde JS",
        body: "Este es mi post",
        userId: 3,
    }),
})
    .then((response) => response.json())
    .then((data) => {
        console.log("Respuesta del POST:", data)
        // 6. Muestra el ID que devuelve la respuesta del POST (se encuentra en `data.id`).
        console.log("ID respuesta post:", data.id)
    })
    .catch((error) => {
        console.error("Error en el POST:", error.message)
    })

// 7. Crea una función `getUser(id)` que reciba un ID y haga un fetch para obtener un usuario por ID.
function getUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Error en la respuesta")
            return response.json()
        })
        .then(data => {
            console.log("usuario: ", data)
        })
        .catch(error => {
            console.log("error ", error.message)
        })
}
getUser(3)

// 8. Crea una función `crearPost(titulo, contenido, usuarioId)` que envíe esos datos con fetch.
function crearPost(titulo, contenido, usuarioId) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: titulo,
            body: contenido,
            userId: usuarioId
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error.message)
        })
}
crearPost("Post 1", "Contenido 1", 1)

// 9. Simula un error en fetch usando una URL mal escrita. 
// Muestra el error capturado con `.catch()`.
try {
    fetch("hsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Mi primer post",
            body: "¡Hola mundo!",
            userId: 1
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta del POST:", data)
        })
        .catch(error => {
            console.error("Error en el POST:", error.message)
        })
} catch (err) {
    console.log("error: ", err.message) //Error en el POST: Failed to parse URL from hsonplaceholder.typicode.com/posts
}

// 10. Crea una versión con `fetch` que solo ejecute `console.log("Petición finalizada")` tanto si funciona como si falla.
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        if (!response.ok) throw new Error("Error en la respuesta")
        return response.json()
    })
    .then((data) => {
        console.log("Datos recibidos:", data)
    })
    .catch((error) => {
        console.error("Error con fetch:", error.message)
    })
    .finally(() => {
        console.log("Petición finalizada")
    })
