// ========================================
// EJERCICIOS: PATRONES DE DISEÑO BÁSICOS
// ========================================

//----------------------------------------------------------
// 📦 MÓDULO
//----------------------------------------------------------

// 🧩 1. Crea un módulo contador (tipo IIFE) que tenga:
//    - una variable privada `cuenta`
//    - métodos públicos `incrementar()`, `decrementar()` y `ver()`
//    - que no se pueda acceder directamente a `cuenta`
const counter = (function () {
    let count = 0 // 🔒 private variable

    function increment() {
        count++
    }

    function decrement() {
        count--
    }

    function view() {
        return count
    }

    return {
        increment,
        decrement,
        view
    }
})()

counter.increment()
counter.increment()
console.log(counter.view()) // 👉 2
counter.decrement()
console.log(counter.view()) // 👉 1
console.log(counter.count) // 👉 undefined (not accessible)

// 🧩 2. Crea un módulo para manejar una lista de tareas:
//    - métodos: añadir, eliminar por índice, ver lista
//    - que la lista no sea accesible desde fuera
const taskList = (function () {
    let tasks = [] // 🔒 private array

    function add(task) {
        tasks.push(task)
    }

    function remove(index) {
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1)
        } else {
            console.log("invalid index")
        }
    }

    function view() {
        return [...tasks] // devolvemos una copia para evitar modificación externa
    }

    return {
        add,
        remove,
        view
    }
})()

taskList.add("wash dishes")
taskList.add("study JS")
console.log(taskList.view()) // 👉 [ 'wash dishes', 'study JS' ]
taskList.remove(0)
console.log(taskList.view()) // 👉 [ 'study JS' ]
console.log(taskList.tasks) // 👉 undefined (no se puede acceder directamente)

//----------------------------------------------------------
// 👤 SINGLETON
//----------------------------------------------------------

// 🧩 3. Crea una clase `Logger` que implemente el patrón Singleton.
//    - debe tener un método `log(mensaje)` que agregue el mensaje a un array interno
//    - otro método `verLogs()` para ver los mensajes guardados
class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance
        }

        this.logs = []
        Logger.instance = this
    }

    log(message) {
        this.logs.push(message)
    }

    viewLogs() {
        return [...this.logs]
    }
}

// 🧩 4. Crea dos instancias de `Logger` y demuestra que apuntan al mismo objeto
//    (los mensajes logueados desde una deben aparecer en la otra)
const logger1 = new Logger()
logger1.log("first log")

const logger2 = new Logger()
logger2.log("second log")

console.log(logger1.viewLogs()) // 👉 [ 'first log', 'second log' ]
console.log(logger2.viewLogs()) // 👉 [ 'first log', 'second log' ]

console.log(logger1 === logger2) // 👉 true

//----------------------------------------------------------
// 🏭 FACTORY FUNCTION
//----------------------------------------------------------

// 🧩 5. Crea una función `crearProducto(nombre, precio)` que devuelva un objeto producto.
//    - Debe tener un método `mostrar()` que diga "Producto: X, Precio: Y€"
function createProduct(name, price) {
    return {
        name,
        price,
        show() {
            console.log(`Product: ${this.name}, Price: ${this.price}€`)
        }
    }
}

const book = createProduct("Metamorphosis", 12.5)
book.show() // 👉 Product: Metamorphosis, Price: 12.5€

const pen = createProduct("Blue Pen", 1)
pen.show() // 👉 Product: Blue Pen, Price: 1€

// 🧩 6. Crea una factory function para crear usuarios con roles.
//    - debe aceptar `nombre` y `rol`
//    - si el rol es "admin", el objeto devuelto debe tener un método `borrarUsuario()`
//    - si el rol es "user", no debe tener ese método
function createUserWithRole(name, role) {
    const user = {
        name,
        role,
        greet() {
            console.log(`Hi, I'm ${this.name} and my role is ${this.role}`)
        }
    }

    if (role === "admin") {
        user.deleteUser = function (userName) {
            console.log(`${this.name} deleted user ${userName}`)
        }
    }

    return user
}

const admin = createUserWithRole("cris", "admin")
admin.greet()               // 👉 Hi, I'm cris and my role is admin
admin.deleteUser("fay")     // 👉 cris deleted user fay

const regularUser = createUserWithRole("lucas", "user")
regularUser.greet()         // 👉 Hi, I'm lucas and my role is user
// regularUser.deleteUser("someone") // ❌ TypeError: regularUser.deleteUser is not a function

//----------------------------------------------------------
// 🛰️ OBSERVER / PUB-SUB
//----------------------------------------------------------

// 🧩 7. Crea una clase `EmisorEventos`:
//    - método `suscribirse(fn)` para añadir listeners
//    - método `emitir(mensaje)` para notificar a todos los listeners
class EventEmitter {
    constructor() {
        this.listeners = []
    }

    subscribe(fn) {
        this.listeners.push(fn)
    }

    unsubscribe(fn) {
        this.listeners = this.listeners.filter(listener => listener !== fn)
    }

    emit(message) {
        this.listeners.forEach(fn => fn(message))
    }
}

// 🧩 8. Crea 3 funciones que hagan console.log de distintos mensajes.
//    - Suscríbelas al emisor anterior
//    - Lanza varios mensajes con `emitir()`
function logger(msg) {
    console.log(`[logger] received: ${msg}`)
}

function notifier(msg) {
    console.log(`[notifier] new message: ${msg}`)
}

function stats(msg) {
    console.log(`[stats] counting message: ${msg}`)
}

const emitter = new EventEmitter()

// subscribe all
emitter.subscribe(logger)
emitter.subscribe(notifier)
emitter.subscribe(stats)

emitter.emit("hello world")
emitter.emit("new notification")

// 🧩 9. BONUS: Añade al patrón anterior un método `desuscribirse(fn)`
//    - Debe quitar una función del array de listeners
emitter.unsubscribe(stats)
emitter.emit("should not reach stats")

// 🧩 10. BONUS: Crea un ejemplo de uso realista del patrón Observer simulando:
//    - Un "chat" donde varios usuarios escuchan nuevos mensajes del canal y los imprimen
class ChatChannel {
    constructor() {
        this.users = []
    }

    join(user) {
        this.users.push(user)
    }

    leave(user) {
        this.users = this.users.filter(u => u !== user)
    }

    send(message, from) {
        this.users.forEach(user => {
            if (user !== from) {
                user.receive(message, from.name)
            }
        })
    }
}

function createUser(name) {
    return {
        name,
        receive(msg, from) {
            console.log(`[${name}] got message from ${from}: ${msg}`)
        }
    }
}

const channel = new ChatChannel()

const alice = createUser("Alice")
const bob = createUser("Bob")
const cris = createUser("Cris")

channel.join(alice)
channel.join(bob)
channel.join(cris)

channel.send("Hi everyone!", cris)
// 👉 Alice, Bob reciben el mensaje  
