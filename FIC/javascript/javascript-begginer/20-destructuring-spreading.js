// DESTRUCTURING: 
// Extraer valores de arrays/objetos y asignarlos a variables de manera concisa
let myArray = [1, 2, 3, 4]

// SINTAXIS EN ARRAYS
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis en arrays con valores predeterminados
let [myValue5, myValue6, myValue7, myValue8, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos de un array
let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// SINTAXIS OBJECTS
let person = {
    name: "Cristina",
    age: 27,
    alias: "crisilto"
}

let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objects pero con nuevos nombres de variables
let { name: name2, age: age2, alias: alias2 } = person
console.log(name2)
console.log(age2)
console.log(alias2)

// Destructuración objetos anidados
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

let { name: name3, job: { name: jobName } } = person3
console.log(name3)
console.log(jobName)

// SPREADING (...): Permite expandir elementos de un array o de un objeto a otros arrays o otros objetos
//let myArray = [1, 2, 3, 4]

// SINTAXIS ARRAYS
let myArray2 = [...myArray, 5, 6]
console.log(myArray2)

// Copia de arrays
let myArray3 = [...myArray]
console.log(myArray3)

// Combinación de arrays
let myArray4 = ["Array 1: ", ...myArray, "Array 2: ", ...myArray2, "Array 3: ", ...myArray3]
console.log(myArray4)

// SINTAXIS OBJECTS
let person4 = {...person, email: "crisilto@dev.es"}
console.log(person4)

// Copia de objects
let person5 = {...person}
console.log(person5)