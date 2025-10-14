// 1. Crea un código con un error lógico y usa VS Code para encontrarlo
// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución

function adult(age){
    if(age < 0 || age > 100){
        throw new Error("age out of bounds")
    }
    if(age < 18){
        throw new Error("u r too young")
    }
    if(isNaN(age)){
        throw new Error("number needed")
    }
    return "u r an adult"
}

try {
    console.log(adult(-4))
} catch (err) {
    console.error("Error en -4:", err.message)
}

try {
    console.log(adult(15))
} catch (err) {
    console.error("Error en 15:", err.message)
}

try {
    console.log(adult("hi"))
} catch (err) {
    console.error("Error en 'hi':", err.message)
}

try {
    console.log(adult(27))
} catch (err) {
    console.error("Error en 27:", err.message)
}