// ========================================
// NUEVOS EJERCICIOS: MANEJO DE ERRORES EN JS
// ========================================


// 🧩 1. Crea una función `obtenerLongitudTexto(texto)`
//     - debe devolver la longitud del string recibido
//     - si recibe null o undefined, lanza un TypeError
//     - maneja el error con try/catch y muestra el mensaje
function obtenerLongitudTexto(texto) {
    try {
        if (texto == null) {
            throw new TypeError("el texto no puede ser null/undefined")
        }
        return texto.length
    } catch (err) {
        console.error(`${err.name}: ${err.message}`)
    }
}

console.log(obtenerLongitudTexto("hola"))
obtenerLongitudTexto()

// 🧩 2. Crea una clase de error personalizada `EdadInvalidaError`
//     - crea una función `verificarEdad(edad)` que lance este error si edad < 18
//     - si la edad es válida, muestra "acceso permitido"
class EdadInvalidaError extends Error {
    constructor(message) {
        super(message)
        this.name = "EdadInvalidaError"
    }
}

function verificarEdad(edad) {
    if (edad < 18) {
        throw new EdadInvalidaError("debe ser mayor de edad")
    }
    console.log("acceso permitido")
}

try {
    verificarEdad(16)
} catch (err) {
    console.warn(`${err.name}: ${err.message}`)
}

// 🧩 3. Crea una función `convertirMayusculas(valor)`
//     - si el valor no es un string, lanza un TypeError
//     - si es un string, devuelve el valor en mayúsculas
//     - prueba la función con distintos tipos usando try/catch
function convertirMayusculas(valor) {
    if (typeof valor !== "string") {
        throw new TypeError("debe ser un string")
    }
    return valor.toUpperCase()
}

try {
    console.log(convertirMayusculas(13))
} catch (err) {
    console.warn(`${err.name}: ${err.message}`)
}

try {
    console.log(convertirMayusculas("hola"))
} catch (err) {
    console.warn(`${err.name}: ${err.message}`)
}

// 🧩 4. Simula una conexión a base de datos con try...finally
//     - crea `conectarDB()` que muestre "📡 conectando..."
//     - crea `cerrarConexion()` que muestre "🔌 desconectado"
//     - en `consultarDatos()`, conecta, lanza un error y asegúrate de cerrar siempre la conexión con finally
function conectarDB() {
    console.log("conectando...")
}
function cerrarConexion() {
    console.log("desconectado")
}
function consultarDatos() {
    try {
        conectarDB()
        throw new Error("error al conectar a la base de datos")
    } catch (err) {
        console.warn(`${err.name}: ${err.message}`)
    } finally {
        cerrarConexion()
    }
}
consultarDatos()

// 🧩 5. Valida una contraseña con varios errores personalizados
//     - crea tres clases de error:
//         - `ErrorLongitudInsuficiente` si la contraseña tiene menos de 6 caracteres
//         - `ErrorFaltaMayuscula` si no tiene mayúsculas
//         - `ErrorFaltaNumero` si no tiene números
//     - crea la función `validarPassword(pass)` que use esas validaciones
//     - maneja cada error con su mensaje correspondiente en un try/catch
class ErrorLongitudInsuficiente extends Error {
    constructor(message) {
        super(message)
        this.name = "ErrorLongitudInsuficiente"
    }
}
class ErrorFaltaMayuscula extends Error {
    constructor(message) {
        super(message)
        this.name = "ErrorFaltaMayuscula"
    }
}
class ErrorFaltaNumero extends Error {
    constructor(message) {
        super(message)
        this.name = "ErrorFaltaNumero"
    }
}

function validarPassword(pass) {
    if (pass.length < 6) {
        throw new ErrorLongitudInsuficiente("la contraseña tiene que tener 6 caracteres o mas")
    }
    if (!(/[A-Z]/.test(pass))) {
        throw new ErrorFaltaMayuscula("la contraseña tiene que tener al menos una mayuscula")
    }
    if (!(/\d/.test(pass))) {
        throw new ErrorFaltaNumero("la contraseña tiene que tener al menos un numero")
    }
    return "contraseña válida"
}

