// ===============================
// EJERCICIOS: ASINCRONÍA MODERNA
// ===============================

// 🧩 1. Crear una promesa que se resuelva en 2 segundos con el mensaje "Hecho".
// Mostrar el mensaje por consola cuando se resuelva.
const promise2Sec = new Promise((resolve, reject) => {
    const success = true
    setTimeout(() => {
        if (success) {
            resolve("all good")
        } else {
            reject("something happened")
        }
    }, 2000)
})
promise2Sec.then((message) => {
    console.log(message)
})

// 🧩 2. Crear una promesa que se rechace en 1 segundo con el mensaje "Error al cargar".
// Captura el error y muéstralo por consola.
const promise1SecFailed = new Promise((resolve, reject) => {
    const success = false
    setTimeout(() => {
        if (success) {
            resolve("all good")
        } else {
            reject("error")
        }
    }, 1000)
})
promise1SecFailed
    .then(message => {
        console.log(message)
    })
    .catch(error => {
        console.log(error)
    })

// 🧩 3. Escribir una función async llamada `simularCarga()`
// Dentro de ella, espera 1 segundo usando `await` con una promesa, luego muestra "Carga completada".
const myPromise = new Promise((resolve, reject) => {
    const success = true
    setTimeout(() => {
        if (success) {
            resolve("load completed")
        } else {
            reject("error")
        }
    }, 1000)
})
async function simulateLoad() {
    try {
        const response = await myPromise
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
simulateLoad()

// 🧩 4. Escribir una función async llamada `descargarDatos()`
// Simula una llamada con `fetch` usando `await` y un `setTimeout` que devuelve datos falsos.
// Luego muestra el resultado en consola.
async function downloadData() {
    try {
        const fakeData = await new Promise(resolve => {
            setTimeout(() => {
                resolve({ message: "fake data" })
            }, 2000)
        })
        console.log(fakeData)
    } catch (error) {
        console.log(error)
    }
}
downloadData()

// 🧩 5. Crea tres promesas que se resuelvan con distintos tiempos y mensajes:
//    - promesaA → 2s → "A completada"
//    - promesaB → 1s → "B completada"
//    - promesaC → 3s → "C completada"
// Usa `Promise.all()` y muestra el array de resultados por consola.
const promiseA = new Promise(resolve => {
    setTimeout(() => {
        resolve("A completed")
    }, 2000)
})
const promiseB = new Promise(resolve => {
    setTimeout(() => {
        resolve("B completed")
    }, 1000)
})
const promiseC = new Promise(resolve => {
    setTimeout(() => {
        resolve("C completed")
    }, 3000)
})
Promise.all([promiseA, promiseB, promiseC])
    .then(result => console.log(result))
    .catch(err => console.log(err))

// 🧩 6. Usa las mismas promesas del ejercicio anterior pero con `Promise.race()`
// Muestra cuál fue la primera en resolverse.
Promise.race([promiseA, promiseB, promiseC])
    .then(result => console.log("the first one was ", result))
    .catch(err => console.log(err))

// 🧩 7. Usa `Promise.allSettled()` con un array que incluya:
//    - una promesa que se resuelve
//    - una promesa que se rechaza
//    - una promesa que tarda 1 segundo
// Muestra los resultados por consola y analiza el estado de cada una.
const promise1 = Promise.resolve("Promise 1")
const promise2 = Promise.reject("Promise 2")
const promise3 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Promise 3")
    }, 1000)
})
Promise.allSettled([promise1, promise2, promise3])
    .then(result => console.log(result))
    .catch(err => console.log(err))

// 🧩 8. Usa `Promise.any()` con varias promesas donde la primera y segunda fallen,
// pero la tercera se resuelva con "¡Lo logramos!".
// Muestra ese resultado por consola.
const promise4 = Promise.reject("Promise 4")
const promise5 = Promise.resolve("we did it!")
Promise.any([promise2, promise4, promise5])
    .then(result => console.log(result))
    .catch(err => console.log(err))

// 🧩 9. Encadena varias promesas que procesen un número:
//    - función 1: suma 5 al número
//    - función 2: multiplica por 3
//    - función 3: convierte en string con texto: "Resultado final: X"
// Empieza desde el número 10 y muestra el resultado final.
const number = 10
function step1(n) {
    return Promise.resolve(n + 5)
}
function step2(n) {
    return Promise.resolve(n * 3)
}
function step3(result) {
    return Promise.resolve(`final result= ${result}`)
}
Promise.resolve(number)
    .then(step1)
    .then(step2)
    .then(step3)
    .then(console.log)

// 🧩 10. Crea una función async `manejarError()` que:
//    - Intente resolver una promesa que falla
//    - Capture el error con try/catch
//    - Muestre el mensaje "Se capturó el error correctamente" si todo está controlado
async function manageError() {
    try {
        const result = await promise1SecFailed
        console.log(result)
    } catch (err) {
        console.log("error caught correctly:", err)
    }
}
manageError()

// 🧩 11. BONUS: Crea una función async que use `fetch` para pedir datos de una API pública (ej: JSONPlaceholder).
//    - Usa try/catch para manejar errores.
//    - Si todo va bien, muestra los datos en consola.
//    - Si hay error de red, muestra "Error de conexión".
// Nota: si fetch no funciona en tu entorno local, puedes simularlo con un setTimeout.
async function getDataAPI() {
    try {
        const data = await new Promise(resolve => {
            setTimeout(() => {
                resolve({ message: "simulated API data" })
            }, 2000)
        })
        console.log("data: ", data)
    } catch (error) {
        console.log("error", error)
    }
}
getDataAPI()

//con fetch
async function getDataAPIFetch() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("Datos reales:", data);
    } catch (error) {
        console.error("Error de conexión");
    }
}
getDataAPIFetch()