// ===============================
// ASINCRONÍA MODERNA EN JAVASCRIPT
// ===============================

// JavaScript es un lenguaje de ejecución *single-threaded* (un solo hilo),
// pero puede trabajar con tareas asincrónicas (no bloqueantes), gracias a su event loop y APIs del entorno.

// En esta sección veremos cómo manejar asincronía con:
// - Promesas (Promise)
// - Sintaxis async/await
// - Utilidades como Promise.all, .race, etc.
// - Encadenamiento
// - Manejo robusto de errores

//----------------------------------------------------------
// 🧩 1. PROMESAS (Promise): creación, resolución, rechazo
//----------------------------------------------------------

// Una Promesa representa un valor que estará disponible ahora, en el futuro o nunca.

const promesaEjemplo = new Promise((resolve, reject) => {
    const exito = true;
    if (exito) {
        resolve('¡Todo bien!'); // cuando todo va bien
    } else {
        reject('Algo falló'); // cuando algo falla
    }
});

// Una promesa tiene 3 estados:
// - pending (pendiente)
// - fulfilled (cumplida -> resolve)
// - rejected (rechazada -> reject)

// Para usarla:

promesaEjemplo
    .then(resultado => {
        console.log('Éxito:', resultado); // '¡Todo bien!'
    })
    .catch(error => {
        console.log('Error:', error);
    });


//----------------------------------------------------------
// 🧠 2. ASYNC/AWAIT: sintaxis, errores
//----------------------------------------------------------

// async convierte una función normal en una función que SIEMPRE devuelve una promesa
// await "pausa" la ejecución hasta que una promesa se resuelva (o rechace)

async function obtenerDatos() {
    try {
        const respuesta = await promesaEjemplo; // espera que se resuelva
        console.log('Datos:', respuesta);
    } catch (error) {
        console.log('Hubo un error:', error);
    }
}

// Nota: await SOLO puede usarse dentro de funciones async

// También se puede usar await con funciones que devuelven promesas como fetch:

// const respuesta = await fetch('https://api.ejemplo.com/data');

//----------------------------------------------------------
// 🧪 3. MÉTODOS: Promise.all, Promise.race, allSettled, any
//----------------------------------------------------------

// Estas utilidades permiten trabajar con varias promesas al mismo tiempo:

const p1 = Promise.resolve('A');
const p2 = Promise.resolve('B');
const p3 = Promise.resolve('C');

// Promise.all: espera que TODAS se resuelvan (si una falla, todo falla)
Promise.all([p1, p2, p3])
    .then(resultados => console.log('All:', resultados))
    .catch(err => console.log('Fallo en alguna:', err));

// Promise.race: devuelve el resultado de la PRIMERA que se resuelva (o falle)
Promise.race([p1, p2, p3])
    .then(resultado => console.log('Race:', resultado));

// Promise.allSettled: espera TODAS y da un resumen de cada una (no falla)
Promise.allSettled([p1, p2])
    .then(resultados => console.log('AllSettled:', resultados));

// Promise.any: espera la PRIMERA que se RESUELVA (ignora errores, falla si todas fallan)
const promesaFalla = Promise.reject('Error');
Promise.any([promesaFalla, p2])
    .then(resultado => console.log('Any:', resultado))
    .catch(err => console.log('Todas fallaron:', err));

//----------------------------------------------------------
// 🔗 4. ENCADENAMIENTO DE PROMESAS
//----------------------------------------------------------

// Las promesas permiten encadenar pasos asincrónicos secuenciales

function paso1() {
    return Promise.resolve('Paso 1');
}

function paso2(data) {
    return Promise.resolve(data + ' → Paso 2');
}

function paso3(data) {
    return Promise.resolve(data + ' → Paso 3');
}

paso1()
    .then(resultado1 => paso2(resultado1))
    .then(resultado2 => paso3(resultado2))
    .then(final => console.log('Resultado final:', final))
    .catch(err => console.error('Error en la cadena:', err));

// También puede hacerse con async/await:

async function ejecutarCadena() {
    try {
        const r1 = await paso1();
        const r2 = await paso2(r1);
        const r3 = await paso3(r2);
        console.log('Resultado final (async):', r3);
    } catch (e) {
        console.error('Error en async/await:', e);
    }
}

//----------------------------------------------------------
// 🛡️ 5. MANEJO ROBUSTO DE ERRORES EN ASINCRONÍA
//----------------------------------------------------------

// Usar .catch() en promesas, y bloques try/catch en async/await

// También podemos capturar errores globalmente en casos más avanzados:

window.addEventListener('unhandledrejection', e => {
    console.warn('¡Promesa no capturada!', e.reason);
});

// Buenas prácticas:
// - Siempre usar try/catch en funciones async
// - Encadenar catch() al final de .then()
// - Manejar errores específicos (ej. red, lógica, etc.)
// - Validar respuestas (por ejemplo, verificar status en fetch)

