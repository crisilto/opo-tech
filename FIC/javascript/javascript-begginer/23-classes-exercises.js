// 1. Crea una clase que reciba dos propiedades.
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // 2. AÃ±ade un mÃ©todo a la clase que utilice las propiedades.
    presentation() {
        console.log(`${this.name} is ${this.age} years old`)
    }
    // 3. AÃ±ade un mÃ©todo estÃ¡tico a la primera clase.
    static welcome() {
        console.log("This is the static method")
    }
}

// 4. Muestra los valores de las propiedades e invoca a la funciÃ³n.
let person = new Person("Cristina", 27)
console.log(person.name)
console.log(person.age)
person.presentation()

// 5. Haz uso del mÃ©todo estÃ¡tico.
Person.welcome() //Static methods are called directly from the Class, not from an instance

// 6. Crea una clase que haga uso de herencia.
class Worker extends Person {
    constructor(name, age, workstation, exp) {
        super(name, age)
        this.workstation = workstation
        this.exp = exp
    }
    work(){
        console.log(`${this.name} works as ${this.workstation}`)
    }
}
let worker = new Worker("Raúl", 35, "developer", 6)
console.log(worker)
worker.presentation() //inherited method
worker.work() //own method

// 7. Crea una clase que haga uso de getters y setters.
class Team{
    #division
    #bank
    constructor(name, division, subscribers, bank){
        this.name = name
        this.#division = division
        this.subscribers = subscribers
        this.#bank = bank
    }
    get division(){
        return this.#division 
    }
    set division(newDivision){
        return this.#division = newDivision
    }
    get bank(){
        return this.#bank 
    }
    set bank(newBank){
        return this.#bank = newBank
    }
    }

// 8. Modifica la clase con getters y setters para que use propiedades privadas.
let valencia = new Team("Valencia", 1, 20000, "BBVA")
valencia.division = 2
valencia.bank = "CaixaBank"

// 9. Utiliza los get y set y muestra sus valores.
console.log(valencia.division)
console.log(valencia.bank)

// 10. Sobrescribe un mÃ©todo de una clase que utilice herencia.
class Boss extends Person{
    presentation(){
        console.log(`My name is ${this.name} and im the BOSS`)
    }
}
let boss = new Boss("Kenneth", 1)
boss.presentation()