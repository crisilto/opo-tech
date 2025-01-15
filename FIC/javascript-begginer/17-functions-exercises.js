// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// BY MYSELF

// 1. Crea una funciÃ³n que reciba dos nÃºmeros y devuelva su suma.
const sum = (a = 0, b = 0) => a + b
let result = sum(2, 6)
console.log(result) //8

// 2. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva el mayor de ellos.
const nums = [8, 2, 4, 12, 43, 1]
const findMax = (arr) => {
    let max = Math.max(...arr)
    return max
}
let myMax = findMax(nums)
console.log(myMax)

// 3. Crea una funciÃ³n que reciba un string y devuelva el nÃºmero de vocales que contiene.
const string = "Eduardo Camavinga"
const countVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}
result = countVowels(string)
console.log(result)

// 4. Crea una funciÃ³n que reciba un array de strings y devuelva 
// un nuevo array con las strings en mayÃºsculas.
const arrStrings = ["Lilith", "Kenneth", "Cristina", "Raúl"]
const convertMayusc = (arr) => {
    let mayuscArr = []
    for (let str of arr) {
        let mayuscStr = str.toUpperCase()
        mayuscArr.push(mayuscStr)
    }
    return mayuscArr
}
result = convertMayusc(arrStrings)
console.log(result)

// 5. Crea una funciÃ³n que reciba un nÃºmero y devuelva true si es primo, 
// y false en caso contrario.
const esPrimo = (num) => {
    if (num < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(esPrimo(5))

// 6. Crea una funciÃ³n que reciba dos arrays y devuelva un nuevo array 
// que contenga los elementos comunes entre ambos.
const stack1 = ["Java", "SpringBoot", "JavaScript", "React"]
const stack2 = ["Java", "PHP", "Laravel", "JavaScript", "Vue"]

const compareArr = (arr1, arr2) => {
    const commons = []
    for (let el1 of arr1) {
        if (arr2.includes(el1)) {
            commons.push(el1)
        }
    }
    return commons
}
result = compareArr(stack1, stack2)
console.log(result)

// 7. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva 
// la suma de todos los nÃºmeros pares.
const numbers = [2, 5, 6, 2, 1, 0, 8, 7]

const evenSum = (arr) => {
    let suma = 0
    const isEven = (n) => n % 2 === 0 ? true : false
    arr.forEach(element => {
        if(isEven(element)){
            suma += element
        }
    });
    return suma
}
console.log(evenSum(numbers))

// 8. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva 
// un nuevo array con cada nÃºmero elevado al cuadrado.
const arrNumbers = [3, 2, 5, 6]

const squaredNumbers = (arr) => {
    const arrSquared = []
    arr.forEach(element => {
        arrSquared.push(Math.pow(element, 2))
    });
    return arrSquared
}
console.log(squaredNumbers(arrNumbers))

// 9. Crea una funciÃ³n que reciba una cadena de texto y devuelva l
// a misma cadena con las palabras en orden inverso.
const chain = "Estoy aprendiendo JavaScript"

const reverseChain = (str) => {
    let arr = str.split(" ")
    let reverseArr = arr.reverse()
    let reverseStr = reverseArr.toString().replaceAll(",", " ")
    return reverseStr
}
console.log(reverseChain(chain))

// 10. Crea una funciÃ³n que calcule el factorial de un nÃºmero dado.
const factorial = (n) => {
    let total = 1
    for(let i = 1; i <= n; i++){
        total *= i
    }
    return total
}
console.log(factorial(5))

// CLEANER CODE