try {
    console.log(validarPassword("abcdefu"))
} catch (err) {
    if (err instanceof ErrorLongitudInsuficiente) {
        console.warn(`${err.name}: ${err.message}`)
    } else if (err instanceof ErrorFaltaMayuscula) {
        console.warn(`${err.name}: ${err.message}`)
    } else if (err instanceof ErrorFaltaNumero) {
        console.warn(`${err.name}: ${err.message}`)
    } else {
        console.error("otro error: ", err.message)
    }
}

// 🧩 6. Crea una función `esEnteroPositivo(valor)`
//     - si el valor no es un número, lanza TypeError
//     - si es negativo, lanza RangeError
//     - si tiene decimales, lanza Error genérico
//     - si todo está bien, devuelve true
function esEnteroPositivo(valor) {
    if (typeof valor !== "number") {
        throw new TypeError("tiene que ser un numero")
    }
    if (valor < 0) {
        throw new RangeError("tiene que ser positivo")
    }
    if (valor % 1 !== 0) {
        throw new Error("tiene que ser un numero entero")
    }
    return true
}

try {
    esEnteroPositivo("hola")
} catch (err) {
    console.warn(`${err.name}: ${err.message}`)
}
try {
    esEnteroPositivo(-2)
} catch (err) {
    console.warn(`${err.name}: ${err.message}`)
}
try {
    esEnteroPositivo(1.3)
} catch (err) {
    console.warn(`${err.name}: ${err.message}`)
}
try {
    esEnteroPositivo(13)
} catch (err) {
    console.warn(`${err.name}: ${err.message}`)
}

// 🧩 7. Crea una función `parsearUsuario(json)`
//     - intenta parsear el string JSON recibido
//     - si falta alguna clave obligatoria como `nombre`, `email`, `edad`, lanza un Error indicando cuál falta
//     - si todo está correcto, devuelve el objeto
function parsearUsuario(json) {
    let obj
    try {
        obj = JSON.parse(json)
    } catch (err) {
        throw new Error("JSON inválido")
    }

    if (!obj.nombre) {
        throw new Error("el usuario no tiene nombre")
    }
    if (!obj.email) {
        throw new Error("el usuario no tiene email")
    }
    if (!obj.edad) {
        throw new Error("el usuario no tiene edad")
    }

    return obj
}

const usuarioIncompleto = JSON.stringify({
    nombre: "cristina",
    email: "cristina@gmail.es"
})

try {
    const usuario = parsearUsuario(usuarioIncompleto)
    console.log("usuario ok:", usuario)
} catch (err) {
    console.warn(`${err.name}: ${err.message}`)
}

// 🧩 8. BONUS: Validador de formulario con errores personalizados y bucle
//     - tienes un array de objetos: { campo: "nombre", valor: "ana" }, etc
//     - crea un error personalizado `ErrorCampoVacio`
class ErrorCampoVacio extends Error {
    constructor(message) {
        super(message),
            this.name = "ErrorCampoVacio"
    }
}
const campos = [
    { campo: "nombre", valor: "ana" },
    { campo: "email", valor: "cristina@gmail.com" },
    { campo: "password", valor: "" }
]

//     - función `validarCampos(campos)`:
//         - recorre cada objeto
//         - si el valor está vacío, lanza ErrorCampoVacio con el nombre del campo
//         - si todos los campos son válidos, muestra "formulario correcto"
function validarCampos(campos) {
    for (const item of campos) {
        if (!item.valor) {
            throw new ErrorCampoVacio(`el campo '${item.campo}' está vacío`)
        }
    }
    console.log("formulario correcto")
}
try {
    validarCampos(campos)
} catch (err) {
    if (err instanceof ErrorCampoVacio) {
        console.warn(`${err.name}: ${err.message}`)
    } else {
        console.error("otro error:", err.message)
    }
}
