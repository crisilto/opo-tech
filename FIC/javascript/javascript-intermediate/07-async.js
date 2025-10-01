//PROGRAMACIÓN ASÍNCRONA

//CÓDIGO SÍNCRONO
//se ejecuta línea por línea, en orden
//call stack-> cada función entra en la pila y se ejecuta hasta que termina
console.log("inicio")
console.log("codigo (puede tardar mas o menos)")
console.log("fin")


//EVENT LOOPS (bucle de eventos)
//js es single-threaded: solo ejecuta una cosa a la vez
//el event loop permite manejar tareas que tardan tiempo sin bloquear el hilo principal
//componentes 
//  1- call stack (pila de ejecución): donde se ejecutan funciones
//  2- web apis/node.js: para tareas que tardan (setTimeout, fetch, etc)
//  3- taks queue/microtask queues: donde esperan las tareas asíncronas a que la pila esté vacía

//flujo del event loop resumido
//  1- una función entra al call stack
//  2- si es asíncrona -> se delega a web api/node.js
//  3- cuando termina -> se mueve a task queue/microtask queue
//  4- callstak vacío -> se ejecuta la siguiente tarea de la cola
//  5- se repite el proceso


//CÓDIGO ASÍNCRONO
//callbacks
console.log("inicio")
setTimeout(() => { //se delega a la web api (sin bloquear el hilo principal)
    console.log("dos segundos después se ejecuta")
}, 2000)
console.log("fin")

//callback hell
function step1(callback) {
    setTimeout(() => {
        console.log("step1 done")
        callback()
    }, 1000);
}
function step2(callback) {
    setTimeout(() => {
        console.log("step2 done")
        callback()
    }, 1000);
}
function step3(callback) {
    setTimeout(() => {
        console.log("step3 done")
        callback()
    }, 1000);
}
//al anidar muchos callbacks, se vuelve ilegible y dificil de mantener
step1(() => {
    step2(() => {
        step3(() => {
            console.log("all steps done")
        })
    })
})


//PROMESAS
//representan una operación futura
//resolve: éxito
//reject: error

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = false
        if (ok) {
            resolve("success")
        } else {
            reject("error")
        }
    }, 4000)
})

promise
    .then(result => console.log(result))   // si va bien
    .catch(error => console.log(error))    // si hay error
    .finally(() => console.log("finally"))
//ventajas sobre callbacks: 
//  -más legible
//  -mejor manejo de errores
//  -encadenamiento fácil

//ENCADENAMIENTO DE PROMESAS
function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("step1 with promise done")
            resolve()
        }, 1000)
    })
}
function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("step2 with promise done")
            resolve()
        }, 1000)
    })
}
function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("step3 with promise done")
            resolve()
        }, 1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => console.log("all steps with promises done"))
//cada función devuelve una promesa
//se ejecutan una tras otra, de forma secuencial, sin anidaciones complicadas
//se pueden manejar errores globalmente con un .catch() al final


//ASYNC/AWAIT
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
//devuelve una promesa que se resuelve después de ms milisegundos
//es como decir: "espera este tiempo antes de continuar"
//ejemplo: await wait(5000) → espera 5 segundos.

async function process() {
    console.log("inicio del proceso")
    await wait(5000)
    console.log("proceso despues de 5seg")
    await wait(1000)
    console.log("proceso despues de 1seg mas")
    await wait(2000)
    console.log("proceso despues de 2seg mas")
    console.log("fin del proceso")
}
process()
//async:
//  -indica que la función siempre devolverá una promesa
//  -dentro se puede usar await
//await:
//  -pausa la ejecución solo dentro de esta función hasta que la promesa se resuelva
//  -no bloquea el hilo principal
//  -otros eventos o código fuera de process() siguen funcionando