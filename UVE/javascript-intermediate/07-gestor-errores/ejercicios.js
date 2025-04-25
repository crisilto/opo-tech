// ========================================
// EJERCICIOS: GESTOR DE ERRORES EN JAVASCRIPT
// ========================================

//----------------------------------------------------------
// ⚠️ TIPOS DE ERRORES
//----------------------------------------------------------

// 🧩 1. Provoca un TypeError intencional llamando a un método en un valor null o undefined.
//    - Luego atrápalo con try...catch y muestra el mensaje del error.


// 🧩 2. Provoca un ReferenceError accediendo a una variable no declarada.
//    - Captura el error y muestra su nombre y mensaje.

// 🧩 3. Provoca un RangeError creando un array con una longitud negativa.
//    - Captura el error y explica en un comentario qué ocurrió.

//----------------------------------------------------------
// 🧯 try...catch y finally
//----------------------------------------------------------

// 🧩 4. Crea una función `dividir(a, b)` que divida dos números.
//    - Usa try/catch para capturar un posible error si `b` es 0.
//    - Muestra siempre un mensaje final en `finally`.

// 🧩 5. Crea una función `parsearJSON(json)` que reciba un string JSON.
//    - Usa try/catch para capturar errores si el formato es inválido.
//    - Si es correcto, devuelve el objeto.

//----------------------------------------------------------
// 🛡️ Errores personalizados
//----------------------------------------------------------

// 🧩 6. Crea una clase de error `NombreMuyCortoError` que extienda de `Error`.
//    - Debe usarse si un nombre tiene menos de 3 letras.

// 🧩 7. Crea una función `crearUsuario(nombre)` que lance `NombreMuyCortoError` si el nombre es muy corto.
//    - Si no hay error, muestra "Usuario creado".

// 🧩 8. BONUS: Crea una función `crearProducto(nombre, precio)` que valide:
//    - que el nombre exista
//    - que el precio sea mayor que 0
//    - Lanza errores personalizados para cada caso
//    - Usa un bloque try/catch para manejar cada tipo de error de forma distinta

// 🧩 9. BONUS 2: Crea un sistema simple de validación de inputs usando una función `validarFormulario(obj)`
//    - Valida que las claves obligatorias existen y tengan valor
//    - Si falta alguna, lanza un error con un mensaje indicando cuál falta