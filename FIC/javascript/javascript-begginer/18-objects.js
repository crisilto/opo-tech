// OBJECTS

// SINTAXIS
let person = {
    name: "Cristina",
    age: 27,
    alias: "crisilto"
}

// ACCESO A LAS PROPIEDADES
// Notación punto
console.log(person.name) //Recomendada, mucho más sencillo

// Notación de corchetes
console.log(person["name"])

// MODIFICACIÓN DE PROPIEDAD
person.name = "Cris"
person.age = "27"
console.log(`${person.name} tiene ${person.age} años (${typeof person.age})`)

// ELIMINACIÓN DE PROPIEDAD
delete person.alias
console.log(person)

// AÑADIR UNA PROPIEDAD
person.email = "crisilto@dev.es"
person["favColor"] = "black"
console.log(person)

// MÉTODOS (FUNCIONES)
let person2 = {
    name: "Raúl",
    age: 35,
    alias: "aku",
    walk: function () {
        console.log("La persona camina")
    }
}
person2.walk()

// ANIDACIÓN DE OBJECTS
let person3 = {
    name: "Lilith",
    age: 3,
    alias: "lily",
    walk: function () {
        console.log(`${this.name} camina`)
    },
    job: {
        name: "Dormir",
        exp: 3,
        work: function () {
            console.log(`La ${person3.name} tiene ${this.exp} años de experiencia trabajando en ${this.name}.`)
        }
    }
}
console.log(person3)
person3.job.work()

let person4 = {
    name: "Cris",
    age: 27,
    alias: "crisilto"
}

console.log(person == person4) //false
console.log(person.name === person4.name) //true

// ITERACIÓN
for (const key in person4) {
    console.log(`${key}: ${person4[key]}`)
}

// FUNCIONES COMO OBJETOS
// Aunque existe esta sintaxis no es una buena práctica, debería ser una clase
function Person(name, age){
    this.name = name
    this.age = age
}

let person5 = new Person("Cris", 27)
console.log(person5)
console.log(typeof Person)