// ========================================
// EJERCICIOS: MANEJO DE DATOS EN REACT
// ========================================

//----------------------------------------------------------
// 🔁 useEffect
//----------------------------------------------------------

// 🧩 1. Crea un componente que muestre "Contador: X" y aumente cada segundo automáticamente.
//    - Usa `useEffect` y `setInterval`
//    - Limpia el intervalo al desmontar con `return () => clearInterval(...)`

// 🧩 2. Crea un componente que escuche el evento `resize` del navegador.
//    - Muestra el ancho y alto actuales
//    - Usa `useEffect` para añadir y limpiar el listener

//----------------------------------------------------------
// 🌐 Llamadas fetch con async/await
//----------------------------------------------------------

// 🧩 3. Crea un componente `ListaUsuarios` que haga fetch a `https://jsonplaceholder.typicode.com/users`
//    - Muestra los nombres en una lista

// 🧩 4. Agrega un estado de carga (`loading`) que muestre "Cargando..." mientras esperas la respuesta.

// 🧩 5. Agrega manejo de errores: si falla el fetch, muestra un mensaje de error.

// 🧩 6. BONUS: Permite filtrar los usuarios por nombre con un input (usa `.filter()` y `useState`).

//----------------------------------------------------------
// 🧠 Renderizado condicional y listas
//----------------------------------------------------------

// 🧩 7. Crea un componente `AvisoLogin` que reciba una prop `logueado`.
//    - Si es `true`, muestra "Bienvenido"; si no, "Debes iniciar sesión".

// 🧩 8. Crea un componente `ListaTareas` que reciba una lista de strings por props y renderice cada una como <li>.
//    - Si la lista está vacía, muestra "No hay tareas pendientes".

// 🧩 9. BONUS: Haz que cada tarea tenga un botón "Eliminar" que la quite de la lista (usa `useState`).

// 🧩 10. BONUS 2: Agrega un botón "Agregar tarea" que muestre un input para añadir una nueva tarea a la lista.
