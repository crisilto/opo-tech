// 1. VALIDACIÓN DE CORREOS ELECTRÓNICOS CON EXPRESIONES REGULARES

// Explicación teórica:
// Las expresiones regulares (RegEx) son patrones que nos permiten buscar o validar texto.
// En este caso, queremos verificar si una cadena tiene el formato típico de un email.

// Estructura de un email: nombre@dominio.extensión

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
// ^  → indica el inicio de la cadena
// [a-zA-Z0-9._-]+  → el nombre del correo puede tener letras, números, puntos, guiones o guiones bajos
// @  → el símbolo obligatorio que separa el usuario del dominio
// [a-zA-Z0-9.-]+  → el dominio (puede incluir letras, números, puntos y guiones)
// \.  → el punto antes de la extensión (hay que escaparlo con una barra invertida)
// [a-zA-Z]{2,6}  → la extensión debe tener entre 2 y 6 letras (por ejemplo: com, es, org, info...)
// $  → indica el final de la cadena


// Función que valida un email usando .test()
// .test() devuelve true si el texto cumple con el patrón, o false si no.
function validateEmail(email){
    const isValid = emailRegex.test(email)

    if(isValid){
        console.log(`${email} es un correo electrónico válido`)
    }else{
        console.log(`${email} no es un correo válido`)
    }

    // Retornamos true o false por si queremos usar la función en otra parte del código
    return isValid
}

console.log("Validación de correos electrónicos:")

// Ejemplos de uso
validateEmail("cris@gmail.com")        // ✅ válido
validateEmail("cris.keto@gmail.com")   // ✅ válido
validateEmail("crisketo@gmail")        // ❌ no válido (le falta la extensión)
validateEmail("crisketo@.com")         // ❌ no válido (falta el dominio)

// 2. OBTENER HASHTAGS DE UN TEXTO

// Explicación teórica:
// Un hashtag es una palabra o conjunto de caracteres precedida por el símbolo #
// Por ejemplo: #coding #JavaScript #100DaysOfCode

// Queremos una RegEx que encuentre todos los hashtags dentro de un texto.

// Explicación del patrón:
// #              → el carácter # literal (lo usamos para detectar el inicio del hashtag)
// [\wáéíóúÁÉÍÓÚñÑ]+ → uno o más caracteres de palabra (letras, números o guion bajo),
//                      incluyendo letras acentuadas y ñ para admitir hashtags en español
// \b             → indica un límite de palabra (para que no se junte con signos u otros caracteres)

// El modificador "g" (global) permite encontrar *todas* las coincidencias, no solo la primera.
const hashtagRegex = /#[\wáéíóúÁÉÍÓÚñÑ]+/g

// Texto de ejemplo
const text = "Hoy estoy aprendiendo #JavaScript y me encanta el #desarrolloWeb. También repaso #expresionesRegulares"

// .match() devuelve un array con todas las coincidencias del patrón
const hashtags = text.match(hashtagRegex)

console.log("Hashtags encontrados:")
console.log(hashtags)

// 3. VALIDAR CONTRASEÑAS SEGURAS
// Requisitos:
// - Mínimo 8 caracteres
// - Al menos una letra
// - Al menos un número

// Explicación del patrón:
//
// ^                 → indica el inicio de la cadena
// (?=.*[A-Za-z])    → lookahead que asegura que haya al menos una letra (mayúscula o minúscula)
// (?=.*\d)          → lookahead que asegura que haya al menos un dígito
// [A-Za-z\d]{8,}    → solo permite letras y números, y exige mínimo 8 caracteres
// $                 → indica el final de la cadena
//
// En resumen: la contraseña debe tener 8+ caracteres, contener letras y números, sin símbolos obligatorios.
//
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

function validatePassword(password){
    const isValid = passwordRegex.test(password)
    if(isValid){
        console.log(`"${password}" es una contraseña segura ✅`)
    }else{
        console.log(`"${password}" NO cumple los requisitos ❌`)
    }
    return isValid
}

console.log("Validación de contraseñas seguras:")
validatePassword("cris1234")      // ✅ válida (8 caracteres, letras y números)
validatePassword("crisss")        // ❌ no tiene número
validatePassword("12345678")      // ❌ no tiene letra
validatePassword("cris12")        // ❌ menos de 8 caracteres