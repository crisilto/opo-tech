// ========================================
// TEORÍA: APIs DEL NAVEGADOR
// ========================================

//----------------------------------------------------------
// 🌐 1. fetch() + AbortController
//----------------------------------------------------------

// ➤ fetch() permite hacer peticiones HTTP asincrónicas.
// Devuelve una promesa con la respuesta (tipo Response).

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

// ➤ AbortController permite cancelar una petición si tarda demasiado

const controlador = new AbortController();
const { signal } = controlador;

fetch('https://jsonplaceholder.typicode.com/posts', { signal })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        if (err.name === 'AbortError') {
            console.warn("La petición fue cancelada");
        } else {
            console.error("Error desconocido:", err);
        }
    });

// Cancelar la petición después de 1 segundo
setTimeout(() => controlador.abort(), 1000);

//----------------------------------------------------------
// 📝 2. FormData para manejar formularios
//----------------------------------------------------------

// FormData permite recoger fácilmente los datos de un <form> en HTML.

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const datos = new FormData(form);

    for (let [clave, valor] of datos.entries()) {
        console.log(`${clave}: ${valor}`);
    }

    // También se puede enviar con fetch
    fetch("/enviar", {
        method: "POST",
        body: datos
    });
});

//----------------------------------------------------------
// 📋 3. Clipboard API
//----------------------------------------------------------

// Permite copiar y pegar texto desde el portapapeles del sistema

// Copiar texto
navigator.clipboard.writeText("Texto copiado").then(() => {
    console.log("Texto copiado al portapapeles");
});

// Leer texto (requiere permisos del navegador)
navigator.clipboard.readText().then(texto => {
    console.log("Texto pegado:", texto);
});

//----------------------------------------------------------
// 📱 4. Navigator API
//----------------------------------------------------------

// Ofrece info del navegador y del dispositivo

console.log("Plataforma:", navigator.platform);
console.log("Idioma:", navigator.language);
console.log("Conectado a Internet:", navigator.onLine);

//----------------------------------------------------------
// 📍 5. Geolocation API
//----------------------------------------------------------

// Solicita la ubicación del usuario

navigator.geolocation.getCurrentPosition(
    (pos) => {
        const { latitude, longitude } = pos.coords;
        console.log(`Ubicación: ${latitude}, ${longitude}`);
    },
    (err) => {
        console.warn("No se pudo obtener la ubicación:", err.message);
    }
);

//----------------------------------------------------------
// 🕓 6. History API
//----------------------------------------------------------

// Permite manipular el historial del navegador

history.pushState({ pagina: 1 }, "Título", "?pagina=1");
console.log("Estado actual:", history.state);

// Para volver atrás:
history.back();

//----------------------------------------------------------
// 🔍 7. URLSearchParams
//----------------------------------------------------------

// Para leer o construir los parámetros de una URL fácilmente

const url = new URL("https://ejemplo.com?categoria=js&nivel=intermedio");
const params = new URLSearchParams(url.search);

console.log(params.get("categoria")); // js
console.log(params.has("nivel")); // true

params.set("nivel", "avanzado");
console.log(params.toString()); // categoria=js&nivel=avanzado