// 1. AGREGA UNA FUNCIÓN AL PROTOTIPO DE UN OBJETO

function Toy(name, type, size) {
    this.name = name
    this.type = type
    this.size = size
}
//  Toy es una función constructora
//  Con new Toy(...) se crean objetos que heredan de Toy.prototype
//  Cada instancia de new_toy tendrá sus propias propiedades name, type y size
Toy.prototype.greet = function () {
    return `hello i'm ${this.name}, i'm a ${this.type} toy and my size is ${this.size}`
}
//  En vez de definir greet dentro del constructor lo definimos en el prototipo
//  Todas las instancias de Toy compartirán un único greet en memoria, en lugar de duplicarlo en cada objeto
//  Mucho más eficiente
let toy1 = new Toy("Boo", "ghost", "L")
let toy2 = new Toy("Mochi", "panda", "S")
let toy3 = new Toy("Pumpkin", "pumpkin", "M")
console.log(toy1.greet())
console.log(toy2.greet())
console.log(toy3.greet())
// extra-> agregar un nuevo método al prototipo después
Toy.prototype.describe = function () {
    return `${this.name} is a ${this.size}-sized ${this.type} toy`
}
//usar el nuevo método en todas las instancias (incluso las creadas con anterioridad)
console.log(toy1.describe())
console.log(toy2.describe())
console.log(toy3.describe())
//Aunque toy1, toy2 y toy3 ya estaban creados, ahora todos tienen acceso al método describe gracias al prototipo
//resumen:
//  -los métodos en el prototipo son compartidos por todas las instancias
//  -se pueden añadir nuevos métodos al prototipo en cualquier momento y automáticamente se vuelven accesibles para todos los objetos creados con ese constructor


// 2. CREA UN OBJETO QUE HEREDE DE OTRO

let person = {
    name: "cris",
    age: 27,
    canBreathe: true,
    canWalk: true,
    greet() {
        console.log(`the person ${this.name} is ${this.age} years old`)
    }
}
let girlfriend = Object.create(person)
girlfriend.name = "fay"
girlfriend.age = 26
girlfriend.greet()
console.log(girlfriend.canBreathe) // true (heredado de person)
console.log(girlfriend.__proto__ === person) // true (person es su prototipo)

let bestFriend = Object.create(person)
bestFriend.name = "lys"
bestFriend.age = 28
bestFriend.greet()
console.log(bestFriend.canBreathe) // true (heredado de person)
console.log(bestFriend.__proto__ === person) // true (person es su prototipo)


// 3. DEFINE UN MÉTODO DE INSTANCIA EN UN OBJETO

//función que vive dentro de un objeto a la que se accede a través de la instancia del objeto, no desde fuera

//función literal
let dog = {
    name: "rocky",
    age: 14,
    bark() {
        console.log(`${this.name} is saying guau guau`)
    }
}
dog.bark()
//bark() es un método de instancia, porque está definido dentro del objeto dog.

//función constructora
function Car(brand, model) {
    this.brand = brand
    this.model = model
    this.honk = function () {
        console.log(`${this.brand} ${this.model} says: beep beep!`)
    }
}
let car1 = new Car("Toyota", "Corolla")
let car2 = new Car("Tesla", "Model 3")
car1.honk()
car2.honk()
//honk() es un método de instancia que pertenece a cada Car.

//clase
class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    greet() {
        console.log(`Hi, I'm ${this.name} and my email is ${this.email}`)
    }
}
const user1 = new User("Cristina", "cris@email.com")
user1.greet()
//greet() es un método de instancia que se puede llamar desde cualquier usuario

//cualquier función definida dentro del objeto (literal, constructor o clase) y que se invoque con obj.metodo() se considera un método de instancia


// 4. HAZ USO DE GET Y SET EN UN OBJETO

