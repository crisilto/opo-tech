// 1. Crea una variable para cada operaciÃ³n aritmÃ©tica.
let suma = 10+5 //15
let resta = 8-6 //2
let multiplicacion = 3*2 //6
let division = 8/4 //2
let modulo = 7%3 //1
let exponente = 3**2 //9

console.log(`Suma: ${suma} Resta: ${resta} Multiplicacion: ${multiplicacion} 
    Division: ${division}  Modulo: ${modulo} Exponente: ${exponente}`)

// 2. Crea una variable para cada tipo de operaciÃ³n de asignaciÃ³n, 
// que haga uso de las variables utilizadas para las operaciones aritmÃ©ticas.
let number = 3
number += suma //18
console.log(`Number after suma: ${number}`)

number -= resta //16
console.log(`Number after resta: ${number}`)

number *= multiplicacion //96
console.log(`Number after multiplication: ${number}`)

number /= division //48
console.log(`Number after division: ${number}`)

number %= modulo //0
console.log(`Number after modulo: ${number}`)

number **= exponente //0
console.log(`Number after exponentiation: ${number}`)


// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparaciÃ³n.
console.log(1 == true && true)
console.log(!"")
console.log(2 > 8 || 10 != 1)
console.log(0 == "" || 1 > 12)
console.log(0 == false && 0 == '')

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparaciÃ³n.
console.log(1 == false)
console.log(0 == true && 1 == true)
console.log(10 != "10" || 0 > "1")
console.log(false || false && true)
console.log(!"A")

// 5. Utiliza el operador lÃ³gico and.
console.log(1 == true && 0 == false) //true && true = true

// 6. Utiliza el operador lÃ³gico or.
console.log("1" == true || "1" === true) //true || false = true

// 7. Combina ambos operadores lÃ³gicos.
console.log(0 == false || "1" == true && 1 === true) 
//true || true && false 
//true || false = true

// 8. AÃ±ade alguna negaciÃ³n.
console.log(!1 == true) //false
console.log(!"") //true
console.log(!0 == true) //true

// 9. Utiliza el operador ternario.
const doingExercises = true
doingExercises ? console.log("I am doing exercises") : console.log("I am procrastinating")

// 10. Combina operadores aritmÃ©ticos, de comparÃ¡ciÃ³n y lÃ³gicas.
let sum = 5 + 5
let mult = 5 * 2

let myComparison = sum < mult || sum > 2 && sum - mult == false //false || true && true = true
myComparison ? console.log("This comparison is true") : console.log("This comparision is false")

console.log(5%2)