// ========================================
// EJERCICIOS: ESTADO GLOBAL EN REACT
// ========================================

//----------------------------------------------------------
// 🌍 useContext
//----------------------------------------------------------

// 🧩 1. Crea un contexto llamado `IdiomaContexto` que tenga un idioma por defecto ("es").
//    - Crea un componente `IdiomaProvider` que comparta el valor.
//    - Crea un botón para cambiar entre "es" y "en".

// 🧩 2. Crea un componente `SaludoMultilingue` que muestre "Hola" o "Hello" según el idioma del contexto.

// 🧩 3. BONUS: Guarda el idioma en localStorage y recupéralo al iniciar la app.

//----------------------------------------------------------
// ⚙️ useReducer
//----------------------------------------------------------

// 🧩 4. Crea un contador con `useReducer` que tenga estas acciones:
//    - incrementar
//    - decrementar
//    - resetear
//    - aumentar en X (acción con payload)

// 🧩 5. BONUS: Crea un "carrito de compras" que permita:
//    - añadir un producto (objeto con id y nombre)
//    - eliminar un producto por id
//    - vaciar carrito

// 🧩 6. BONUS 2: Muestra los productos renderizados en una lista y actualízala con cada acción.

//----------------------------------------------------------
// 🧠 Redux (opcional)
//----------------------------------------------------------

// 🧩 7. (si usás Redux Toolkit)
//    - Crea un store con un slice `usuario` que tenga: nombre, edad, logueado
//    - Agrega acciones para `login`, `logout`, y `editarPerfil`

// 🧩 8. Crea un formulario de login que al enviar actualice el estado global con el nombre del usuario.

// 🧩 9. Crea un componente `Perfil` que lea el estado global del usuario con `useSelector`
//    - Muestra su nombre, edad y botón para cerrar sesión con `useDispatch`

// 🧩 10. BONUS: Usa `persist` para guardar el estado en localStorage y mantener la sesión al recargar
