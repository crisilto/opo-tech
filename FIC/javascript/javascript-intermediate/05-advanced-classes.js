//CLASES AVANZADAS
class Person { //define una plantilla para crear objetos de tipo Person
    constructor(name, age) { //método especial que se ejecuta cuando haces new
        this.name = name
        this.age = age
    }

    greet() { //método normal de la clase. Todos los objetos de tipo Person tendrán este método disponible
        console.log(`hola, soy ${this.name}`)
    }
}

const person = new Person("fay", 26)
person.greet()

//Aquí lo que haces es añadir un método directamente a la instancia person, no a la clase
person.sayAge = function () {
    console.log(`tengo ${this.age} años`)
}
person.sayAge()

//resumen
//  -los métodos dentro de la clase (greet, sayAge) -> disponibles para todas las instancias
//  -los métodos añadidos fuera (person.sayAge = function...) -> solo para esa instancia concreta

//CLASES ABSTRACTAS
//una clase abstracta es una clase que no puede instanciarse directamente y que sirve de plantilla para que otras clases hereden de ella
//JS no tiene clases abstractas nativas, pero podemos simularlas:

class Animal {
    constructor(name) {
        if (new.target === Animal) { //comprueba si alguien está intentando instanciar directamente la clase Animal
            throw new Error("no se puede instanciar una clase abstracta") //si sí, lanza un error
        }
        this.name = name
    }

    makeSound() {
        throw new Error("este metodo tiene que ser implementado por la subclase") //tb lanza un error, pq obliga a las subclases a sobrescribirlo
    }
}
// Error
// const animal = new Animal("cris")
// console.log(animal)

//cómo se usa de verdad-> HERENCIA CON EXTENDS
//POLIMORFISMO
//capacidad de las clases derivadas de una misma base (clase abstracta), 
// podremos implementar métodos con un mismo nombre pero con comportamientos diferentes

class Dog extends Animal {
    constructor(name) {
        super(name) // llama al constructor de Animal
    }

    makeSound() {
        console.log(`${this.name} dice: guau!`)
    }
}
const dog = new Dog("Toby")
dog.makeSound() // "Toby dice: guau!"

class Cat extends Animal {
    constructor(name) {
        super(name)
    }

    makeSound() {
        console.log(`${this.name} dice: miau!`)
    }
}
const cat = new Cat("Michi")
cat.makeSound() // "Michi dice: miau!"

//Dog y Cat heredan de Animal, pero están obligadas a implementar makeSound()
//si no lo hiciesen y llamasemos a makeSound() saltaría el error del padre

//resumen
//new.target se usa para impedir crear instancias de la clase padre
//se usa un método que lanza un error para simular que debe ser implementado
//extends+super permiten que las subclases hereden del padre

//MIXINS
//técnica avanzada que permite compartir funcionalidades entre múltiples clases sin necesidad de usar herencia múltiple
//promueve la reutilización de código de manera flexible y evita estructuras rígidas de herencia
//gran opción cuando varias clases comparten una capacidad pero no tienen una relación directa entre sí

//mixin-> colección de métodos que se pueden "mezclar" en otras clases
const FlyMixin = {
    fly() {
        console.log(`${this.name} is flying`) //FlyMixin tiene el método fly()
    }
}
//clases base
class Bird extends Animal { }
class Dragon extends Animal { }
//asignamos el mixin a Bird
Object.assign(Bird.prototype, FlyMixin) //copia el método fly() dentro del prototype de Bird (las instancias de Bird tienen acceso a fly())
const bird = new Bird("crisbird")
console.log(bird.name)
bird.fly()
//asignamos el mixin a Dragon
Object.assign(Dragon.prototype, FlyMixin)
const dragon = new Dragon("crisdragon")
console.log(dragon.name)
dragon.fly()
//tanto un Bird como un Dragon pueden volar, sin necesidad de compartir la misma herencia directa más allá de Animal