//objeto literal
let cat = {
    name: "lilith",
    age: 4,
    get catName() {
        return this.name
    },
    set catName(newName) {
        this.name = newName
    }
}
console.log(cat.catName)
cat.catName = "mochi"
console.log(cat.catName)
//se define get y set dentro del objeto

//constructor + Object.defineProperty
function Cat(name, age) {
    this.name = name
    this.age = age
}
Object.defineProperty(Cat.prototype, "catName", {
    get: function () {
        return this.name
    },
    set: function (newName) {
        this.name = newName
    }
})
let cat1 = new Cat("lilith", 4)
console.log(cat1.catName)
cat1.catName = "mochi"
console.log(cat1.catName)
//constructor tradicional añadiendo get y set al prototipo

//clase moderna
class Cat2 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    get catName() {
        return this.name
    }
    set catName(newName) {
        this.name = newName
    }
}
let cat2 = new Cat2("lilith", 4)
console.log(cat2.name)
cat2.catName = "mochi"
console.log(cat2.name)

//en los tres casos se accede como propiedad (cat.catName) y no como método (cat.getName()), porque eso es justo lo que diferencia get/set de una función normal.


// 5. UTILIZA LA OPERACIÓN ASSIGN EN UN OBJETO

let toy_core = { name: "naziroglu" }
let toy_details = { type: "toy", size: "M" }
let fullToy = Object.assign(toy_core, toy_details)
console.log(fullToy)
//notas Assign:
//  -el primer parámetro es el parámetro de destino el cual se modifica directamente
//  -si no se quiere mutar el objeto original, se puede crear uno nuevo en destino
//  -en caso de propiedades repetidas, las que estén más a la derecha sobrescriben a las de la izquierda
let myToy = Object.assign({}, toy_core, toy_details)
console.log(myToy)


// 6. CREA UNA CLASE ABSTRACTA
//no existen las clases abstractas en JS
//para simularlo:
//  -bloquear la instanciación directa con new.target
//  -se pueden implementar métodos y forzar su implementación en subclases
class Person {
    constructor(name, age, office) {
        if (new.target === Person) {
            throw new Error("you cannot instance, this is an abstract class")
        }
        this.name = name
        this.age = age
        this.office = office
    }
    greet() {
        throw new Error("this method can only be implemented by subclasses")
    }
}


// 7. UTILIZA POLIMORFISMO EN DOS CLASES DIFERENTES

class Developer extends Person {
    constructor(name, age, office, language) {
        super(name, age, office)
        this.language = language
    }
    greet() {
        console.log(`hi, I'm ${this.name}, I work as ${this.office} and code in ${this.language}`)
    }
}
const dev = new Developer("Cris", 27, "web developer", "JavaScript")
dev.greet()
// const p = new Person("Fay", 26, "engineer")
// lanzaría error porque Person es abstracta

class Teacher extends Person {
    constructor(name, age, office, assignature) {
        super(name, age, office)
        this.assignature = assignature
    }
    greet() {
        console.log(`hi, I'm ${this.name}, I work as ${this.office} and teach ${this.assignature}`)
    }
}
const teacher = new Teacher("fay", 26, "teacher", "english")
teacher.greet()

//greet() polimorfismo: mismo método, diferentes comportamientos en función de la clase

// 8. IMPLEMENTA UN MIXIN

const BreatheMixin = {
    breathe() {
        console.log(`${this.name} is breathing`)
    }
}
Object.assign(Developer.prototype, BreatheMixin)
Object.assign(Teacher.prototype, BreatheMixin)
dev.breathe()
teacher.breathe()
//el mismo mixin puede aportar funcionalidad a clases sin relación directa
const EatMixin = {
    eat(food) {
        console.log(`${this.name} is eating ${food}`)
    }
}
Object.assign(Developer.prototype, EatMixin)
Object.assign(Teacher.prototype, EatMixin)
dev.eat("pizza")
teacher.eat("pasta")


// 9. CREA UN SINGLETON

