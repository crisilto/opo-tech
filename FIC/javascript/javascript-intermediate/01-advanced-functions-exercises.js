// 1. Crea una función que retorne a otra función.
const hobbie = function (sport) {
    console.log(`you play ${sport} as a hobby`)
}
function returnHobbie() {
    return hobbie
}
const hobbie2 = returnHobbie()
hobbie2("football")

//ejemplo real
function getHobbieFunction(type) {
    if (type === "sport") {
        return function (name) {
            console.log(`you practice ${name} as a sport`)
        }
    } else if (type === "art") {
        return function (name) {
            console.log(`you create ${name} as an art`)
        }
    }
}

const sportHobbie = getHobbieFunction("sport")
sportHobbie("basketball")

const artHobbie = getHobbieFunction("art")
artHobbie("painting")


// 2. Implementa una función currificada que multiplique 3
// números.
function multiply(n1) {
    return function (n2) {
        return function (n3) {
            return n1 * n2 * n3
        }
    }
}
console.log(multiply(3)(2)(5))

const multiplyBy3 = multiply(3)
const multiplyBy3And2 = multiplyBy3(2)
console.log(multiplyBy3And2(5))
console.log(multiplyBy3And2(10))


// 3. Desarrolla una función recursiva que calcule la potencia
// de un número elevado a un exponente.
function potencia(n, e) {
    if (e === 0) {
        return 1
    }
    return n * potencia(n, e - 1)
}
console.log(potencia(3, 4))

// 4. Crea una función createCounter() que reciba un valor
// inicial y retorne un objeto con métodos para
// increment(), decrement() y getValue(), utilizando un
// closure para mantener el estado.
function createCounter(initialValue = 0) {
    let value = initialValue

    return {
        increment: function () {
            value++
            return value
        },
        decrement: function () {
            value--
            return value
        },
        getValue: function () {
            return value
        }
    }
}
const counterA = createCounter(4)
const counterB = createCounter(10)
const counterC = createCounter() // 0 (se inicializa por defecto)
counterC.increment() // 0+1
console.log(counterC.getValue()) // 1
console.log(counterA.getValue())
console.log(counterA.decrement())
console.log(counterA.increment())
console.log(counterA.increment())
console.log(counterB.getValue())
console.log(counterB.decrement())


// 5. Crea una función sumManyTimes(multiplier, ...numbers)
// que primero sume todos los números (usando parámetros
// Rest) y luego multiplique el resultado por multiplier.
function sumManyTimes(multiplier, ...numbers) {
    let sum = 0
    for (let num of numbers) {
        sum += num
    }
    return multiplier * sum
}
const myNumbers = [4, 4, 2]
console.log(sumManyTimes(2, ...myNumbers))

//con reduce
function sumManyTimesReduce(multiplier, ...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0)
    return multiplier * sum
}
console.log(sumManyTimesReduce(2, 1, 2, 3))
console.log(sumManyTimesReduce(2, ...myNumbers))


// 6. Crea un Callback que se invoque con el resultado de la
// suma de todos los números que se le pasan a una función.
function processSum(callback, ...nums) {
    let result = 0
    for (let num of nums) {
        result += num
    }
    callback(result)
}
function processResult(result) {
    console.log(result)
}
processSum(processResult, 4, 5, 6)

//con reduce
function processSumReduce(callback, ...nums) {
    const result = nums.reduce((acc, num) => acc + num, 0)
    callback(result)
}
const processResultReduce = result => {
    console.log(`The sum is ${result}`)
}
processSumReduce(processResultReduce, 4, 5, 6)


// 7. Desarrolla una función parcial.
function partialMultiply(a) {
    return function (b, c) {
        return a * b * c
    }
}
const multiplyBy = partialMultiply(2)
console.log(multiplyBy(5, 2))
console.log(multiplyBy(3, 3))

// 8. Implementa un ejemplo que haga uso de Spread.
//clonar array
const names = ["fay", "lilith", "cris"]
const namesClone = [...names]
const me = namesClone.pop()
console.log(namesClone)
console.log(me)
//juntar arrays
const nums1 = [13, 11, 12]
const nums2 = [1, 3, 5]
const myNums = [...nums1, "concatenando 2 arrays", ...nums2]
console.log(myNums)
//pasar arrays como argumentos de función
function sum4nums(a, b, c, d) {
    return a + b + c + d
}
const my4nums = [5, 10, 15, 10]
console.log(sum4nums(...my4nums))

// 9. Implementa un retorno implícito.
const divide = (a, b) => a / b
console.log(divide(10, 5))

// 10. Haz uso del this léxico:",
const stuffedAnimal = {
    name: "Mochi",
    greet: function(){
        console.log(`hello ${this.name}`)
    }
}
stuffedAnimal.greet()