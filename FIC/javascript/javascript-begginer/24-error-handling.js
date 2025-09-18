// ERROR HANDLING
// EXCEPTION:
// An anomalos event. 
// Something unexpected has happened to our program while it was running.
// It will disrupt the normal flow of the application.
// If this happen we have some ways to manage it.

let myObject
// console.log(myObject.email) //Cannot read properties of undefined (reading 'email')

// TRY-CATCH
try {
    //Code that try to execute
    console.log(myObject.email)
    console.log("Ends the exceution without errors")
} catch {
    //Error block
    console.log("Ends the exceution with errors")
}

// error capture
try {
    console.log(myObject.email)
    console.log("Ends the exceution without errors")
} catch (error) {
    console.log("Ends the exceution with error", error.message)
}

// TRY-CATCH-FINALLY
try {
    //Code that try to execute
    console.log(myObject.email)
    console.log("Ends the exceution without errors")
} catch {
    //Error block
    console.log("Ends the exceution with errors")
} finally {
    console.log("This code always executes")
}

// THROWING ERRORS
// throw new Error("An error has occurred")

function sumIntegers(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("You can only sum integers") //Without a try-catch error handling, this would just throw the error
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("It is trying to sum zero")
    }
    return a + b
}

// CATCHING THE ERROR THROWED
try {
    console.log(sumIntegers(5.75564, 10))
} catch (error) {
    console.log("An error has occurred: ", error.message) //We catch the error and print its message value
}

// CATCH DIFFERENT TYPE OF ERRORS
try {
    console.log(sumIntegers("5.75564", 10))
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("A reference error has occurred: ", error.message)
    }
    else if (error instanceof TypeError) {
        console.log("A type error has occurred: ", error.message)
    }
    else if (error instanceof RangeError) {
        console.log("A range error has occurred: ", error.message)
    } else {
        console.log("An error has occurred: ", error.message)
    }
}

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }
    printNums() {
        this.a, " + ", this.b
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado: ", error.message)
    error.printNums()
}