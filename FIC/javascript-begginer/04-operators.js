//OPERADORES

//OPERADORES ARITMÉTICOS
let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

console.log(a++) //Incremento
console.log(b--) //Decremento

//OPERADORES DE ASIGNACIÓN
let myVariable = 4
console.log(myVariable)
myVariable += 2
console.log(myVariable) //6

myVariable -= 2
console.log(myVariable) //4

myVariable *= 2
console.log(myVariable) //8

myVariable /= 2
console.log(myVariable) //4

myVariable = 100
myVariable %= 5
console.log(myVariable) //5

myVariable **= 2
console.log(myVariable) //25

//OPERADORES DE COMPARACIÓN
//a = 6
//b = 9
console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que
console.log(a == b) // Igual que (compara valores)
console.log(a === b) // Igual que (compara valores y tipos)
console.log(a != b) // Desigual que (compara valores)
console.log(a !== b) // Desigual que (compara valores y tipos)
console.log(a == a)
console.log(a === a)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6)
console.log(a !== "6")
//Cosas raras a comparar
console.log("Rarezas")
console.log(0 == false) //true
console.log(1 == false) //false
console.log(2 == false) //false
console.log("El 0 es false y el resto de numeros son true")
console.log(0 == "") //true
console.log(0 == " ") //true
console.log(0 == '') //true
console.log(0 == "Hola") //false
console.log(0 === "") //false
console.log("0 se asocia a una cadena vacía incluso con espacios, pero al ser una cadena no vacía, ya da false."
    + "Si se compara 0 estríctamente con una cadena vacía da false, ya que no comparten tipo de dato"
)
console.log(undefined == null) //true 
console.log("Compara la ausencia de valor, así que da true")
console.log(undefined === null) //true 
console.log("Al compararse estríctamente es false ya que detecta que no se trata del mismo tipo de dato")

//*TRUTHY VALUES (Valores verdaderos que al lenguaje "le ha dado la gana" que sean TRUE)
//Todos los números positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacías
//El boolean true

//!FALSY VALUES (Valores falsos que al lenguaje "le ha dado la gana" que sean FALSE)
//0
//0n
//null
//undefined
//NaN
//El boolean false
//Cadenas de texto vacías 

//OPERADORES LÓGICOS

// and (&&)
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false

// or (||)
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

// not (!)
console.log(!true) // false
console.log(!false) // true

//OPERADORES TERNARIOS (Permiten escribir una condición. Es otra forma de escribir condicionales. Si se cumple algo hacemos una cosa y si no, otra.)
const isRaining = true;
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo");