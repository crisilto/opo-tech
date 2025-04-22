// ===========================
// EJERCICIOS: FUNCIONES AVANZADAS
// ===========================

// 🧩 1. Declara una función que reciba otra función como parámetro y la ejecute 3 veces.
function greeting() {
    console.log("hi")
}
function execute(fn) {
    for (let i = 0; i < 3; i++) fn();
}

// 🧩 2. Crea una función `crearMultiplicador(n)` que devuelva una nueva función.
// Esta nueva función debe multiplicar cualquier número por `n`.
function createMultiplier(n) {
    return function (x) {
        return n * x
    }
}
const duplicate = createMultiplier(2)
console.log(duplicate(5))
const triplicate = createMultiplier(3)
console.log(triplicate(7))

// 🧩 3. Crea una función `crearContador()` que devuelva otra función que, al llamarla, 
// aumente en 1 un contador interno y lo devuelva.
function createCounter() {
    let count = 0
    return function () {
        count++
        console.log("count: ", count)
    }
}
const myCount = createCounter()
myCount()
myCount()

// 🧩 4. Implementa una función con currying que permita sumar 3 números, uno a uno:
// ejemplo: `sumar(1)(2)(3)` debería devolver 6.
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
const mySum = sum(1)(2)(3)
console.log(mySum)

    // 🧩 5. Usa una IIFE para declarar una variable `secreto` que NO esté disponible en el scope global,
    // y dentro de la IIFE muéstrala por consola.
    (function () {
        let secret = "my secret variable"
        console.log(secret)
    })()

// 🧩 6. Crea un objeto `persona` con una propiedad `nombre` y un método `saludar()` que use `this`.
// Luego, guarda ese método en una variable aparte y ejecútalo. ¿Qué pasa con `this`?
const person = {
    name: "cris",
    greet: function () {
        console.log("hello ", this.name)
    }
}
const myGreet = person.greet; // referenciar la función, sin ()
myGreet(); // ❌ pero aquí this ya no apunta a person

// 🧩 7. Corrige el ejercicio anterior usando `bind()` para mantener el contexto de `this`.
const myBindGreet = person.greet.bind(person) // 👈 fijamos this a `person`
myBindGreet() // ✅ hello cris

// 🧩 8. Escribe una función `saludarConNombre` que use `this.nombre`.
// Luego usa `call()` para ejecutarla usando distintos objetos.
function greetWithName() {
    console.log("hi ", this.name)
}
const pers = { name: "cris" }
greetWithName.call(pers)
greetWithName.call({ name: "ana" })
greetWithName.call({ name: "leo" })

// 🧩 9. Usa `apply()` para invocar una función que suma tres números, pasando los números como array.
function sumApply(a, b, c) {
    return a + b + c;
}
const numbers = [10, 5, 15]
const result = sumApply.apply(null, numbers)
console.log(result)

// 🧩 10. BONUS: Crea una función flecha dentro de un método de un objeto, y observa cómo `this` se comporta distinto.
// ¿Por qué ocurre eso? (Escribe tu razonamiento en un comentario.)
const cat = {
    name: "lilith",
    greet: () => console.log("hi ", this.name)
}
const catGreet = cat.greet
catGreet()
// ❓ ¿Por qué 'this.name' no muestra 'lilith' con función flecha?
// Las funciones flecha no tienen su propio 'this'.
// En vez de eso, heredan el 'this' del contexto externo donde fueron creadas.
// Por eso, en el ejemplo, 'this' NO apunta al objeto 'cat',
// sino al contexto global, donde no existe 'name'.

// ===========================
// EJERCICIOS EXTRA: FUNCIONES AVANZADAS
// ===========================

// 🧩 1. Crea una función `repetir(fn, veces)` que reciba una función y un número,
// y ejecute la función la cantidad de veces indicada.
// Ejemplo: repetir(() => console.log("hola"), 3)  // imprime "hola" 3 veces
function repeat(fn, times) {
    for (let i = 0; i < times; i++) {
        fn()
    }
}
repeat(() => console.log("hello"), 3)

// 🧩 2. Crea una función `crearSaludador(nombre)` que devuelva otra función.
// La función devuelta debe saludar usando el `nombre` guardado.
// Ejemplo:
// const saludaAna = crearSaludador("Ana")
// saludaAna() // 👉 "Hola Ana"
function createGreeting(name) {
    return function () {
        console.log("hello ", name)
    }
}
const greetCris = createGreeting("cris")
greetCris()

// 🧩 3. Crea una función `crearContadorDesde(valorInicial)` que devuelva una función
// que incremente desde ese valor cada vez que se llame.
// Ejemplo:
// const contador = crearContadorDesde(10)
// contador() // 11
// contador() // 12
function createCountFrom(initialValue) {
    return function () {
        initialValue++
        return initialValue
    }
}
const count = createCountFrom(10)
console.log(count())
console.log(count())
console.log(count())

// 🧩 4. Crea una función `multiplicar(a)(b)(c)` usando currying que devuelva 
// el producto de los 3.
function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}
const myProduct = multiply(2)(3)(3)
console.log(myProduct)

// 🧩 5. Usa una IIFE para crear un módulo contador con dos métodos:
//  `incrementar()` y `obtener()`.
// El contador debe ser privado y no accesible desde fuera del módulo.
const contador = (function () {
    let valor = 0 // 🔒 variable privada
    function incrementar() {
        valor++;
    }
    function obtener() {
        return valor
    }
    return {
        incrementar,
        obtener
    }
})()
contador.incrementar()
contador.incrementar()
console.log(contador.obtener())
console.log(contador.valor)

// 🧩 6. Crea un objeto `perro` con una propiedad `nombre` y un método `ladrar()`
// que use `this`. Guarda ese método en otra variable y ejecútalo con `call()` para que funcione.
const dog = {
    name: "oslo",
    bark: function () {
        console.log(`${this.name} is barking`)
    }
}
const ladrar = dog.bark
ladrar.call(dog)

// 🧩 7. Usa `.apply()` para invocar una función que resta 4 números, pasando un array como argumento.
function rest(a, b, c, d) {
    return a - b - c - d
}

// 🧩 8. Usa `.bind()` para fijar el contexto de `this` en una función que accede a una propiedad `color`.


// 🧩 9. BONUS: Crea un objeto `usuario` con una propiedad `nombre` y un método `presentarse()`.
// Dentro del método, declara una función flecha que imprima `this.nombre`. ¿Qué imprime y por qué?

// 🧩 10. BONUS 2: Escribe una función `crearLogger(prefijo)` que devuelva otra función.
// La función devuelta debe imprimir en consola cualquier mensaje con ese prefijo.
// Ejemplo:
// const errorLogger = crearLogger("[ERROR]")
// errorLogger("Archivo no encontrado") // 👉 [ERROR] Archivo no encontrado