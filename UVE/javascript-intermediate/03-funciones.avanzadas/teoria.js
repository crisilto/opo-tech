// ===========================
// TEORÍA: FUNCIONES AVANZADAS
// ===========================

//----------------------------------------------------------
// 🧠 1. FUNCIONES COMO VALORES DE PRIMERA CLASE
//----------------------------------------------------------

// En JavaScript, las funciones son valores como cualquier otro (strings, números...)
// Esto significa que se pueden:
// - Asignar a variables
// - Pasar como argumentos
// - Devolver desde otras funciones

function saludar() {
    console.log("Hola");
}

const accion = saludar; // asignar
accion(); // "Hola"

function ejecutar(fn) {
    fn(); // pasar como argumento
}

ejecutar(saludar);

//----------------------------------------------------------
// 🔁 2. FUNCIONES QUE RETORNAN FUNCIONES
//----------------------------------------------------------

function crearSaludo(nombre) {
    return function () {
        console.log(`Hola, ${nombre}`);
    };
}

const saludoAna = crearSaludo("Ana");
saludoAna(); // "Hola, Ana"

// Esto permite construir funciones personalizadas, configurables o reutilizables

//----------------------------------------------------------
// 🔒 3. CLOSURES (CIERRES)
//----------------------------------------------------------

// Un closure ocurre cuando una función accede a variables de su entorno incluso después de que ese entorno haya terminado de ejecutarse

function contador() {
    let count = 0;
    return function () {
        count++;
        console.log("Cuenta:", count);
    };
}

const contar = contador();
contar(); // Cuenta: 1
contar(); // Cuenta: 2

// La función interna "recuerda" el valor de `count`, aunque la externa ya terminó

//----------------------------------------------------------
// 🔧 4. CURRYING
//----------------------------------------------------------

// Currying = transformar una función de varios parámetros en una serie de funciones que reciben uno a uno

function suma(a) {
    return function (b) {
        return a + b;
    };
}

const sumarCinco = suma(5);
console.log(sumarCinco(3)); // 8

// Currying permite crear funciones más reutilizables y fáciles de componer

//----------------------------------------------------------
// ⚡ 5. IIFE (Immediately Invoked Function Expression)
//----------------------------------------------------------

// Son funciones que se ejecutan automáticamente justo después de declararlas

(function () {
    console.log("Soy una IIFE");
})(); // <- paréntesis finales para ejecutar

// Se usan para:
// - Proteger variables del scope global
// - Ejecutar lógica de inicialización sin dejar rastros

//----------------------------------------------------------
// 🔍 6. this y CONTEXTO DE EJECUCIÓN
//----------------------------------------------------------

// `this` hace referencia al objeto desde donde se llama la función

const persona = {
    nombre: "Laura",
    saludar: function () {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

persona.saludar(); // this → persona

const referencia = persona.saludar;
referencia(); // this → undefined (modo estricto) o window (modo normal)

// En funciones flecha, `this` NO cambia y mantiene el valor del contexto donde fue definida

//----------------------------------------------------------
// 📞 7. call(), apply(), bind()
//----------------------------------------------------------

// Permiten cambiar el valor de `this` manualmente

function mostrarNombre() {
    console.log(`Me llamo ${this.nombre}`);
}

const user = { nombre: "Carlos" };

mostrarNombre.call(user); // Me llamo Carlos
mostrarNombre.apply(user); // igual que call pero con array de args

// bind() devuelve una nueva función con `this` fijado permanentemente

const mostrarDeCarlos = mostrarNombre.bind(user);
mostrarDeCarlos(); // Me llamo Carlos