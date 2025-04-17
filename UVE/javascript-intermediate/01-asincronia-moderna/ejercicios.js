// ===============================
// EJERCICIOS: ASINCRONÍA MODERNA
// ===============================

// 🧩 1. Crear una promesa que se resuelva en 2 segundos con el mensaje "Hecho".
// Mostrar el mensaje por consola cuando se resuelva.
const promesaDosSegundos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hecho")
    }, 2000)
})

promesaDosSegundos.then((mensaje) => {
    console.log(mensaje)
})

// 🧩 2. Crear una promesa que se rechace en 1 segundo con el mensaje "Error al cargar".
// Captura el error y muéstralo por consola.
const promesaRechazada1Segundo = new Promise((resolve, reject) => {
    const exito = false
    if (exito) {
        resolve("todo bien")
    } else {
        setTimeout(() => {
            reject("error al cargar")
        }, 1000)
    }
});

promesaRechazada1Segundo
    .then((mensaje) => {
        console.log("Mensaje de éxito:", mensaje)
    })
    .catch((error) => {
        console.error("Mensaje de error:", error)
    })

// 🧩 3. Escribir una función async llamada `simularCarga()`
// Dentro de ella, espera 1 segundo usando `await` con una promesa, luego muestra "Carga completada".
async function simularCarga() {
    try {
        const respuesta = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("Carga completada");
            }, 1000)
        })

        console.log(respuesta)
    } catch (error) {
        console.log("Error:", error)
    }
}
simularCarga()

// 🧩 4. Escribir una función async llamada `descargarDatos()`
// Simula una llamada con `fetch` usando `await` y un `setTimeout` que devuelve datos falsos.
// Luego muestra el resultado en consola.
async function descargarDatos() {
    try {
        const datosFalsos = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({ mensaje: "datos falsos" })
            }, 2000)
        })

        console.log("Respuesta simulada:", datosFalsos)
    } catch (error) {
        console.error("Error:", error)
    }
}
descargarDatos()

// 🧩 5. Crea tres promesas que se resuelvan con distintos tiempos y mensajes:
//    - promesaA → 2s → "A completada"
//    - promesaB → 1s → "B completada"
//    - promesaC → 3s → "C completada"
// Usa `Promise.all()` y muestra el array de resultados por consola.
const pA = new Promise((resolve) => {
    setTimeout(() => {
        resolve("A completada")
    }, 2000)
})
const pB = new Promise((resolve) => {
    setTimeout(() => {
        resolve("B completada")
    }, 1000)
})
const pC = new Promise((resolve) => {
    setTimeout(() => {
        resolve("C completada")
    }, 3000)
})

Promise.all([pA, pB, pC])
    .then(resultados => console.log("resultados: ", resultados))
    .catch(err => console.log("error en alguna promesa: ", err))

// 🧩 6. Usa las mismas promesas del ejercicio anterior pero con `Promise.race()`
// Muestra cuál fue la primera en resolverse.
Promise.race([pA, pB, pC])
    .then(resultado => console.log("la primera en resolverse es ", resultado))

// 🧩 7. Usa `Promise.allSettled()` con un array que incluya:
//    - una promesa que se resuelve
//    - una promesa que se rechaza
//    - una promesa que tarda 1 segundo
// Muestra los resultados por consola y analiza el estado de cada una.
const promesaResuelta = Promise.resolve("Promesa que se resuelve")
const promesaRechazada = Promise.reject("Promesa rechazada")
const promesa1Segundo = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa que tarda 1 segundo")
    }, 1000)
})
Promise.allSettled([promesaResuelta, promesaRechazada, promesa1Segundo])
    .then(resultados => console.log("resultado y estado de cada promesa, ", resultados))

// 🧩 8. Usa `Promise.any()` con varias promesas donde la primera y segunda fallen,
// pero la tercera se resuelva con "¡Lo logramos!".
// Muestra ese resultado por consola.
const promesaRechazada2 = Promise.reject("Promesa rechazada 2")
const promesaResuelta2 = Promise.resolve("Lo logramos!")
Promise.any([promesaRechazada, promesaRechazada2, promesaResuelta2])
    .then(resultado => console.log("resultado any: ", resultado))
    .catch(err => console.log("todas han fallado", err))

// 🧩 9. Encadena varias promesas que procesen un número:
//    - función 1: suma 5 al número
//    - función 2: multiplica por 3
//    - función 3: convierte en string con texto: "Resultado final: X"
// Empieza desde el número 10 y muestra el resultado final.
function func1(n) {
    return Promise.resolve(n + 5);
}

function func2(n) {
    return Promise.resolve(n * 3);
}

function func3(resultado) {
    return Promise.resolve(`Resultado final: ${resultado}`);
}

Promise.resolve(10)
    .then(func1)   // 10 + 5 = 15
    .then(func2)   // 15 * 3 = 45
    .then(func3)   // "Resultado final: 45"
    .then(console.log) // muestra: Resultado final: 45

// 🧩 10. Crea una función async `manejarError()` que:
//    - Intente resolver una promesa que falla
//    - Capture el error con try/catch
//    - Muestre el mensaje "Se capturó el error correctamente" si todo está controlado
async function manejarError() {
    try {
        const resultado = await promesaRechazada
        console.log(resultado)
    } catch (error) {
        console.log("se capturó el error correctamente", error)
    }
}

// 🧩 11. BONUS: Crea una función async que use `fetch` para pedir datos de una API pública (ej: JSONPlaceholder).
//    - Usa try/catch para manejar errores.
//    - Si todo va bien, muestra los datos en consola.
//    - Si hay error de red, muestra "Error de conexión".
// Nota: si fetch no funciona en tu entorno local, puedes simularlo con un setTimeout.
async function datosAPI() {
    try {
        const datos = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({ mensaje: "datos simulados desde API" });
            }, 2000);
        });

        console.log("Datos recibidos:", datos);
    } catch (err) {
        console.log("Error de conexión:", err);
    }
}
datosAPI()