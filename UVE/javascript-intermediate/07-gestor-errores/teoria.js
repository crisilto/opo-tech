// ========================================
// TEORÍA: GESTOR DE ERRORES EN JAVASCRIPT
// ========================================

//----------------------------------------------------------
// ⚠️ 1. TIPOS DE ERRORES COMUNES
//----------------------------------------------------------

// ➤ TypeError → Se lanza cuando se usa un tipo de dato incorrectamente
// Ejemplo:
const nulo = null;
// nulo.toString(); ❌ TypeError: Cannot read properties of null

// ➤ ReferenceError → Cuando se intenta acceder a una variable que no existe
// console.log(x); ❌ ReferenceError: x is not defined

// ➤ RangeError → Cuando se pasa un valor fuera del rango permitido
// const arr = new Array(-5); ❌ RangeError: Invalid array length

//----------------------------------------------------------
// 🧯 2. try...catch y finally
//----------------------------------------------------------

// try...catch sirve para manejar errores sin que el programa se rompa

try {
    let resultado = 10 / 0;
    console.log("Resultado:", resultado);
} catch (error) {
    console.error("Ocurrió un error:", error.message);
} finally {
    console.log("Esto se ejecuta siempre");
}

// ➤ try: se intenta ejecutar el código
// ➤ catch: captura el error si ocurre
// ➤ finally (opcional): se ejecuta siempre, haya error o no

//----------------------------------------------------------
// 🛡️ 3. VALIDACIONES Y ERRORES PERSONALIZADOS
//----------------------------------------------------------

// Podemos crear nuestras propias clases de error extendiendo `Error`

class EdadInvalidaError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "EdadInvalidaError";
    }
}

function registrarUsuario(nombre, edad) {
    if (edad < 0 || edad > 120) {
        throw new EdadInvalidaError("La edad no es válida");
    }
    console.log(`${nombre} registrado con ${edad} años`);
}

try {
    registrarUsuario("Ana", -5);
} catch (error) {
    if (error instanceof EdadInvalidaError) {
        console.warn("Error personalizado:", error.message);
    } else {
        console.error("Otro tipo de error:", error);
    }
}

// ➤ Validaciones manuales son muy útiles para:
// - Evitar bugs por datos incorrectos
// - Dar feedback claro al usuario
// - Prevenir que el código llegue a estados inválidos

// También puedes lanzar errores simples con `throw new Error("mensaje")`