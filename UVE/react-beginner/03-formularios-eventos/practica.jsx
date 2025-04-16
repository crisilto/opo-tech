// ========================================
// EJERCICIOS: FORMULARIOS Y EVENTOS EN REACT
// ========================================

//----------------------------------------------------------
// 🧠 Manejo de formularios con estado
//----------------------------------------------------------

// 🧩 1. Crea un formulario con un input de nombre.
//    - Usa `useState` para controlar el valor
//    - Al enviar, muestra un alert con el nombre ingresado

// 🧩 2. Añade un input de email y muestra ambos valores al enviar el formulario.

//----------------------------------------------------------
// ✍️ Inputs controlados
//----------------------------------------------------------

// 🧩 3. Crea un formulario con múltiples campos (`nombre`, `apellido`, `edad`).
//    - Usa un solo estado con un objeto para guardar todos los valores

// 🧩 4. Muestra los datos actualizados en tiempo real debajo del formulario mientras el usuario escribe.

// 🧩 5. BONUS: Crea un botón "Resetear" que limpie todos los inputs (setForm a valores vacíos).

//----------------------------------------------------------
// 📦 Formularios anidados y dinámicos
//----------------------------------------------------------

// 🧩 6. Crea un formulario con campos anidados para dirección:
//    - `calle`, `ciudad`, `código postal`
//    - Usa un objeto `direccion` dentro del estado

// 🧩 7. Crea un input dinámico de "teléfonos" (array de strings):
//    - Botón "Agregar teléfono" → añade un input nuevo
//    - Cada input se guarda en un array de teléfonos en el estado

// 🧩 8. Añade un botón "Eliminar" al lado de cada input de teléfono para quitarlo del array

// 🧩 9. BONUS: Al enviar el formulario, muestra todos los valores del estado (nombre, dirección, teléfonos)

//----------------------------------------------------------
// 🔁 Validaciones opcionales
//----------------------------------------------------------

// 🧩 10. BONUS: Valida que todos los campos estén llenos antes de enviar el formulario.
//    - Si falta alguno, muestra un mensaje de error y no envíes
//    - Si todo está bien, muestra los datos por consola

// 🧩 11. BONUS: Marca en rojo los inputs que estén vacíos (usa clases condicionales con errores)