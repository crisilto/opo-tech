// ============================================
// TEORÍA: PROGRAMACIÓN ORIENTADA A OBJETOS PROFUNDA
// ============================================

//----------------------------------------------------------
// 🧱 1. CLASES: métodos, propiedades, constructores
//----------------------------------------------------------

// Las clases son una forma más clara de escribir objetos y prototipos en JavaScript moderno

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }

    cumplirAnios() {
        this.edad++;
    }
}

const ana = new Persona('Ana', 25);
ana.saludar(); // "Hola, me llamo Ana"
ana.cumplirAnios();
console.log(ana.edad); // 26

//----------------------------------------------------------
// 🧬 2. HERENCIA CON `extends`
//----------------------------------------------------------

// Podemos crear una clase que herede de otra usando `extends`

class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad); // Llamada al constructor padre
        this.curso = curso;
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.curso}`);
    }
}

const juan = new Estudiante('Juan', 20, 'JS Intermedio');
juan.saludar(); // método heredado
juan.estudiar(); // método propio

//----------------------------------------------------------
// 🧭 3. super() y llamada al constructor padre
//----------------------------------------------------------

// Dentro del constructor de una clase hija, `super()` es obligatorio si quieres acceder a `this`

class Animal {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class Perro extends Animal {
    constructor(nombre) {
        super('perro'); // Obligatorio para inicializar `this`
        this.nombre = nombre;
    }

    ladrar() {
        console.log(`${this.nombre} dice ¡guau!`);
    }
}

//----------------------------------------------------------
// 🔧 4. MÉTODOS ESTÁTICOS Y PRIVADOS
//----------------------------------------------------------

// Métodos estáticos: se llaman desde la clase, no desde la instancia

class Utilidades {
    static saludar() {
        console.log("Hola desde Utilidades");
    }
}

Utilidades.saludar(); // ✅

const u = new Utilidades();
// u.saludar(); ❌ error: no se puede llamar desde la instancia

// Propiedades privadas: se definen con `#`
// Solo se puede acceder a ellas dentro de la clase

class CuentaBancaria {
    #saldo = 0;

    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
        }
    }

    verSaldo() {
        return this.#saldo;
    }
}

const cuenta = new CuentaBancaria();
cuenta.depositar(100);
console.log(cuenta.verSaldo()); // 100
// console.log(cuenta.#saldo); ❌ error

//----------------------------------------------------------
// 🧩 5. COMPOSICIÓN vs HERENCIA
//----------------------------------------------------------

// HERENCIA: una clase extiende otra y "es una" versión más específica
// COMPOSICIÓN: un objeto "tiene" funcionalidades de otros, sin heredar

// Ejemplo de herencia (clásico):
class Ave {
    volar() {
        console.log("Estoy volando");
    }
}

class Aguila extends Ave { }

const a = new Aguila();
a.volar(); // ✅

/// Ejemplo de composición (más flexible):
const volador = {
    volar() {
        console.log("Estoy volando");
    }
};

const nadador = {
    nadar() {
        console.log("Estoy nadando");
    }
};

function crearPato(nombre) {
    return {
        nombre,
        ...volador,
        ...nadador
    };
}

const pato = crearPato("Donald");
pato.volar(); // ✅
pato.nadar(); // ✅

// La composición es útil cuando no hay una jerarquía clara o cuando quieres mezclar comportamientos.
