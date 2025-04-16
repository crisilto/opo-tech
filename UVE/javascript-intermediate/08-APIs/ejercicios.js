// ========================================
// EJERCICIOS: APIs DEL NAVEGADOR
// ========================================

//----------------------------------------------------------
// 🌐 fetch() + AbortController
//----------------------------------------------------------

// 🧩 1. Haz una petición con `fetch()` a https://jsonplaceholder.typicode.com/users
//    - Muestra los nombres de los usuarios en consola

// 🧩 2. Usa AbortController para cancelar una petición si tarda más de 1 segundo.
//    - Muestra por consola si fue cancelada correctamente

//----------------------------------------------------------
// 📝 FormData
//----------------------------------------------------------

// 🧩 3. Enlaza un formulario HTML simple con inputs de nombre y email.
//    - Usa `FormData` para capturar los datos en el evento submit
//    - Muestra por consola las claves y valores enviados

// 🧩 4. Envía los datos del formulario a un endpoint con `fetch()` usando el método POST
//    (puede ser un endpoint falso o un servicio como `https://httpbin.org/post`)

//----------------------------------------------------------
// 📋 Clipboard API
//----------------------------------------------------------

// 🧩 5. Crea un botón "Copiar texto" que copie un texto fijo al portapapeles usando `navigator.clipboard.writeText()`.

// 🧩 6. Crea otro botón "Pegar texto" que obtenga el texto del portapapeles con `readText()` y lo muestre en pantalla.

//----------------------------------------------------------
// 📱 Navigator API
//----------------------------------------------------------

// 🧩 7. Muestra en pantalla:
//    - El idioma del navegador
//    - Si el usuario está online
//    - La plataforma del sistema

//----------------------------------------------------------
// 📍 Geolocation API
//----------------------------------------------------------

// 🧩 8. Crea un botón "Obtener ubicación" que al hacer clic muestre la latitud y longitud del usuario.

// 🧩 9. Muestra un mensaje de error si el usuario no permite compartir la ubicación.

//----------------------------------------------------------
// 🕓 History API
//----------------------------------------------------------

// 🧩 10. Al hacer clic en un botón "Ir a página 2", usa `history.pushState()` para cambiar la URL a "?pagina=2".
//    - Luego, agrega otro botón "Volver" que use `history.back()` para regresar.

// 🧩 11. Muestra en consola el `history.state` actual al hacer clic en los botones.

//----------------------------------------------------------
// 🔍 URLSearchParams
//----------------------------------------------------------

// 🧩 12. Desde una URL como "?tema=js&nivel=intermedio", usa `URLSearchParams` para leer los valores.
//    - Muestra en consola el tema y el nivel.

// 🧩 13. Modifica el parámetro `nivel` a "avanzado" y actualiza la URL sin recargar usando `history.pushState()` y `params.toString()`.