// JSON = JavaScript Object Notation
// Es un formato para representar datos estructurados como texto (clave: valor)

// OBJETO JS NORMAL:
const persona = {
    nombre: "Cristina",
    edad: 27
};

// JSON.stringify(objeto) → convierte un objeto JS a string JSON
const personaJSON = JSON.stringify(persona);
console.log("JSON.stringify:", personaJSON); // {"nombre":"Cristina","edad":27}

// JSON.parse(string) → convierte un string JSON a objeto JS
const personaParsed = JSON.parse(personaJSON);
console.log("JSON.parse:", personaParsed); // {nombre: 'Cristina', edad: 27}

// ---------------------------------------
// FETCH BÁSICO

// fetch() permite hacer peticiones HTTP (por ejemplo, a una API)
fetch("https://jsonplaceholder.typicode.com/users/1") // GET por defecto
    .then(response => {
        if (!response.ok) throw new Error("Error en la respuesta");
        return response.json(); // Convertimos a objeto
    })
    .then(data => {
        console.log("Usuario recibido:", data);
    })
    .catch(error => {
        console.error("Error con fetch:", error.message);
    });

// IMPORTANTE: fetch() es asíncrono y devuelve una promesa

// También podés usar fetch para enviar datos (POST)
fetch("https://jsonplaceholder.typicode.com/posts", {
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
    console.log("Respuesta del POST:", data);
})
.catch(error => {
    console.error("Error en el POST:", error.message);
});
