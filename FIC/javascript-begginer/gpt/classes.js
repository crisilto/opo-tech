// CLASSES - EJERCICIOS

// 1. Crea una clase `Usuario` con propiedades: nombre, edad y correo electrónico.
class Usuario {
    constructor(nombre, edad, correo = "desconocido") {
        this.nombre = nombre
        this.edad = edad
        this.correo = correo
    }
}

// 2. Crea dos instancias de la clase `Usuario` con distintos valores y muéstralas por consola.
let usuario1 = new Usuario("cris", 27, "cris@gmail.com")
let usuario2 = new Usuario("lilith", 4)
console.log(usuario1)
console.log(usuario2)

// 3. Añade valores por defecto a los parámetros del constructor de la clase `Usuario`.

// 4. Accede a las propiedades del objeto con notación punto y con notación de corchetes.
console.log(usuario1.nombre)
console.log(usuario2["nombre"])

// 5. Agrega una nueva propiedad `activo` a una instancia después de su creación.
usuario1.activo = true
console.log(usuario1)

// 6. Crea una clase `Producto` con un método `mostrarInfo()` que imprima sus datos (nombre y precio).
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
    mostrarInfo() {
        console.log(`${this.nombre}, precio: ${this.precio}`)
    }
}

// 7. Crea una clase `Persona` con una propiedad privada `#dni`. Intenta acceder a ella desde fuera y observa qué ocurre.
class PersonaPrivada {
    #nombre
    #edad
    #dni
    #email
    constructor(nombre, edad, dni, email) {
        this.#nombre = nombre
        this.#edad = edad
        this.#dni = dni
        this.#email = email
    }
    verificar() {
        this.#dni
    }
    get nombre() {
        return this.#nombre
    }
    get email() {
        return this.#email
    }
    set email(newEmail) {
        if (newEmail.includes("@")) {
            this.#email = newEmail
        } else {
            console.log("Email no válido")
        }
    }
}
let persona = new PersonaPrivada("cris", 27, "48596181X")
console.log(persona.nombre) //undefined
console.log(persona.edad) //undefined
console.log(persona.dni) //undefined

// 8. Añade un método `verificar` dentro de `Persona` que devuelva el valor de la propiedad privada `#dni`.

// 9. Agrega un getter para poder acceder al valor de una propiedad privada `#nombre`.
console.log(persona.nombre)

// 10. Agrega un setter que permita cambiar una propiedad privada `#email` solo si el nuevo valor incluye "@".


// 11. Crea una clase `CuentaBancaria` con un getter para `saldo` y un setter para modificarlo con validación.
class CuentaBancaria {
    constructor(saldo) {
        this._saldo = saldo; // usamos _saldo internamente
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(newSaldo) {
        if (newSaldo >= 0) {
            this._saldo = newSaldo;
        } else {
            console.log("El saldo debe ser positivo");
        }
    }
}
let miCuenta = new CuentaBancaria(20000);
console.log(miCuenta.saldo); // 20000
miCuenta.saldo = 25000;
console.log(miCuenta.saldo); // 25000
miCuenta.saldo = -100; //  No cambia, da advertencia
console.log(miCuenta.saldo); // 25000

// 12. Crea una clase `Vehiculo` con métodos `acelerar()` y `frenar()`. Llama a esos métodos desde una instancia.
class Vehiculo {
    constructor(velocidad) {
        this.velocidad = velocidad
    }
    acelerar(cambio) {
        this.velocidad += cambio
        console.log(`el vehiculo va a ${this.velocidad}`)
    }
    frenar() {
        this.velocidad = 0
        console.log(`el vehiculo va a ${this.velocidad}, ha frenado`)
    }
}
let miVehiculo = new Vehiculo(100)
console.log(miVehiculo)
miVehiculo.acelerar(20)
miVehiculo.frenar()

// 13. Crea una clase `Animal` y otra clase `Gato` que extienda de `Animal`. Agrega un método `maullar()`.
class Animal {
    constructor(nombre) {
        this.nombre = nombre
    }
    sonido() {
        console.log("los animales hacen sonidos")
    }
}
class Gato extends Animal {
    constructor(nombre) {
        super(nombre)
    }
    maullar() {
        console.log(`el gato ${this.nombre} dice miau`)
    }
}
let miAnimal = new Animal("kenneth")
console.log(miAnimal)
let miGata = new Gato("lilith")
console.log(miGata)
miGata.maullar()

// 14. Crea una clase `Ave` que herede de `Animal` y tenga un método `volar()` que imprima algo.
class Ave extends Animal {
    constructor(nombre) {
        super(nombre)
    }
    volar() {
        console.log(`el ave ${this.nombre} vuela`)
    }
}
let miAve = new Ave("gaviota")
console.log(miAve)
miAve.volar()

// 15. Crea un `Perro` que sobrescriba el método `sonido()` heredado de `Animal`.
class Perro extends Animal {
    constructor(nombre) {
        super(nombre)
    }
    sonido() {
        console.log(`el perro ${this.nombre} dice guau`)
    }
}
let miPerro = new Perro("rocky")
miAnimal.sonido()
miPerro.sonido()

// 16. Intenta usar un método de una subclase en una instancia de otra subclase (por ejemplo, `myFish.run()`). ¿Qué pasa?
// miPerro.maullar() //not a function

// 17. Usa `super()` en el constructor de una clase hija para heredar propiedades del padre.
// está hecho

// 18. Crea una clase `Calculadora` con métodos estáticos: `sumar`, `restar`, `multiplicar`, `dividir`.
class Calculadora {
    static sumar(a, b) {
        return a + b
    }
    static restar(a, b) {
        return a - b
    }
    static multiplicar(a, b) {
        return a * b
    }
    static dividir(a, b) {
        return a / b
    }
}

// 19. Llama a los métodos estáticos de `Calculadora` sin crear ninguna instancia.
console.log(Calculadora.sumar(10, 5))
console.log(Calculadora.restar(10, 5))
console.log(Calculadora.multiplicar(10, 5))
console.log(Calculadora.dividir(10, 5))

// 20. Escribe una clase `Libro` con un método que devuelva una descripción. Crea una subclase `Novela` que agregue un género y sobrescriba ese método.
class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
    }
    descripcion() {
        console.log(`${this.titulo} fue escrito por ${this.autor}`)
    }
}
class Novela extends Libro {
    constructor(titulo, autor, genero) {
        super(titulo, autor)
        this.genero = genero
    }
    descripcion() {
        console.log(`${this.titulo} fue escrito por ${this.autor} y su género es ${this.genero}`)
    }
}
let miNovela = new Novela("metamorphosis", "kafka", "fantasia")
miNovela.descripcion()