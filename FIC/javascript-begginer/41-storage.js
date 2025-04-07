// localStorage y sessionStorage permiten guardar datos en el navegador

// DIFERENCIA PRINCIPAL:
// - localStorage guarda datos de forma persistente (hasta que se borren manualmente)
// - sessionStorage guarda datos solo mientras dure la sesión del navegador (se borra al cerrar la pestaña)

// AMBOS USAN LOS MISMOS MÉTODOS:
// setItem(clave, valor)
// getItem(clave)
// removeItem(clave)
// clear()

// LOCAL STORAGE
localStorage.setItem("usuario", "Cristina");
localStorage.setItem("edad", "27");

console.log(localStorage.getItem("usuario")); // Cristina
console.log(localStorage.getItem("edad"));    // "27"

// SESSION STORAGE
sessionStorage.setItem("sessionID", "abc123");
console.log(sessionStorage.getItem("sessionID")); // abc123

// ELIMINAR UN ÍTEM
localStorage.removeItem("edad");
console.log(localStorage.getItem("edad")); // null

// LIMPIAR TODO
// localStorage.clear();
// sessionStorage.clear();

// GUARDAR OBJETOS → JSON
const user = {
    name: "Cristina",
    alias: "crisilto"
};
localStorage.setItem("userObj", JSON.stringify(user));

// RECUPERAR OBJETOS
const recovered = JSON.parse(localStorage.getItem("userObj"));
console.log(recovered);