//ejemplo
//LoggerMixin-> para que cualquier clase pueda loguear datos sin necesidad de heredar de un Logger
const LoggerMixin = {
    log(message) {
        console.log(`[${this.name}]: ${message}`)
    }
}
class User {
    constructor(name) {
        this.name = name
    }
}
class Product {
    constructor(name) {
        this.name = name
    }
}
//añadimos el mixin a ambas clases
Object.assign(User.prototype, LoggerMixin)
Object.assign(Product.prototype, LoggerMixin)
//creamos instancia user
const user = new User("fay")
user.log("logged in")
//creamos instancia product
const product = new Product("fridge")
product.log("added to cart")

//resumen mixin
//  -objeto que contiene métodos o propiedades que luego se pueden inyectar en una clase
//  -sirve para compartir funcionalidades entre clases distintas, sin necesidad de que esas clases tengan relación en una jerarquía de herencia
//  -Object.assign(Class.prototype, Mixin)

//PATRÓN SINGLETON
//  -patrón que asegura que solo exista una única instancia de una clase en toda la aplicación
//  -siempre que se intenta crear una instancia en realidad devuelve la misma ya creada
//  -se usa mucho en configuraciones globales(ej: idioma de la app), sesiones de usuario, conexiones a bases de datos, loggers globales(único punto de escritura en consola o archivos),---
class Session {
    constructor(name) {
        if (Session.instance) {
            return Session.instance //si ya existe, devuelve la misma
        }
        this.name = name
        Session.instance = this //guardar la primera instancia
    }
}
const session1 = new Session("fay")
const session2 = new Session()
console.log(session1)
console.log(session2)
//session1 se crea con fay, cuando se intenta crear session2 el constructor detecta que ya hay una instancia (Session.instance) y devuelve esa misma, por eso ambas variables apuntan al mismo objeto

//ejemplo
class Config {
    constructor(settings) {
        this.settings = settings
    }

    static getInstance(settings) {
        if (!Config.instance) {
            Config.instance = new Config(settings)
        }
        return Config.instance
    }
}
const config1 = Config.getInstance({ lang: "es", theme: "dark" })
const config2 = Config.getInstance({ lang: "en", theme: "light" })
console.log(config1.settings)
console.log(config2.settings)
console.log(config1 === config2)
//resumen
//Singleton garantiza una única instancia de una clase
//se logra guardando la instancia como propiedad estática de la clase
//muy útil para sesiones, configuración, logging, base de datos,...

//SYMBOL
//tipo de dato primitivo que garantiza que cada valor creado sea único e inmutable, incluso si tienen la misma descripción
//usado para crear propiedades privadas o únicas dentro de una clase
const ID = Symbol("id") //definimos un Symbol que es usado como clave de propiedad en la clase Usuario
//aunque se escriban varios Symbol("id") cada uno será único, nunca iguales.
class Usuario {
    constructor(name) {
        this.name = name
        this[ID] = Math.random() //asegura que cada objeto Usuario tenga un identificador único
    }
    getId() { //exponer el valor del Symbol ID de forma controlada
        return this[ID]
    }
}
const usuario = new Usuario("fay")
console.log(usuario.name)
console.log(usuario[ID]) //se accede directamente, pero desde fuera solo funciona porque tenemos la referencia al Symbol que usamos, si no sería imposible acceder (ni con Object.keys, ni con for...in)
console.log(usuario.getId())
//lo siguiente funciona porque seguimos usando el mismo símbolo ID que definimos al inicio.
usuario[ID] = 12345
console.log(usuario[ID])
//pero con un código externo que no tenga esa referencia no se podría modificar ni leer la propiedad
console.log(Object.keys(usuario))
console.log(Object.getOwnPropertyNames(usuario))
console.log(Object.getOwnPropertySymbols(usuario))
//Ventajas de usar Symbol:
//  -evitar colisiones de nombres entre propiedades
//  -sirve como pseudo-"privacidad": nadie puede acceder sin tener la referencia al Symbol
//  -es útil en librerías grandes o patrones avanzados, donde se quiera garantizar propiedades únicas

