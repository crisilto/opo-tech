// ========================================
// EJERCICIOS: DOM Y EVENTOS PROFUNDOS
// ========================================

//----------------------------------------------------------
// 🧠 Delegación de eventos
//----------------------------------------------------------

// 🧩 1. Crea una lista <ul> con varios <li> y usa delegación para detectar cuál fue clicado.
//    - Muestra por consola el texto del <li> clicado.

// 🧩 2. Añade un botón que agregue dinámicamente un nuevo <li> a la lista.
//    - La delegación debe funcionar también con los nuevos elementos.

//----------------------------------------------------------
// 🔁 Propagación (bubbling / capturing)
//----------------------------------------------------------

// 🧩 3. Crea un contenedor con un hijo dentro.
//    - Añade listeners de click en ambos y muestra en consola quién recibió el clic.
//    - Observa cómo se ejecutan por bubbling.

// 🧩 4. Repite el ejercicio anterior, pero usa el tercer parámetro del listener para activar *capturing* en el contenedor.

// 🧩 5. En el mismo ejemplo, usa `e.stopPropagation()` en el hijo para que el padre no reciba el evento.

//----------------------------------------------------------
// 🛑 preventDefault() y stopPropagation()
//----------------------------------------------------------

// 🧩 6. Crea un formulario simple y evita su recarga con `e.preventDefault()`.
//    - Muestra un mensaje personalizado cuando se envía.

// 🧩 7. Crea un enlace con href y evita su comportamiento por defecto.
//    - En lugar de redirigir, muestra un alert con el texto del enlace.

//----------------------------------------------------------
// 🧬 MutationObserver
//----------------------------------------------------------

// 🧩 8. Crea un <div> vacío y añade un botón "Agregar caja".
//    - Cada vez que se pulse el botón, se añade un <div> dentro.
//    - Usa un MutationObserver para detectar cada cambio.

// 🧩 9. BONUS: Observa también los cambios de atributos (ej: cambia la clase de un elemento y detecta el cambio).

//----------------------------------------------------------
// 👁️ IntersectionObserver
//----------------------------------------------------------

// 🧩 10. Crea varios <div> altos (scroll infinito).
//    - Usa IntersectionObserver para detectar cuándo un <div> entra en pantalla y cambiarle el color de fondo.

// 🧩 11. BONUS: Usa IntersectionObserver para simular "cargar más contenido" al llegar al final de una sección.

//----------------------------------------------------------
// 📝 Formularios complejos
//----------------------------------------------------------

// 🧩 12. Crea un formulario con input de correo y usa `setCustomValidity()` para validar que incluya un "@".

// 🧩 13. Crea un botón "Agregar teléfono" que añada dinámicamente nuevos inputs al formulario.

// 🧩 14. Al enviar el formulario, recorre todos los inputs (estáticos + dinámicos) y muestra sus valores.

// 🧩 15. BONUS: Crea una validación que asegure que al menos un campo "teléfono" no esté vacío.