// CLASSES

// CREATE CLASS
class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// CREATE INSTANCE
let person1 = new Person("Cris", 27, "crisilto")
let person2 = new Person("Raúl", 35, "aku")
console.log(person1)
console.log(person2)

// TYPE
console.log(typeof person1) // Object

// DEFAULT VALUES
class DefaultPerson {
    constructor(name = "No name", age = 0, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}
let person3 = new DefaultPerson("Cris")
console.log(person3)

// ADD PROPERTIES
person3.alias = "default"

// ACCESS TO PROPERTIES
console.log(person3.alias)
console.log(person3["alias"])

// FUNCTIONS

class WalkingPerson {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk() {
        console.log(`${this.name} walks`)
    }
}

let person4 = new WalkingPerson("Kenneth", 1, "Kennen")
console.log(person4)
person4.walk()

// PRIVATE PROPERTIES
class PrivatePerson {
    #bank
    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }
}

let person5 = new Person("Lilith", 3, "Lily", "IBAN12345678")

console.log(person5)
console.log(person5.bank) // undefined, we cannot access

// ADD NEW PROPERTY
person5.bank = "New public property, not the same as #bank"
console.log(person5)
console.log(person5.bank) // yes, we can access but it is NOT the same as #bank private one

// GETTERS AND SETTERS
class GetSetPerson {
    #name   //private but...
    #age    //private
    #alias  //private
    #bank   //private but...
    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name() { //with this function, we allow to receive the data
        return this.#name
    }
    set bank(newBank) { //with this function, we allow to update the data
        return this.#bank = newBank
    }
    get bank() { //so we can see the update thanks to the set function
        return this.#bank
    }
}

let person6 = new GetSetPerson("Rocky", 14, "Rockyto", "IBAN123456789")
console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456"
console.log(person6.bank)

// CLASS INHERITANCE
class Animal {
    constructor(name) {
        this.name = name
    }
    sound() {
        console.log("Generic sound")
    }
}

class Dog extends Animal {
    sound() {
        console.log("Guau") // we can overwrite an inherited property
    }
    run() {
        console.log("The dog runs")
    }
}

let myDog = new Dog("Crisdog")
console.log(myDog)
myDog.sound()
myDog.run()

class Fish extends Animal {
    constructor(name, size) {
        super(name)
        this.size = size
    }
    swim() {
        console.log("The fish swims")
    }
}

let myFish = new Fish("Crisfish", 12)
console.log(myFish)
myFish.sound() // inherits from parent class
// myFish.run() // this is a dog's property
myFish.swim()

// STATIC METHODS
class MathOperations {
    static sum(a, b) {
        return a + b
    }
    static sub(a, b) {
        return a - b
    }
    static mult(a, b) {
        return a * b
    }
    static div(a, b) {
        return a / b
    }
}
// with static we dont create separated instances
console.log(MathOperations.sum(5, 10)) // so we can access directly
console.log(MathOperations.sub(5, 10)) 
console.log(MathOperations.mult(5, 10)) 
console.log(MathOperations.div(5, 10)) 