// ERROR HANDLING - EJERCICIOS

// 1. Intenta acceder a una propiedad de un objeto no definido y captura el error con un `try...catch`.
let myObject
try {
    console.log(myObject.property)
    console.log("Ends the execution without errors")
} catch (error) {
    console.log("Error capturado:", error.message)
}

// 2. Dentro de un bloque `try`, intenta llamar a una función que no existe y muestra un mensaje de error personalizado en el `catch`.
try {
    noExiste() // función ficticia que no está definida
} catch (error) {
    console.log("Error capturado:", error.message)
}

// 3. Usa `try...catch...finally` para ejecutar un bloque que siempre imprima "Ejecución finalizada".
try {
    otraFuncion() // función ficticia para provocar error
} catch (error) {
    console.log("Error capturado:", error.message)
} finally {
    console.log("Ejecución finalizada")
}

// 4. Declara una función `dividir(a, b)` que arroje un error si `b` es igual a cero.
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero")
    }
    return a / b
}

try {
    console.log(dividir(5, 0))
} catch (error) {
    console.log("Error capturado:", error.message)
}

try {
    console.log(dividir(5, 1))
} catch (error) {
    console.log("Error capturado:", error.message)
}

// 5. Llama a la función `dividir` dentro de un `try...catch` y captura el error si `b` es cero.
try {
    dividir(5, 0)
} catch (error) {
    console.log("Error capturado:", error.message)
}

// 6. Lanza un error personalizado con `throw new Error("mensaje")` cuando un usuario no tenga nombre.
class User {
    constructor(name, email) {
        if (!name) {
            throw new Error("El usuario no tiene nombre")
        }
        this.name = name
        this.email = email
    }
}

try {
    let myUser = new User() // sin nombre
} catch (error) {
    console.log("Error capturado:", error.message)
}

// 7. Crea una clase de error personalizada `EmailRequiredError` que extienda de `Error`.
class EmailRequiredError extends Error {
    constructor() {
        super("Email es obligatorio")
        this.name = "EmailRequiredError"
    }
}

// 8. Lanza `EmailRequiredError` si un objeto usuario no tiene una propiedad `email`.
try {
    let user = { name: "cris" }
    if (!user.email) {
        throw new EmailRequiredError()
    }
    console.log("Email:", user.email)
} catch (error) {
    console.log("Error capturado:", error.name, "-", error.message)
}

// 9. Crea una función `sumarSoloPares(a, b)` que lance un error si alguno de los dos no es par.
function sumarSoloPares(a, b) {
    if (a % 2 !== 0 || b % 2 !== 0) {
        throw new Error("Solo se pueden sumar números pares")
    }
    return a + b
}

// 10. Captura ese error con un `try...catch` y muestra su `message`.
try {
    console.log(sumarSoloPares(5, 2))
} catch (error) {
    console.log("Error capturado:", error.message)
}

try {
    console.log(sumarSoloPares(4, 10)) // correcto
} catch (error) {
    console.log("Error capturado:", error.message)
}

// 11. Usa `instanceof` dentro del `catch` para diferenciar si el error es de tipo `TypeError` o un error personalizado.
try {
    throw new TypeError("Este es un TypeError")
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Error de tipo TypeError:", error.message)
    } else {
        console.log("Error personalizado:", error.message)
    }
}

// 12. Dentro de un `try`, intenta parsear un JSON mal formado con `JSON.parse` y captura el error.
try {
    JSON.parse("{mal json: true")
} catch (error) {
    console.log("Error al parsear JSON:", error.message)
}

// 13. Crea un bloque `try...catch` que capture errores silenciosamente (sin mostrar nada si hay error).
try {
    noExisteFuncion()
} catch (error) {
    // Error capturado silenciosamente
}

// 14. Escribe una función `verificarEdad(edad)` que lance un error si la edad es menor a 0 o no es un número.
function verificarEdad(edad) {
    if (typeof edad !== "number" || edad < 0) {
        throw new Error("Edad inválida")
    }
    return "Edad válida"
}
try {
    console.log(verificarEdad(-1))
} catch (error) {
    console.log("Error capturado:", error.message)
}

// 15. Agrega un `finally` a una operación que simule lectura de archivo (aunque sea un `console.log("Cerrando archivo...")`).
try {
    console.log("Leyendo archivo...")
    throw new Error("Error al leer archivo")
} catch (error) {
    console.log("Error capturado:", error.message)
} finally {
    console.log("Cerrando archivo...")
}

// 16. Lanza un `RangeError` si un número está fuera del rango 1-100.
function verificarRango(num) {
    if (num < 1 || num > 100) {
        throw new RangeError("Número fuera del rango 1-100")
    }
    return "Número en rango"
}
try {
    console.log(verificarRango(150))
} catch (error) {
    console.log("Error capturado:", error.message)
}

// 17. Lanza un `TypeError` si una función espera un número y recibe un string.
function procesarNumero(valor) {
    if (typeof valor !== "number") {
        throw new TypeError("Se esperaba un número")
    }
    return valor * 2
}
try {
    console.log(procesarNumero("texto"))
} catch (error) {
    console.log("Error capturado:", error.message)
}

// 18. Lanza un `ReferenceError` si una variable obligatoria no está definida.
try {
    if (typeof obligatoria === "undefined") {
        throw new ReferenceError("Variable obligatoria no definida")
    }
} catch (error) {
    console.log("Error capturado:", error.message)
}

// 19. Crea una función `ejecutarSegura(func)` que reciba una función y la ejecute dentro de un `try...catch`.
function ejecutarSegura(func) {
    try {
        func()
    } catch (error) {
        console.log("Error capturado al ejecutar función:", error.message)
    }
}
ejecutarSegura(() => {
    throw new Error("Error dentro de función")
})

// 20. Crea una clase de error `CustomValidationError` que incluya un método para mostrar un mensaje personalizado, y pruébala lanzándola manualmente.
class CustomValidationError extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.name = "CustomValidationError"
    }
    mostrarMensaje() {
        return `¡Validación fallida! ${this.message}`
    }
}
try {
    throw new CustomValidationError("Campo requerido vacío")
} catch (error) {
    console.log(error.mostrarMensaje())
}