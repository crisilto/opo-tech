// ===============================
// EJERCICIOS: ASINCRONÍA MODERNA
// ===============================

// 🧩 1. Crear una promesa que se resuelva en 2 segundos con el mensaje "Hecho".
// Mostrar el mensaje por consola cuando se resuelva.

// 🧩 2. Crear una promesa que se rechace en 1 segundo con el mensaje "Error al cargar".
// Captura el error y muéstralo por consola.

// 🧩 3. Escribir una función async llamada `simularCarga()`
// Dentro de ella, espera 1 segundo usando `await` con una promesa, luego muestra "Carga completada".

// 🧩 4. Escribir una función async llamada `descargarDatos()`
// Simula una llamada con `fetch` usando `await` y un `setTimeout` que devuelve datos falsos.
// Luego muestra el resultado en consola.

// 🧩 5. Crea tres promesas que se resuelvan con distintos tiempos y mensajes:
//    - promesaA → 2s → "A completada"
//    - promesaB → 1s → "B completada"
//    - promesaC → 3s → "C completada"
// Usa `Promise.all()` y muestra el array de resultados por consola.

// 🧩 6. Usa las mismas promesas del ejercicio anterior pero con `Promise.race()`
// Muestra cuál fue la primera en resolverse.

// 🧩 7. Usa `Promise.allSettled()` con un array que incluya:
//    - una promesa que se resuelve
//    - una promesa que se rechaza
//    - una promesa que tarda 1 segundo
// Muestra los resultados por consola y analiza el estado de cada una.

// 🧩 8. Usa `Promise.any()` con varias promesas donde la primera y segunda fallen,
// pero la tercera se resuelva con "¡Lo logramos!".
// Muestra ese resultado por consola.

// 🧩 9. Encadena varias promesas que procesen un número:
//    - función 1: suma 5 al número
//    - función 2: multiplica por 3
//    - función 3: convierte en string con texto: "Resultado final: X"
// Empieza desde el número 10 y muestra el resultado final.

// 🧩 10. Crea una función async `manejarError()` que:
//    - Intente resolver una promesa que falla
//    - Capture el error con try/catch
//    - Muestre el mensaje "Se capturó el error correctamente" si todo está controlado

// 🧩 11. BONUS: Crea una función async que use `fetch` para pedir datos de una API pública (ej: JSONPlaceholder).
//    - Usa try/catch para manejar errores.
//    - Si todo va bien, muestra los datos en consola.
//    - Si hay error de red, muestra "Error de conexión".
// Nota: si fetch no funciona en tu entorno local, puedes simularlo con un setTimeout.
