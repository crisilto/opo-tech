// TRUTHY / FALSY / COERCION - EJERCICIOS

// 1. Declara una variable vacía y verifica si se evalúa como true o false usando `Boolean()`.
let vacia = ""
console.log(Boolean(vacia)) //false

// 2. Verifica si un array vacío y un objeto vacío son truthy o falsy.
let arrVacio = []
console.log(Boolean(arrVacio)) //true
let objVacio = {}
console.log(Boolean(objVacio)) //true

// 3. Escribe una condición con `if` que se cumpla solo si una variable `user` no está vacía.
let user = ""
if (user) {
    console.log("hola") //no se imprime, si user fuera "a" por ej. o [] sí se imprimiría
}

// 4. Usa coerción para sumar `"10"` con el número `5`. ¿Qué resultado da?
console.log("10" + 5) //105

// 5. Resta `"10"` menos `3` y explica por qué el resultado no es un string.
console.log("10" - 3) //7 el resultado es number porque la resta JS, a diferencia de la suma
//donde concatena (103), sí que hace la operación

// 6. Suma `null` con `1`. Luego suma `undefined` con `1`. ¿Qué diferencias ves?
console.log(null + 1) //1 (null vale 0)
console.log(undefined + 1) //NaN (undefined no se puede convertir nunca a numero)

// 7. Usa `==` y `===` para comparar los siguientes pares y explica el resultado:
//    - `5` y `"5"`
//    - `null` y `undefined`
//    - `true` y `1`
console.log(5 == "5") //true
console.log(5 === "5") //false
console.log(null == undefined) //true
console.log(null === undefined) //false
console.log(true == 1) //true
console.log(true === 1) //false
//basicamente todos los valores significan lo mismo por comparación como valor peor
//cuando la comparación es estricta === a parte del valor también compara el tipo de dato
//donde ahí si difieren

// 8. Declara una función que reciba un parámetro y retorne si es truthy o falsy.
function recibeParam(param) {
    return Boolean(param)
}
console.log(recibeParam(true)) //true
console.log(recibeParam(false)) //false
console.log(recibeParam("")) //false
console.log(recibeParam("a")) //true
console.log(recibeParam(0)) //false
console.log(recibeParam(5)) //true

// 9. Escribe una condición que verifique si una variable `password` no está vacía y no es `undefined`.
let password = undefined
if (!password && password != undefined) {
    console.log(password)
}

// 10. Evalúa el valor booleano de cada uno de estos y comenta si son truthy o falsy:
//     - 0
//     - " "
//     - []
//     - {}
//     - NaN
//     - "false"
console.log(Boolean(0)) //false
console.log(Boolean("")) //false
console.log(Boolean([])) //true
console.log(Boolean({})) //true
console.log(Boolean(NaN)) //false
console.log(Boolean(false)) //false
console.log(Boolean("false")) //true