//para reforzar la privacidad total (que nadie pueda ni ver el Symbol en getOwnPropertySymbols), se suele usar # (campos privados de clase modernos)
class Usuario2 {
    #id
    constructor(name) {
        this.name = name
        this.#id = Math.random()
    }
    getId() {
        return this.#id
    }
}
const usuario2 = new Usuario2("cris")
console.log(usuario2.getId()) // accede
//console.log(usuario2.#id) // Property '#id' is not accessible outside class 'Usuario2' because it has a private identifier.ts(18013)

//INSTANCEOF
//manera de revisar instancias
//instanceof no compara clases directamente, sino que sigue la cadena de prototipos:
class Car { }
const car = new Car()
console.log(car === Car) //false
console.log(car instanceof Car) //true. // Internamente → busca si Car.prototype está en la cadena de prototipos de car
//ejemplo extra
console.log(car instanceof Object) //true pq todo objeto hereda de Object
console.log(car instanceof Array) //false
console.log(bird instanceof Bird) //true
console.log(bird instanceof Animal) //true por herencia
console.log(bird instanceof Dragon) //false

//truco avanzado
//si se cambia el prototipo de un objeto manualmente, instanceof puede dar sorpresas
function Persona() { }
const p = new Persona()

console.log(p instanceof Persona) // true

Object.setPrototypeOf(p, {})
console.log(p instanceof Persona) // false, porque le cambiamos el prototipo

//CREATE
//permite crear un nuevo objeto basado en un prototipo existente, sin necesidad de usar el operador new
const anotherCar = Object.create(Car.prototype)
//crea un objeto vacío ({}) pero con su proto interno (__proto__) apuntando a Car.prototype
//no ejecuta el constructor de Car
console.log(anotherCar instanceof Car) //true porque en la cadena de prototipos de anotherCar está Car.prototype
//diferencia con new Car():
//  -el que se crea con new Car() ejecuta el constructor de Car y devuelve un objeto ya inicializado
//  -el que se crea con create solo enlaza el prototipo, no ejecuta el constructor, lo cual es ideal para un objeto "en crudo" con el mismo prototipo sin inicialización
//ejemplo
// class Car {
//   constructor(brand) {
//     this.brand = brand
//   }
//   drive() {
//     console.log(`${this.brand} is driving`)
//   }
// }

// const car1 = new Car("Toyota")
// console.log(car1.brand) // "Toyota"

// const car2 = Object.create(Car.prototype)
// console.log(car2.brand) // undefined (no pasó por el constructor)
// car2.drive()            // ❌ error → this.brand is undefined

//con Object.create hay que rellenar las propiedades manualmente si se quiere que funcione como un objeto real de esa clase


//PROXYS
//herramienta avanzada que permite interceptar y personalizar el comportamiento de los objetos y clases
//controlar el acceso y la modificación de propiedades en tiempo real
//muy util para implementar validaciones automáticas, depuración, trazado de acceso, y otros controles de lógica sin modificar directamente la clase original
//es un "envoltorio" que se pone alrededor de un objeto o clase
//este envoltorio permite interceptar operaciones como:
//  -get-> cuando accedes a una propiedad
//  -set-> cuando modificas una propiedad
//  -tb hay más (has, deleteProperty, apply, construct...)
//permite personalizar el comportamiento sin cambiar la clase original
const proxy = {
    get(target, property) { //se ejecuta cada vez que account.algo
        console.log(`se accede a la propiedad ${property}`) //imprime a qué propiedad se accede
        return target[property] //devuelve el valor real
    },
    set(target, property, value) { //se ejecuta cada vez que account.algo = valor
        if (property === "balance" && value < 0) {
            throw new Error("el saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}
const account = new Proxy(new BankAccount(100), proxy)
//se envuelve una instancia de BankAccount con el Proxy
//toda interacción con account pasa por los traps get y set
console.log(account.balance)
account.balance = 50
console.log(account.balance)
// account.balance = -50 (error)

//caso práctico real
//se quiere registrar accesos para depuración o proteger datos sensibles
const user1234 = {
    name: "fay",
    password: "1234"
}
const userProxy = new Proxy(user, {
    get(target, prop) {
        if (prop === "password") {
            throw new Error("acceso denegado a la contraseña")
        }
        return target[prop]
    }
})
console.log(userProxy.name)
// console.log(userProxy.password) (lanza error)