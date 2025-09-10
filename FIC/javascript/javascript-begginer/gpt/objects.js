// OBJECTS - EJERCICIOS

// 1. Crea un objeto `usuario` con propiedades: nombre, edad y ciudad.
let usuario = {
    nombre: "cris",
    edad: 27,
    ciudad: "valencia"
}

// 2. Muestra el valor de la propiedad `ciudad` usando notación punto y corchetes.
console.log(usuario.ciudad)
console.log(usuario["ciudad"])

// 3. Modifica la propiedad `nombre` del objeto anterior por otro nombre.
usuario.nombre = "cristina"
console.log(usuario.nombre)

// 4. Elimina la propiedad `edad` del objeto y muestra el resultado actualizado.
delete usuario.edad
console.log(usuario)

// 5. Añade una nueva propiedad `email` al objeto `usuario`.
usuario.email = "cris@email.com"
console.log(usuario)

// 6. Añade otra propiedad llamada `esActivo` usando notación de corchetes y dale un valor booleano.
usuario["esActivo"] = true
console.log(usuario)

// 7. Crea un método dentro del objeto llamado `saludar` que imprima un mensaje con el nombre del usuario.
usuario.saludar = function () {
    console.log(`hola ${usuario.nombre}`)
}
usuario.saludar()

// 8. Crea un objeto llamado `mascota` que tenga una propiedad anidada `vacunas` con nombre y fecha.
let mascota = {
    nombre: "lilith",
    edad: 4,
    vacunas: {
        nombre: "rabia",
        fecha: "01/03/25"
    }
}

// 9. Dentro del objeto `mascota`, añade un método `ladrar` que imprima "¡Guau!".
mascota.ladrar = function () {
    console.log("guau")
}
mascota.ladrar()

// 10. Crea un segundo objeto con las mismas propiedades y valores que `usuario`, y comprueba si son estrictamente iguales (`===`).
console.log(usuario)
let usuario2 = {
    nombre: "cristina",
    ciudad: "valencia",
    email: "cris@email.com",
    esActivo: true,
    saludar: function () {
        console.log(`hola ${usuario.nombre}`)
    }
}
console.log(usuario === usuario2) //false

// 11. Compara si los nombres de ambos objetos son iguales usando `===`.
console.log(usuario)
console.log(usuario2)
console.log(usuario.nombre === usuario2.nombre) //true

// 12. Recorre todas las propiedades de `usuario` con un bucle `for...in` e imprime: "clave: valor".
for (const clave in usuario) {
    console.log(`${clave}: ${usuario[clave]}`)
}

// 13. Declara una función constructora llamada `Vehiculo` con propiedades: marca y año.
class Vehiculo {
    constructor(marca, año) {
        this.marca = marca,
            this.año = año
    }
}

// 14. Usa `new Vehiculo()` para crear dos objetos distintos y muéstralos por consola.
let vehiculo1 = new Vehiculo("toyota", 2010)
let vehiculo2 = new Vehiculo("ford", 2009)
console.log(vehiculo1)
console.log(vehiculo2)

// 15. Crea un objeto `libro` con un método que imprima el título y el autor usando `this`.
let libro = {
    titulo: "metamorphosis",
    autor: "kafka",
    resumen: function () {
        console.log(`${this.titulo} escrito por ${this.autor}`)
    }
}
libro.resumen()

// 16. Añade al objeto `usuario` una propiedad llamada `amigos`, que sea un array de strings.
usuario.amigos = ["lidia", "laura", "edder"]
console.log(usuario)

// 17. Crea un array llamado `usuarios` que contenga varios objetos tipo `usuario` con nombre y edad.
let usuarios = [
    { ...usuario, nombre: "Cristina", edad: 27 },
    { ...usuario, nombre: "Lidia", edad: 30 },
    { ...usuario, nombre: "Laura", edad: 28 }
];

console.log(usuarios);

// 18. Accede al segundo objeto del array `usuarios` y cambia su edad.
usuarios[1].edad = 23
console.log(usuarios[1])

// 19. Crea una función que reciba un objeto y muestre todas sus claves con `Object.keys()`.
function mostrarClaves(obj) {
    return Object.keys(obj)
}
console.log(mostrarClaves(usuario))

// 20. Crea una función que reciba un objeto y devuelva una lista de todos sus valores usando `Object.values()`.
function mostrarValores(obj) {
    return Object.values(obj)
}
console.log(mostrarValores(usuario))