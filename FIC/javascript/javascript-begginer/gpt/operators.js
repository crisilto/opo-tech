//Declara dos números y realiza todas las operaciones básicas: +, -, *, /, %.
let a = 10
let b = 5
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//Compara dos valores numéricos y dos strings con == y ===.
console.log(5 == 5)
console.log(5 == 2)
console.log(5 === 5)
console.log(5 === 2)
console.log(5 == "5")
console.log(5 === "5")

//Usa operadores lógicos (&&, ||, !) para evaluar condiciones con booleans.
console.log(5 > 2 && 2 < 1)
console.log(5 > 2 && 2 < 6)
console.log(5 > 2 || 2 < 1)
console.log(5 > 2 || 2 < 6)
console.log(5 != 5)
console.log(5 != 2)


//Usa el operador ternario para decir si una persona es mayor o menor de edad.
let age = 17
console.log(age >= 18 ? "Mayor de edad" : "Menor de edad")

//¿Qué devuelve null == undefined y null === undefined?
console.log(null == undefined) //true porque ambos son objeto
console.log(null === undefined) //false porque no son lo mismo