export class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    presentarse() {
        console.log(`soy ${this.nombre} y tengo ${this.edad} años`)
    }
}