class Config {
    constructor(theme, language) {
        if (Config.instance) {
            return Config.instance //si ya existe, devuelve la misma instancia
        }
        this.theme = theme
        this.language = language
        Config.instance = this //guarda la instancia
    }
}
const config1 = new Config("dark", "en")
const config2 = new Config("light", "de")
console.log(config1)
console.log(config2)


// 10. DESARROLLA UN PROXY

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}
const account = new BankAccount(100)
console.log(account.balance) // 100

//registrar cada vez que se accede a balance

//evitar que se pueda poner saldo negativo

const handler = { //define trampas (get, set) que interceptan operaciones
    get(target, property) { 
        console.log(`se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property === "balance" && value < 0) {
            throw new Error("el saldo no puede ser negativo")
        }
        console.log(`se cambia ${property} a ${value}`)
        target[property] = value
        return true
    }
}
const accountProxy = new Proxy(new BankAccount(100), handler) //crea un envoltorio alrededor de obj
console.log(accountProxy.balance) //primero pasa por get
accountProxy.balance = 50 //primero pasa por set, donde se valida/modifica el comportamiento
console.log(accountProxy.balance)
// accountProxy.balance = -10 | Error: El saldo no puede ser negativo

//proxy-> portero inteligente que vigila cada acción sobre un objeto y decide qué permitir, qué bloquear o qué registrar



//EJERCICIOS EXTRA

// 1️⃣ Agrega un método al prototipo de una función constructora

// Enunciado:
// Crea una función constructora Book(title, author, pages).
// Agrega al prototipo un método describe() que devuelva:
// "Title: ..., Author: ..., Pages: ...".

// Extra: después de crear varias instancias, agrega otro método isLong() que devuelva true si tiene más de 300 páginas.

// 2️⃣ Crea un objeto que herede de otro

// Enunciado:
// Crea un objeto literal vehicle con propiedades wheels y move().
// Luego crea bike y car usando Object.create(vehicle), asigna propiedades propias y prueba que heredan move().

// 3️⃣ Método de instancia

// Enunciado:
// Crea una clase Laptop con brand y ram.
// Define un método de instancia specs() que muestre "Brand: ..., RAM: ...".
// Crea varias instancias y llama al método.

// 4️⃣ Usa getters y setters

// Enunciado:
// Crea un objeto literal rectangle con propiedades width y height.
// Define un getter area que devuelva el área y un setter square que permita establecer width y height al mismo valor.

// 5️⃣ Usa Object.assign

// Enunciado:
// Crea objetos baseConfig = {theme: "light"} y userConfig = {language: "es"}.
// Usa Object.assign para combinar ambos en un nuevo objeto finalConfig.

// 6️⃣ Clase abstracta simulada

// Enunciado:
// Crea una clase Shape que no pueda instanciarse directamente.
// Define un método area() que lance un error si no se implementa en subclases.

// Extra: Crea subclases Square y Circle que implementen area().

// 7️⃣ Polimorfismo

// Enunciado:
// Crea dos clases que hereden de Shape (Square y Circle).
// Define un método describe() en cada una que devuelva información diferente pero usando el mismo nombre de método.
// Crea instancias y llama a describe() para ver el comportamiento polimórfico.

// 8️⃣ Implementa un Mixin

// Enunciado:
// Crea un mixin LoggerMixin con un método log() que imprima:
// "Logging: ...".
// Aplica el mixin a las clases Square y Circle del ejercicio anterior.

// 9️⃣ Singleton

// Enunciado:
// Crea una clase Database que solo permita una instancia.
// Define propiedades como host y port.
// Prueba que aunque crees dos instancias, ambos objetos sean idénticos.

// 🔟 Proxy

// Enunciado:
// Crea una clase User con propiedades name y age.
// Crea un proxy que:

// No permita edades menores a 0 ni mayores a 120

// Muestre un mensaje cada vez que se accede a name o age

// Permita modificar los valores válidos