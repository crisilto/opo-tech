//OBJETOS AVANZADOS

//PROTOTIPOS Y HERENCIA

//PROTOTIPOS 
// En JavaScript, todo objeto tiene un “prototipo”:
//  - Piensa en él como un “objeto padre” o un “modelo” del que hereda propiedades y métodos.
//  - Si buscas una propiedad en un objeto y no está, JavaScript sube por la cadena de prototipos hasta encontrarla (o devolver undefined)
let person = {
    name: "fay",
    age: 37,
    greet() {
        console.log(`hola, soy ${this.name}`)
    }
}
console.log(person.__proto__) //el prototipo de person
console.log(Object.getPrototypeOf(person)) //forma más moderna de verlo
//Eso muestra que person no está vacío, sino que hereda de Object.prototype, donde viven métodos como toString, hasOwnProperty, etc.

//De esta manera se añade un método directamente a person
person.sayAge = function () {
    console.log(`hola, tengo ${this.age} años`)
}
person.sayAge()
//Nada que ver, no intervienen los prototipos todavía, simplemente se añade una función como propiedad del objeto.

console.log("-------")
//HERENCIA
//creamos herencia con Object.create()
let programmer = Object.create(person)
programmer.language = "JavaScript"
//Aquí pasa algo muy importante:
// - programmer no tiene sus propias propiedades name ni age.
// - Pero como fue creado a partir de person, hereda de él.
// - Entonces cuando haces programmer.name, JavaScript no lo encuentra en programmer y lo busca en person.

console.log(person.language) //undefined
console.log(programmer.name) //"fay"
console.log(programmer.age) //"37"
console.log(programmer.language) //"javascript" (propia de programmer)
//también puede usar los métodos de person-> al no encontrarlos en programmer, JS sube la cadena de prototipos y los encuentra en person
programmer.greet() // hola, soy fay
programmer.sayAge() // hola, tengo 37 años

//person-> objeto base
//programmer-> hereda de person
person.name = "alice"
console.log(programmer.name) //"alice" (porque sigue heredando)
programmer.name = "bob"
console.log(programmer.name) // "bob" (ya no hereda, porque lo sobreescribe)
console.log(person.name) // "alice"

//resumen
// - Los objetos en JS tienen un prototipo del cual heredan.
// - Object.create(obj) crea un nuevo objeto que hereda de obj.
// - Si buscas una propiedad y no está, JS sube por la cadena de prototipos.
// - Esto es lo que permite la herencia en JS sin necesidad de clases (aunque las clases modernas son “azúcar sintáctica” sobre este sistema).


//MÉTODOS ESTÁTICOS

//función constructora
function Person(name, age) {
    this.name = name
    this.age = age
}
//aquí NO lo mete directamente en cada objeto
//lo que hace es añadir el método al prototipo de Person
//así, todos los objetos creados con new Person(...) van a poder usarlo sin duplicar códigp
Person.prototype.greet = function () {
    console.log(`hola, soy ${this.name}`)
}
//crea un objeto vacío y hace que this apunte a este objeto
let new_person = new Person("fay", 26)
//JS busca así:
//  -new_person NO tiene su propia propiedad greet
//  -busca en Person.prototype y la encuentra
//  -la ejecuta con el this apuntando a new_person
new_person.greet()

//los métodos estáticos son diferente.
//  -se definen directamente en la función constructora (no en su prototipo)
//  -se llama desde la clase/función en sí, no desde la instancia
Person.isAdult = function (age) {
    return age >= 18
}

console.log(Person.isAdult(26)) // true
console.log(new_person.isAdult) // undefined ❌
//los estátics pertenecen al constructor, no a los objetos creados con él

//resumen
//prototype-> métodos que comparten TODAS las instancias
//estáticos-> métodos de utilidad que pertenecen a la función/clase en sí (isAdult)
//new-> crea un objeto que hereda del prototipo de la función constructora

//MÉTODOS AVANZADOS

//assign
//sirve para copiar las propiedades de uno o más objetos, que son como la fuente, en un objeto destino
let person_core = { name: "fay" }
let person_details = { age: 26, alias: "fayhuahua" }
//copia las propiedades de uno o más objetos fuente(person_details) a un objeto destino(person_core)

let fullPerson = Object.assign(person_core, person_details)
console.log(fullPerson)
//modifica el objeto destino, si queremos que no modifique el original, usamos {} vacío como destino.
//let fullPerson = Object.assign({}, person_core, person_details)

//keys, values, entries
//devuelven un array con: claves, valores y clavesvalores de un objeto
console.log(Object.keys(fullPerson)) 
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson)) //un array de arrays, cada subarray es [key,value]
//entries es útil para iterar con for...of
for(let [key,value] of Object.entries(fullPerson)){
    console.log(`${key} -> ${value}`)
}