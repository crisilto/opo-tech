// ========================================
// TEORÍA: ALMACENAMIENTO WEB EN JAVASCRIPT
// ========================================

//----------------------------------------------------------
// 📦 1. localStorage y sessionStorage
//----------------------------------------------------------

// Ambos son objetos globales del navegador para almacenar datos en clave/valor (tipo string)

// ➤ localStorage: los datos permanecen incluso si cierras el navegador
localStorage.setItem('usuario', 'Ana');
const nombre = localStorage.getItem('usuario'); // "Ana"
localStorage.removeItem('usuario');
localStorage.clear(); // elimina todo

// ➤ sessionStorage: los datos solo duran mientras la pestaña esté abierta
sessionStorage.setItem('tema', 'oscuro');
const tema = sessionStorage.getItem('tema'); // "oscuro"

// Ambos solo guardan STRINGS

//----------------------------------------------------------
// 📄 2. JSON.stringify() y JSON.parse()
//----------------------------------------------------------

// Para guardar objetos o arrays en storage, hay que convertirlos a texto con JSON

const usuario = {
  nombre: "Ana",
  edad: 28
};

localStorage.setItem("user", JSON.stringify(usuario));

const recuperado = JSON.parse(localStorage.getItem("user"));
console.log(recuperado.nombre); // "Ana"

// stringify() → objeto/array → string
// parse() → string → objeto/array

//----------------------------------------------------------
// 🗃️ 3. IndexedDB (intro muy básica)
//----------------------------------------------------------

// Es una base de datos en el navegador, más potente que localStorage
// Permite guardar datos estructurados (objetos) de forma asíncrona

// API algo compleja, pero buena para guardar mucha info (ej: apps offline)

const solicitud = indexedDB.open("MiBaseDeDatos", 1);

solicitud.onupgradeneeded = function (evento) {
  const db = evento.target.result;
  db.createObjectStore("usuarios", { keyPath: "id" });
};

solicitud.onsuccess = function (evento) {
  const db = evento.target.result;
  const transaccion = db.transaction(["usuarios"], "readwrite");
  const store = transaccion.objectStore("usuarios");

  store.add({ id: 1, nombre: "Ana" });
  store.add({ id: 2, nombre: "Luis" });
};

// Nota: IndexedDB funciona con eventos, no con promesas (aunque se puede usar con wrappers modernos)

//----------------------------------------------------------
// 🧠 4. Estrategias de persistencia en frontend
//----------------------------------------------------------

// ¿Cuándo usar cuál?

// ✅ localStorage:
// - Preferido para configuraciones, temas, datos que deben persistir entre sesiones
// - Ideal para cosas simples: idioma, carrito, dark mode

// ✅ sessionStorage:
// - Útil para mantener datos mientras la pestaña está abierta
// - Ej: pasos en un formulario, sesión temporal

// ✅ IndexedDB:
// - Cuando necesitas almacenar muchos datos, como:
//   - apps offline (notas, tareas, juegos, etc.)
//   - sincronizar cuando el usuario vuelva a estar online
//   - historial, almacenamiento multimedia

// ⚠️ Importante:
// - No guardar información sensible (passwords, tokens) en almacenamiento web
// - Usa expiraciones personalizadas si lo necesitas (no hay expiración automática)
