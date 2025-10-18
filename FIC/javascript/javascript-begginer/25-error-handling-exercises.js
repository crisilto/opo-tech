// 1. Captura una excepciÃ³n utilizando try-catch.

try {
    // let result = 10 / 0 This does not throws an error, just Infinity
    let result = undefinedVariable
    console.log(result)
} catch (error) {
    console.log("An error has occured:", error.message)
}

// 2. Captura una excepciÃ³n utilizando try-catch y finally.

try {
    let x = undefinedVariable
} catch (error) {
    console.log("An error has occured:", error.message)
} finally {
    console.log("This block of code always executes")
}

// 3. Lanza una excepciÃ³n genÃ©rica.

try {
    throw new Error("Generic error")
} catch (error) {
    console.log("An error has been catched:", error.message)
}

// 4. Crea una excepciÃ³n personalizada.

class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = "CustomError"
    }
}

// 5. Lanza una excepciÃ³n personalizada.

try {
    throw new CustomError("This is a custom error")
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}

// 6. Lanza varias excepciones segÃºn una lÃ³gica definida.

function checkNumber(num) {
    if (num < 0) {
        throw new Error("The number is negative")
    } else if (num === 0) {
        throw new Error("The number is zero")
    } else if (num > 100) {
        throw new Error("The number is greater than 100")
    }
    return "Valid number: " + num
}

const numbers = [101, 0, -23, 12]

numbers.forEach(num =>{
    try{
        console.log(checkNumber(num))
    }catch(err){
        console.log("Error: ", num, " ", err.message)
    }
})

// 7. Captura varias excepciones en un mismo try-catch.

try {
    // let num = -5
    let num = 5
    checkNumber(num)
    num.toUpperCase()
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Type error:", error.message)
    } else {
        console.log("Error:", error.message)
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.

let values = ["10.5", "abc", "20.2", "xyz"]
for (let value of values) {
    try {
        let floatValue = parseFloat(value)
        if (isNaN(floatValue)) {
            throw new Error(`"${value}" is not a valid number`)
        }
        console.log(`Transformated value: ${floatValue}`)
    } catch (error) {
        console.log("Error:", error.message)
    }
}

// 9. Crea una funciÃ³n que verifique si un objeto tiene una propiedad especÃ­fica y lance una excepciÃ³n personalizada.

function checkProperty(obj, property) {
    if (!obj.hasOwnProperty(property)) {
        throw new CustomError(`The property "${property}" is not found in the object`)
    }
    return obj[property]
}
try {
    let person = { name: "Brais", age: 37 }
    console.log(checkProperty(person, "name"))
    console.log(checkProperty(person, "address"))
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}

// 10. Crea una funciÃ³n que realice reintentos en caso de error hasta un mÃ¡ximo de 10.

// Operation that fails randomly
function unstableOperation() {
    if (Math.random() > 0.9) { // Generates a random number between 0 and 1
        console.log("Correct operation")
    } else {
        throw new Error("Unexpected error")
    }
}

function retryOperation() {
    const maxRetries = 10
    let attempts = 0
    let success = false

    while (attempts < maxRetries && !success) {
        try {
            unstableOperation()
            success = true
        } catch (error) {
            attempts++
            console.log(`Try number ${attempts} failed: ${error.message}`)
        }
    }

    if (!success) {
        console.log("The max of attemps is exceed. Try it in another moment.")
    }
}

retryOperation(10)