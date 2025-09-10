// ========================================
// EJERCICIOS: FUNDAMENTOS DE REACT
// ========================================

//----------------------------------------------------------
// ⚛️ JSX y árbol virtual
//----------------------------------------------------------

// 🧩 1. Crea un componente `Bienvenida` que reciba un nombre como variable JS y muestre:
//    "Bienvenido/a, {nombre}".

// 🧩 2. Crea una lista de frutas en un array y muéstralas como una lista <ul> usando JSX y .map()

// 🧩 3. BONUS: Usa un condicional (operador ternario) para mostrar un mensaje diferente
//    si el usuario está logueado o no (usa una variable booleana).

//----------------------------------------------------------
// 🧱 Componentes funcionales
//----------------------------------------------------------

// 🧩 4. Crea un componente `TituloPrincipal` que reciba una prop `texto` y la muestre en un <h1>

// 🧩 5. Crea un componente `Footer` que contenga el año actual (usa `new Date().getFullYear()`).

// 🧩 6. BONUS: Crea un componente `Producto` que reciba `nombre`, `precio` y `enStock` como props
//    y muestre la información en una tarjeta.

//----------------------------------------------------------
// 📩 Props y comunicación
//----------------------------------------------------------

// 🧩 7. Crea un componente `SaludoUsuario` que reciba `nombre` y `mensajePersonalizado` como props.

// 🧩 8. Crea un componente padre `Contador` y un hijo `BotonIncrementar`.
//    - El hijo debe llamar a una función pasada por props para aumentar el contador en el padre.

// 🧩 9. BONUS: Crea un componente `ListaTareas` que reciba un array de tareas como prop y renderice cada una.

//----------------------------------------------------------
// 🔁 useState: estado local
//----------------------------------------------------------

// 🧩 10. Crea un contador con `useState` que tenga botones para aumentar y disminuir el número.

// 🧩 11. Crea un componente `ToggleMostrar` con un botón que cambie entre mostrar y ocultar un mensaje.

// 🧩 12. BONUS: Crea un input controlado con `useState` que actualice el texto en vivo mientras escribes.

// 🧩 13. BONUS 2: Crea un formulario simple con un input de nombre y otro de email.
//    - Usa `useState` para guardar los datos y mostrarlos al enviar.