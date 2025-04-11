// CALLBACKS Y ASINCRONÍA - EJERCICIOS

// 1. Crea una función `mostrarMensaje` que reciba un mensaje y lo imprima por consola.
function mostrarMensaje(mensaje) {
    console.log(mensaje)
}
// 2. Crea otra función `ejecutarFuncion` que reciba una función como parámetro y la llame.
function ejecutarFuncion(func) {
    func()
}

// 3. Llama a `ejecutarFuncion` pasando `mostrarMensaje` como argumento.
ejecutarFuncion(() => mostrarMensaje("Hola"))

// 4. Crea una función que simule una carga (con `setTimeout`) y luego llame a un callback.
function carga(callback) {
    console.log("empieza la carga")
    setTimeout(() => {
        console.log("carga finalizada despues de 1.5seg")
        callback()
    }, 1500)
}
carga(() => console.log("callback ejecutado después de la carga"))


// 5. Simula una cadena de pasos usando 3 `setTimeout()` anidados para mostrar: "Preparando", "Cargando", "Listo".
setTimeout(() => {
    console.log("preparando")
    setTimeout(() => {
        console.log("cargando")
        setTimeout(() => {
            console.log("listo")
        }, 200)
    }, 500)
}, 1000)

// 6. Crea una función `esperar` que reciba un número de milisegundos y un callback que se ejecute al finalizar la espera.
function esperar(tiempo, callback) {
    console.log("esperando para ejecutar el callback...")
    setTimeout(() => {
        callback()
    }, tiempo)
}
let tiempo = 2000
esperar(tiempo, () => console.log("callback finalizado después de la espera de " + tiempo + " milisegundos"))

// 7. Usa un callback para simular el envío de un email y que muestre "Email enviado" después de 1 segundo.
function enviarEmail(callback) {
    console.log("click en enviar email")
    setTimeout(() => {
        console.log("se está enviando")
        callback()
    }, 1000)
}
enviarEmail(() => {
    console.log("email enviado")
})

// 8. Declara una función `descargarArchivo(nombre, callback)` que simule una descarga con `setTimeout`.
function descargarArchivo(nombre, callback) {
    console.log("su archivo " + nombre + " se está descargando")
    setTimeout(() => {
        console.log("archivo descargado")
        callback()
    }, 2500)
}
descargarArchivo("archivo123", () => {
    console.log("callback post descarga")
})

// 9. Crea una función que reciba una lista de nombres y una función callback, y la aplique a cada nombre.
let nombres = ["lilith", "cris", "kenneth"]
function aplicNombres(arr, callback) {
    arr.forEach(el => {
        callback(el)
    })
}
aplicNombres(nombres, nombre => {
    console.log("Hola", nombre)
})

// 10. Explica con un comentario qué es el event loop y por qué `setTimeout(..., 0)` no se ejecuta inmediatamente.
// El event loop gestiona cuándo se ejecutan tareas síncronas y asíncronas.
// Las tareas asíncronas van a la "cola de tareas" y esperan a que el hilo principal esté libre.
