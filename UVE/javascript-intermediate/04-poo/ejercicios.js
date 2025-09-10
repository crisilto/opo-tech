// ============================================
// EJERCICIOS: PROGRAMACIÓN ORIENTADA A OBJETOS PROFUNDA
// ============================================

// 🧩 1. Crea una clase `Libro` con propiedades: título, autor y año.
// Añade un método `descripcion()` que muestre una frase como:
// "El libro '1984' fue escrito por George Orwell en 1949."
class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
    description() {
        console.log(`The book ${this.title} was written by ${this.author} in ${this.year}`)
    }
}
const myBook = new Book("metamorphosis", "kafka", 1915)
myBook.description()

// 🧩 2. Crea una clase `Usuario` con un método `saludar()` que diga su nombre.
// Luego crea una clase `Admin` que extienda `Usuario` y añada un método `banearUsuario()`.
class User {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`hello ${this.name}`)
    }
}
class Admin extends User {
    constructor(name) {
        super(name)
    }
    banUser(userName) {
        console.log(`${this.name} has banned ${userName}`);
    }
}
const myAdmin = new Admin("cris")
myAdmin.greet()
myAdmin.banUser("fay")

// 🧩 3. En la clase `Admin` del ejercicio anterior, usa `super()` para heredar el constructor del padre.

// 🧩 4. Añade un método estático a una clase `MathHelper` llamado `cuadrado(n)` que devuelva el cuadrado del número.
class MathHelper {
    static square(n) {
        console.log(Math.pow(n, 2))
    }
}
MathHelper.square(3)

// 🧩 5. Crea una clase `Cuenta` con una propiedad privada `#saldo`.
// Añade métodos públicos para `ingresar()`, `retirar()` y `verSaldo()`.
class Account {
    #balance = 0
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount
        } else {
            console.log("error")
        }
    }
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.#balance) {
                this.#balance -= amount
            } else {
                console.log("error")
            }
        } else {
            console.log("error")
        }
    }
    checkBalance() {
        return this.#balance
    }
}

const cuenta = new Account()
cuenta.deposit(100)
console.log(cuenta.checkBalance()) // 👉 100
cuenta.withdraw(50)
console.log(cuenta.checkBalance()) // 👉 50
cuenta.withdraw(100) // ❌ 

// 🧩 6. Crea una clase `Vehiculo` con un método `arrancar()` que muestre un mensaje.
// Luego crea una clase `Moto` que extienda `Vehiculo` y sobrescriba ese método con otro mensaje distinto.
class Vehicle {
    start() {
        console.log(`the vehicle is starting`)
    }
}
const myVehicle = new Vehicle()
myVehicle.start()

class Moto extends Vehicle {
    start() {
        console.log(`the moto is starting`)
    }
}
const myMoto = new Moto()
myMoto.start()

// 🧩 7. Usa composición para crear un objeto `robotAcuatico` que pueda caminar y nadar,
// usando dos objetos separados: `caminador` y `nadador`.
const walker = {
    toWalk() {
        console.log("walks")
    }
}
const swimmer = {
    toSwim() {
        console.log("swims")
    }
}
const aquaticRobot = {
    ...walker,
    ...swimmer
}
aquaticRobot.toWalk()
aquaticRobot.toSwim()

// 🧩 8. BONUS: Crea una clase `Persona` con nombre y edad, y otra clase `Programador` que extienda Persona
// y añada una propiedad `lenguajeFavorito`.
// Implementa un método `presentarse()` que diga nombre, edad y lenguaje.
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
class Developer extends Person {
    constructor(name, age, favoriteLanguage) {
        super(name, age)
        this.favoriteLanguage = favoriteLanguage
    }
    introduce() {
        console.log(`${this.name} has ${this.age} years old and its favorite language is ${this.favoriteLanguage}`)
    }
}
const myDev = new Developer("frankie", 31, "java")
myDev.introduce()

// 🧩 9. BONUS: Usa clases y composición juntas:
// Crea una clase `Animal` con propiedad `nombre`,
// y luego crea una función `mezclarConVolador()` que devuelva un nuevo objeto con método `volar()`
// y combínala con una instancia de `Animal`.
class Animal {
    constructor(name) {
        this.name = name
    }
}
function mixWithFlying(object) {
    return {
        ...object,
        fly() {
            console.log(`${object.name} is flying`)
        }
    }
}

const cat = new Animal("michi")
const flyingCat = mixWithFlying(cat)
flyingCat.fly() // 👉 michi is flying