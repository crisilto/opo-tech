// ========================================
// EJERCICIOS: GESTOR DE ERRORES EN JAVASCRIPT
// ========================================

//----------------------------------------------------------
// ⚠️ TIPOS DE ERRORES
//----------------------------------------------------------

// 🧩 1. Provoca un TypeError intencional llamando a un método en un valor null o undefined.
//    - Luego atrápalo con try...catch y muestra el mensaje del error.
const undefinedConst = undefined
try {
    console.log(undefinedConst.toString())
} catch (err) {
    console.log("err", err.message)
}

// 🧩 2. Provoca un ReferenceError accediendo a una variable no declarada.
//    - Captura el error y muestra su nombre y mensaje.
try {
    console.log(x)
} catch (err) {
    console.log("error name:", err.name)
    console.log("error message:", err.message)
}

// 🧩 3. Provoca un RangeError creando un array con una longitud negativa.
//    - Captura el error y explica en un comentario qué ocurrió.
try {
    let arr = new Array(-12)
    console.log(arr)
} catch (err) {
    console.log("error", err.name)
    console.log("message:", err.message)
}

//----------------------------------------------------------
// 🧯 try...catch y finally
//----------------------------------------------------------

// 🧩 4. Crea una función `dividir(a, b)` que divida dos números.
//    - Usa try/catch para capturar un posible error si `b` es 0.
//    - Muestra siempre un mensaje final en `finally`.
class DivideByZero extends Error {
    constructor(message) {
        super(message)
        this.name = "DivideByZero"
    }
}

function divide(a, b) {
    if (b === 0) {
        throw new DivideByZero("you cannot divide by zero")
    }
    console.log(a / b)
}

try {
    divide(10, 0)
} catch (err) {
    if (err instanceof DivideByZero) {
        console.warn("Personalized Error", err.message)
    } else {
        console.log("Another error type")
    }
} finally {
    console.log("division finished")
}


// 🧩 5. Crea una función `parsearJSON(json)` que reciba un string JSON.
//    - Usa try/catch para capturar errores si el formato es inválido.
//    - Si es correcto, devuelve el objeto.
function parseJSON(json) {
    try {
        const parsed = JSON.parse(json)
        return parsed
    } catch (err) {
        console.error("invalid JSON format:", err.message)
        return null
    }
}
const obj = parseJSON('{"name":"cristina"}')
const fail = parseJSON('not a json')

//----------------------------------------------------------
// 🛡️ Errores personalizados
//----------------------------------------------------------

// 🧩 6. Crea una clase de error `NombreMuyCortoError` que extienda de `Error`.
//    - Debe usarse si un nombre tiene menos de 3 letras.
class ShortNameError extends Error {
    constructor(message) {
        super(message)
        this.name = "ShortNameError"
    }
}

function verifyName(name) {
    if (name.length < 3) {
        throw new ShortNameError("name must have 3 letters")
    }
    console.log("valid name:", name)
}

try {
    verifyName("an")
} catch (err) {
    console.warn(err.name + ":", err.message)
}

// 🧩 7. Crea una función `crearUsuario(nombre)` que lance `NombreMuyCortoError` si el nombre es muy corto.
//    - Si no hay error, muestra "Usuario creado".
function createUser(name) {
    if (name.length < 3) {
        throw new ShortNameError("name too short")
    }
    console.log("user created")
}

try {
    createUser("An")
} catch (err) {
    if (err instanceof ShortNameError) {
        console.warn("personalized error", err.message)
    } else {
        console.error("another type error")
    }
}

// 🧩 8. BONUS: Crea una función `crearProducto(nombre, precio)` que valide:
//    - que el nombre exista
//    - que el precio sea mayor que 0
//    - Lanza errores personalizados para cada caso
//    - Usa un bloque try/catch para manejar cada tipo de error de forma distinta
class NombreInvalidoError extends Error {
    constructor(message) {
        super(message)
        this.name = "NombreInvalidoError"
    }
}

class PrecioInvalidoError extends Error {
    constructor(message) {
        super(message)
        this.name = "PrecioInvalidoError"
    }
}

function crearProducto(nombre, precio) {
    if (!nombre) {
        throw new NombreInvalidoError("el nombre es obligatorio")
    }
    if (typeof precio !== "number" || precio <= 0) {
        throw new PrecioInvalidoError("el precio debe ser mayor que 0")
    }

    return {
        nombre,
        precio
    }
}

try {
    const producto = crearProducto("zumo", 0)
    console.log("producto creado:", producto)
} catch (err) {
    if (err instanceof NombreInvalidoError) {
        console.warn("nombre inválido:", err.message)
    } else if (err instanceof PrecioInvalidoError) {
        console.warn("precio inválido:", err.message)
    } else {
        console.error("otro error:", err.message)
    }
}

// 🧩 9. BONUS 2: Crea un sistema simple de validación de inputs usando una función 
// `validarFormulario(obj)`
//    - Valida que las claves obligatorias existen y tengan valor
//    - Si falta alguna, lanza un error con un mensaje indicando cuál falta
function validarFormulario(obj) {
    const camposObligatorios = ["nombre", "email", "password"]

    for (const campo of camposObligatorios) {
        if (!obj[campo]) {
            throw new Error(`el campo '${campo}' es obligatorio`)
        }
    }

    console.log("formulario válido")
}

try {
    validarFormulario({
        nombre: "cristina",
        email: "",
        password: "123456"
    })
} catch (err) {
    console.error("error en validación:", err.message)
}