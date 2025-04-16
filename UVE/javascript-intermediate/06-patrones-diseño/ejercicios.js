// ========================================
// EJERCICIOS: PATRONES DE DISEÑO BÁSICOS
// ========================================

//----------------------------------------------------------
// 📦 MÓDULO
//----------------------------------------------------------

// 🧩 1. Crea un módulo contador (tipo IIFE) que tenga:
//    - una variable privada `cuenta`
//    - métodos públicos `incrementar()`, `decrementar()` y `ver()`
//    - que no se pueda acceder directamente a `cuenta`

// 🧩 2. Crea un módulo para manejar una lista de tareas:
//    - métodos: añadir, eliminar por índice, ver lista
//    - que la lista no sea accesible desde fuera

//----------------------------------------------------------
// 👤 SINGLETON
//----------------------------------------------------------

// 🧩 3. Crea una clase `Logger` que implemente el patrón Singleton.
//    - debe tener un método `log(mensaje)` que agregue el mensaje a un array interno
//    - otro método `verLogs()` para ver los mensajes guardados

// 🧩 4. Crea dos instancias de `Logger` y demuestra que apuntan al mismo objeto
//    (los mensajes logueados desde una deben aparecer en la otra)

//----------------------------------------------------------
// 🏭 FACTORY FUNCTION
//----------------------------------------------------------

// 🧩 5. Crea una función `crearProducto(nombre, precio)` que devuelva un objeto producto.
//    - Debe tener un método `mostrar()` que diga "Producto: X, Precio: Y€"

// 🧩 6. Crea una factory function para crear usuarios con roles.
//    - debe aceptar `nombre` y `rol`
//    - si el rol es "admin", el objeto devuelto debe tener un método `borrarUsuario()`
//    - si el rol es "user", no debe tener ese método

//----------------------------------------------------------
// 🛰️ OBSERVER / PUB-SUB
//----------------------------------------------------------

// 🧩 7. Crea una clase `EmisorEventos`:
//    - método `suscribirse(fn)` para añadir listeners
//    - método `emitir(mensaje)` para notificar a todos los listeners

// 🧩 8. Crea 3 funciones que hagan console.log de distintos mensajes.
//    - Suscríbelas al emisor anterior
//    - Lanza varios mensajes con `emitir()`

// 🧩 9. BONUS: Añade al patrón anterior un método `desuscribirse(fn)`
//    - Debe quitar una función del array de listeners

// 🧩 10. BONUS: Crea un ejemplo de uso realista del patrón Observer simulando:
//    - Un "chat" donde varios usuarios escuchan nuevos mensajes del canal y los imprimen

