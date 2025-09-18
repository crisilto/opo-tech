// STORAGE - EJERCICIOS

// 1. Guarda tu nombre y tu edad en `localStorage`.
localStorage.setItem("nombre", "cris")
localStorage.setItem("edad", "27")

// 2. Muestra por consola el valor guardado con la clave "nombre".
console.log(localStorage.getItem("nombre"))

// 3. Guarda un dato de sesión llamado "modoOscuro" con el valor "true" en `sessionStorage`.
sessionStorage.setItem("modoOscuro", true)

// 4. Elimina el dato de sesión "modoOscuro".
sessionStorage.removeItem("modoOscuro")

// 5. Guarda un objeto con tus datos (nombre, alias, edad) en `localStorage` usando `JSON.stringify()`.
const misDatos = {
    nombre: "cris",
    alias: "criscries",
    edad: 27
}
localStorage.setItem("misDatosObj", JSON.stringify(misDatos))

// 6. Recupera ese objeto con `getItem()` y conviértelo de nuevo en objeto con `JSON.parse()`.
const misDatosRecup = JSON.parse(localStorage.getItem("misDatosObj"))

// 7. Muestra por consola solo el alias del objeto recuperado.
console.log(misDatosRecup.alias)
// for (const key in misDatosRecup) {
//     if(key.includes("alias")){
//         console.log(key)
//     }
// }

// 8. Crea una función `guardarUsuario(nombre, edad)` que guarde los datos en `localStorage`.
function guardarUsuario(nombre, edad) {
    const usuario = {
        nombre: nombre,
        edad: edad
    }
    localStorage.setItem("usuario", JSON.stringify(usuario))
}
guardarUsuario("lidia", "27")

// 9. Crea una función `borrarUsuario()` que elimine todas las claves relacionadas con el usuario.
const usuario = {
    nombre: "fay",
    edad: 26,
    borrarUsuario: function () {
        localStorage.clear()
    }
}
usuario.borrarUsuario()

// 10. Usa `localStorage.clear()` y muestra cuántos elementos quedan en `localStorage` usando `length`.
localStorage.clear()
console.log(localStorage.length)