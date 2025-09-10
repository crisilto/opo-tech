// ========================================
// EJERCICIOS: ALMACENAMIENTO WEB
// ========================================

//----------------------------------------------------------
// 📦 localStorage y sessionStorage
//----------------------------------------------------------

// 🧩 1. Guarda el nombre de un usuario en localStorage y recupéralo para mostrarlo por consola.

// 🧩 2. Guarda el tema "oscuro" en sessionStorage bajo la clave "modo".
//    - Luego recupéralo y muestra si el modo oscuro está activo.

// 🧩 3. Borra un dato específico de localStorage usando removeItem().

// 🧩 4. Limpia todo el contenido de localStorage con clear().

//----------------------------------------------------------
// 📄 JSON.stringify() y JSON.parse()
//----------------------------------------------------------

// 🧩 5. Guarda un objeto con nombre, email y edad en localStorage.
//    - Usa JSON.stringify() antes de guardarlo.

// 🧩 6. Recupera el objeto anterior desde localStorage y accede a sus propiedades usando JSON.parse().

// 🧩 7. BONUS: Guarda un array de tareas (strings o objetos con `texto`, `hecho`) en localStorage.
//    - Luego recupéralo y recórrelo para mostrar cada tarea.

//----------------------------------------------------------
// 🗃️ IndexedDB (intro)
//----------------------------------------------------------

// 🧩 8. Crea una base de datos "TareasDB" con un store llamado "tareas".
//    - El keyPath debe ser "id".

// 🧩 9. Añade una tarea con id, texto y estado (`completada: false`) al store.

// 🧩 10. Recupera todas las tareas del store y muéstralas por consola.

// 🧩 11. BONUS: Modifica una tarea cambiando su propiedad `completada` a `true`.

// 🧩 12. BONUS: Borra una tarea por su id.

//----------------------------------------------------------
// 🧠 Estrategias de persistencia
//----------------------------------------------------------

// 🧩 13. Simula un "modo oscuro" que recuerde la preferencia del usuario en localStorage.
//    - Si está activado, aplica una clase al body.

// 🧩 14. Simula un formulario multi-paso donde se guarde en sessionStorage el progreso del usuario.

// 🧩 15. BONUS: Crea una función `guardarTemporalmente(clave, valor, expiracionEnSegundos)`
//    - Guarda el valor en localStorage junto con una marca de expiración
//    - Al recuperar, verifica si ha expirado y si es así, bórralo y devuelve null
