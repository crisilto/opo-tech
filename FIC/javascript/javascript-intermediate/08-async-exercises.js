// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
function greet(name, callback) {
    setTimeout(() => {
        callback(name)
    }, 2000)
}
greet("Mochi", (name) => {
    console.log(`Hola, ${name}`)
})

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
//callback hell
function task1(callback) {
    setTimeout(() => {
        console.log("task1")
        callback()
    }, 1000)
}
function task2(callback) {
    setTimeout(() => {
        console.log("task2")
        callback()
    }, 1000)
}
function task3(callback) {
    setTimeout(() => {
        console.log("task3")
        callback()
    }, 1000)
}
task1(() => {
    task2(() => {
        task3(() => {
            console.log("all steps done")
        })
    })
})

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "número impar".
function oddOrEven(num) {
    return new Promise((resolve, reject) => {
        const isEven = num % 2 === 0
        if (isEven) {
            resolve("numero par")
        } else {
            reject("numero impar")
        }
    })
}
const numbers = [10, 13, 5, 6]
numbers.forEach(n => {
    oddOrEven(n)
        .then(result => console.log(`${n}: ${result}`))
        .catch(error => console.log(`${n}: ${error}`))
});

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
function firstTask() {
    return new Promise((resolve, reject) => { //devuelve un pbjeto Promise
        setTimeout(() => { //simular una tarea que tarda 1seg
            const ok = true
            if (ok) { //la promesa terminó con éxito
                resolve("Primera tarea completada") //este es el valor de la respuesta
            } else {
                reject("Error en la primera tarea") //si hubiera un problema...
            }
        }, 1000)
    })
}
function secondTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ok = true
            if (ok) {
                resolve("Segunda tarea completada")
            } else {
                reject("Error en la segunda tarea")
            }
        }, 2000)
    })
}
function thirdTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ok = true
            if (ok) {
                resolve("Tercera tarea completada")
            } else {
                reject("Error en la tercera tarea")
            }
        }, 1500)
    })
}

firstTask()
    .then(result => {
        console.log(result)
        return secondTask()
    })
    .then(result => {
        console.log(result)
        return thirdTask()
    })
    .then(result => {
        console.log(result)
        console.log("Todas las tareas completadas ✅")
    })
    .catch(error => console.log(error))


// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
async function executeTasks() { //al marcar la func como async dentro de ella se puede usar await
    try {
        const result1 = await firstTask() //ejecuta firstTalk(), espera a que su promesa termine, y guarda su resultado en result1
        console.log(result1, " with async await")
        //no sigue ejecutando las líneas siguientes hasta que firstTalk() termine
        //las tareas se ejecutan en orden
        const result2 = await secondTask()
        console.log(result2, " with async await")

        const result3 = await thirdTask()
        console.log(result3, " with async await")

        console.log("Todas las tareas completadas ✅, with async await")
    } catch (error) { //si alguna promesa hace reject(...) en lugar de resolve(...) se produce un error
        console.log(error)
        //con trycatch se capturan errores en async/await, igual que en las promesas se hace con .catch(...)
    }
}
executeTasks()

//promesas = representan un trabajo que se completará en el futuro
//await = hace que el código se detenga hasta que esa promesa dé un resultado (resolve/reject)
//el orden está garantizado, porque el código espera una a una

//ejemplo con pizzería
function pedirPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ok = false
            ok ? resolve("pizza lista") : reject("se quemó la pizza")
        }, 2000);
    })
}
async function cenar() {
    try {
        console.log("voy a pedir la pizza...")
        const pizza = await pedirPizza() //espero a que llegue la pizza
        console.log(pizza) //cuando llega, me la como
        console.log("cena terminada")
    } catch (e) {
        console.log(e) //si algo falla (pizza quemada) se captura aquí
    }
}
cenar()

//varias tareas
function entrante() {
    return new Promise(res => setTimeout(() => res("Entrante listo 🥗"), 1000))
}
function pizza() {
    return new Promise(res => setTimeout(() => res("Pizza lista 🍕"), 2000))
}
function postre() {
    return new Promise(res => setTimeout(() => res("Postre listo 🍰"), 1500))
}

async function cenarCompleto() {
    console.log("Inicio de la cena")

    const primero = await entrante()
    console.log(primero)

    const segundo = await pizza()
    console.log(segundo)

    const tercero = await postre()
    console.log(tercero)

    console.log("Cena completada ✅")
}
cenarCompleto()

