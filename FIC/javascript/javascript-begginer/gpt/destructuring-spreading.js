// DESTRUCTURING & SPREADING - EJERCICIOS

// 1. Declara un array con cinco números y usa destructuring para asignarlos a cinco variables individuales.
let numeros = [13, 1, 3, 31, 12]
let [num1, num2, num3, num4, num5] = numeros
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)

// 2. Usa destructuring para extraer solo el primer y el cuarto valor de un array.
let letras = ["a", "b", "c", "d", "e", "f", "u"]
let [primeraLetra, , , cuartaLetra] = letras
console.log(primeraLetra)
console.log(cuartaLetra)

// 3. Aplica destructuring en un array de cuatro elementos y asigna un valor por defecto a un quinto.
let arr4 = [12, 13, 11, 21]
let [el1, el2, el3, el4, el5 = 0] = arr4
console.log(el5)

// 4. Declara un objeto `libro` con propiedades: título, autor y año. Usa destructuring para extraer las propiedades.
let libro = {
    titulo: "metamorphosis",
    autor: "kafka",
    año: 0
}
let { titulo, autor, año } = libro
console.log(titulo)
console.log(autor)
console.log(año)

// 5. Extrae las propiedades del objeto `libro`, pero con nombres de variables diferentes.
let { titulo: tituloLibro, autor: autorLibro, año: añoLibro } = libro
console.log(tituloLibro)
console.log(autorLibro)
console.log(añoLibro)

// 6. Crea un objeto `estudiante` con una propiedad anidada `direccion` que tenga `ciudad` y `pais`. Extrae solo `ciudad` usando destructuring.
let estudiante = {
    nombre: "cris",
    direccion: {
        pais: "españa",
        ciudad: "valencia"
    }
}
let { direccion: { ciudad: ciudad } } = estudiante
let { direccion: { pais: pais } } = estudiante
console.log(ciudad)
console.log(pais)

// 7. Usa destructuring dentro de una función para recibir un objeto `usuario` con nombre y edad, e imprimirlos sin acceder a `usuario.propiedad`.
let usuario = {
    nombre: "cris",
    edad: 27
}
function imprimirPropiedad({ nombre, edad }) {
    console.log(`nombre: ${nombre}, edad: ${edad}`)
}
imprimirPropiedad(usuario)

// 8. Usa el operador spread (`...`) para crear una copia de un array `notas`.
let notas1 = [7, 7.5, 10, 3]
let notas2 = [...notas1]
console.log(notas2)

// 9. Crea un nuevo array combinando dos arrays (`notas1` y `notas2`) usando `...`.
let notas3 = [...notas1, ...notas2]
console.log(notas3)

// 10. Agrega nuevos elementos al principio y al final de un array existente usando `...`.
notas3 = [10, ...notas3, 10]
console.log(notas3)

// 11. Usa el operador spread para copiar un objeto `persona` y agregar una nueva propiedad `email`.
let persona = {
    nombre: "cris",
    edad: 27
}
let personaCompleta = { ...persona, email: "cris@gmail.com" }
console.log(personaCompleta)

// 12. Crea un objeto `producto` con nombre y precio. Usa spread para copiarlo y cambiar el precio sin modificar el original.
let producto = {
    nombre: "pistachos",
    precio: 2
}
let producto2 = { ...producto, precio: 3 }
console.log(producto)
console.log(producto2)

// 13. Usa destructuring para extraer el valor `alias` de un objeto `usuario`, y asignarlo a una variable `apodo`.
let usuario2 = {
    nombre: "cris",
    edad: 27,
    alias: "criscries"
}
let { alias: apodo } = usuario2
console.log(apodo)

// 14. Declara un array con strings y usa destructuring para almacenar el primero en una variable `primero` y el resto en otra variable `resto` (usa `...rest`).
let arcane = ["jinx", "vi", "caitlyn"]
let [primero, ...resto] = arcane
console.log(primero)
console.log(resto)

// 15. Usa destructuring para intercambiar los valores de dos variables: `a = 5`, `b = 10` → que queden `a = 10`, `b = 5`.
let a = 5;
let b = 10;
[a, b] = [b, a]; // Intercambio de valores
console.log(a); // 10
console.log(b); // 5

// 16. Crea una función que reciba un array de tres elementos y los desestructure como parámetros.
let arr3 = [13, "cris", 12]
function destruct([el1, el2, el3]) {
    console.log(`elemento1: ${el1}, elemento2: ${el2}, elemento3: ${el3}`)
}
destruct(arr3)

// 17. Crea una función que reciba un objeto con `nombre` y `edad` y devuelva una frase como "Soy [nombre] y tengo [edad] años", usando destructuring.
function frase({ nombre, edad }) {
    console.log(`soy ${nombre} y tengo ${edad} años`)
}
let pers = {
    nombre: "cris",
    edad: 27
}
frase(pers)

// 18. Usa destructuring con valores por defecto para evitar errores si una propiedad no existe en un objeto.
let myObject = {
    nombre: "objeto",
    tipo: "objeto"
}
let { nombre, tipo, random = "desconocido" } = myObject
console.log(random)

// 19. Combina un objeto `usuario` con uno nuevo `config` que tenga una propiedad `modoOscuro: true`.
let config = {
    modoOscuro: true
}
let usuarioConfig = { ...usuario, ...config }
console.log(usuarioConfig)

// 20. Desestructura el método `walk()` de un objeto `mascota` y ejecútalo sin acceder directamente a `mascota.walk()`.
let mascota = {
    nombre: "lilith",
    edad: 4,
    walk: function () {
        console.log(`${this.nombre} camina`);
    }
};

let { walk } = mascota;
walk = walk.bind(mascota);
walk(); 