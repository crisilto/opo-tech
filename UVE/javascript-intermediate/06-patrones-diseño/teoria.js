// ========================================
// TEORÍA: PATRONES DE DISEÑO BÁSICOS EN JS
// ========================================

//----------------------------------------------------------
// 📦 1. PATRÓN MÓDULO
//----------------------------------------------------------
// Sirve para encapsular funcionalidad y evitar contaminar el scope global.
// Se suele usar con funciones IIFE o con módulos ES6 (import/export).

const moduloContador = (function () {
    let cuenta = 0;

    function incrementar() {
        cuenta++;
        console.log(`Cuenta: ${cuenta}`);
    }

    function reiniciar() {
        cuenta = 0;
        console.log("Reiniciado");
    }

    // Solo exponemos lo que queremos
    return {
        incrementar,
        reiniciar
    };
})();

// Uso:
moduloContador.incrementar();
moduloContador.reiniciar();

//----------------------------------------------------------
// 👤 2. SINGLETON
//----------------------------------------------------------
// Garantiza que una clase tenga una ÚNICA instancia y da un punto de acceso global a ella.

class Config {
    constructor() {
        if (Config.instancia) {
            return Config.instancia;
        }
        this.ajustes = {};
        Config.instancia = this;
    }

    set(clave, valor) {
        this.ajustes[clave] = valor;
    }

    get(clave) {
        return this.ajustes[clave];
    }
}

// Uso:
const config1 = new Config();
const config2 = new Config();
console.log(config1 === config2); // true

//----------------------------------------------------------
// 🏭 3. FACTORY FUNCTION
//----------------------------------------------------------
// Una función que crea y devuelve objetos personalizados sin necesidad de usar clases.

function crearUsuario(nombre, edad) {
    return {
        nombre,
        edad,
        saludar() {
            console.log(`Hola, soy ${nombre}`);
        }
    };
}

const usuario1 = crearUsuario("Ana", 30);
const usuario2 = crearUsuario("Luis", 25);
usuario1.saludar(); // Hola, soy Ana

// Es útil cuando no necesitas herencia y prefieres objetos simples y claros

//----------------------------------------------------------
// 🛰️ 4. OBSERVER (PUB/SUB - Publicador/Suscriptor)
//----------------------------------------------------------
// Permite que múltiples objetos "escuchen" cambios o eventos sin estar acoplados directamente.
// Muy usado en interfaces (ej: botones, eventos, sockets...).

class Publicador {
    constructor() {
        this.subscriptores = [];
    }

    suscribirse(fn) {
        this.subscriptores.push(fn);
    }

    publicar(data) {
        this.subscriptores.forEach(fn => fn(data));
    }
}

// Uso:
const noticias = new Publicador();

noticias.suscribirse(data => {
    console.log("Receptor 1:", data);
});

noticias.suscribirse(data => {
    console.log("Receptor 2:", data);
});

noticias.publicar("Nuevo evento publicado");

// Ideal para sistemas de eventos, notificaciones, sockets, etc