//una promesa = un pedido que tarda un tiempo
//await = te quedas esperando a que llegue el pedido antes de seguir
//try...catch = sirve para manejar errores si algo falla
//gracias a todo esto el código se lee en orden, como una lista de pasos


// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`llamada API para id ${id}...`)
            if (id < 5) {
                resolve({ id, nombre: `Usuario ${id}` })
            } else {
                reject(`Usuario ${id} no encontrado`)
            }
        }, 2000)
    })
}

async function processUsers(ids) {
    for (const id of ids) { //for...of para iterar secuencialmente sobre cada ID
        try {
            const user = await getUser(id) //espera 2" hasta que la promesa se resuelva o rechace
            //gracias a await cada llamada a la API espera a la anterior antes de ejecutarse 
            console.log("✅ Usuario encontrado:", user)
        } catch (e) {
            console.log("❌ Error:", e)
        }
    }
}

const idsToCheck = [1, 3, 5, 2, 6] //array de IDs que queremos probar
processUsers(idsToCheck)


// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
console.log("Inicio")
setTimeout(() => console.log("setTimeout ejecutado"), 0)
Promise.resolve().then(() => console.log("Promesa resuelta"))
console.log("Fin")
//1-Call stack: empieza a ejecutar el código síncronamente línea por línea
//  ·console.log("Inicio") se imprime Inicio
//  ·setTimeout(...) se registra la función en la TaskQueue con delay 0ms pero no se ejecuta todavía
//  ·Promise.resolve().then(...) se registra el .then en la MicrotaskQueue pero tampoco se ejecuta de inmediato
//  ·console.log("Fin") se imprime Fin
//2-La Call stack se vacía, entonces se procesan las microtareas primero (promesas)
//  ·Promise.resolve().then(...) imprime Promesa resuelta
//3-Luego se procesan las macrotareas que estaban en la cola
//  ·setTimeout(...) imprime setTimeout ejecutado

//aunque setTimeout tenga 0ms, siempre se ejecuta después de las microtareas
//las promesas tienen prioridad sobre setTimeout en el event loop

//síncrono-> console.log
//microtask-> Promise
//macrotask-> setTimeout


// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function promise1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("first promise done")
            resolve("result1")
        }, 2500)
    })
}
function promise2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("second promise done")
            resolve("result2")
        }, 1000)
    })
}
function promise3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("third promise done")
            resolve("result3")
        }, 3000)
    })
}

Promise.all([promise1(), promise2(), promise3()])
    .then(values => {
        console.log("All done", values)
    })

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar 
// la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" 
// en consola.
function waitSeconds(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000);
    })
}
async function process() {
    await waitSeconds(3)
    console.log("tiempo finalizado")
}
process()

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, 
//       o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//función que simula el ATM
function automatedTellerMachine() {
    let balance = 500 //saldo inicial
    //devuelve el saldo después de 1s
    function checkBalance() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(balance)
            }, 1000);
        })
    }
    //intenta retirar dinero después de 2s
    function withdrawMoney(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount <= balance) {
                    balance -= amount
                    resolve(balance)
                } else {
                    reject("saldo insuficiente")
                }
            }, 2000);
        })
    }
    //devolvemos las funciones para poder llamar desde fuera
    return { checkBalance, withdrawMoney }
}

//función async que simula la operación de un usuario
async function processATM() {
    //obtenemos las funciones del cajero
    const atm = automatedTellerMachine()

    try {
        let saldo = await atm.checkBalance()
        console.log(`Saldo disponible: ${saldo}$`)
        console.log("Retirando 300$...")
        saldo = await atm.withdrawMoney(300)
        console.log(`Operación exitosa, saldo restante: ${saldo}$`)
        console.log("Retirando 300$...")
        saldo = await atm.withdrawMoney(300)
        console.log(`Operación exitosa, saldo restante: ${saldo}$`)
    }catch(e){
        console.log(`Error: ${e}`)
    }
}

processATM()

// automatedTellerMachine() devuelve un objeto con las funciones checkBalance y withdrawMoney.
// checkBalance() y withdrawMoney(amount) usan setTimeout y promesas, simulando el retraso de la operación.
// processATM() usa async/await para esperar el resultado de cada operación antes de pasar a la siguiente.
// Tras el primer retiro, el saldo se actualiza. El segundo retiro falla porque ya no hay suficiente dinero y cae en el catch.