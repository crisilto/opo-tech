// SÍNCRONO VS ASÍNCRONO
// JavaScript es un lenguaje de ejecución *síncrona y single-threaded*,
// pero permite operaciones asíncronas como peticiones de red, timers, etc.

console.log("1. Inicio");
console.log("2. Proceso");
console.log("3. Fin");

// ASÍNCRONO: con setTimeout (simula esperar)
console.log("Antes del setTimeout");

setTimeout(() => {
    console.log("Esto se ejecuta después (asíncrono)");
}, 1000);

console.log("Después del setTimeout");

// CALLBACKS
// Una función callback es una función que se pasa como argumento a otra función

function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}

function procesarEntradaUsuario(callback) {
    const nombre = "Cristina";
    callback(nombre); // Aquí se llama a la función recibida como argumento
}

procesarEntradaUsuario(saludar);

// CALLBACKS EN ASINCRONÍA
function tareaAsincrona(callback) {
    console.log("Empieza tarea...");
    setTimeout(() => {
        console.log("Tarea completada");
        callback(); // Se llama cuando termina
    }, 1500);
}

tareaAsincrona(() => {
    console.log("Callback ejecutado tras la tarea");
});

// CALLBACK HELL (cuando se anidan demasiado)
setTimeout(() => {
    console.log("Paso 1");
    setTimeout(() => {
        console.log("Paso 2");
        setTimeout(() => {
            console.log("Paso 3");
        }, 500);
    }, 500);
}, 500);

// EVENT LOOP (simplificado)
// El event loop gestiona cuándo se ejecutan tareas síncronas y asíncronas.
// Las tareas asíncronas van a la "cola de tareas" y esperan a que el hilo principal esté libre.
