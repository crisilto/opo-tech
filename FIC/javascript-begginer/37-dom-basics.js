// DOM = Document Object Model
// Es la estructura que representa el HTML de la página como un árbol de nodos (elementos)

// SELECCIÓN DE ELEMENTOS

// Por ID
const titulo = document.getElementById("miTitulo");
console.log(titulo);

// Por clase (devuelve una colección)
const elementos = document.getElementsByClassName("elemento");
console.log(elementos);

// Por etiqueta (devuelve una colección)
const parrafos = document.getElementsByTagName("p");
console.log(parrafos);

// Moderno y más flexible:
const subtitulo = document.querySelector(".subtitulo"); // Selecciona el primero que coincida
const todosLosItems = document.querySelectorAll(".item"); // Todos los que coincidan

// MANIPULACIÓN DE CONTENIDO
titulo.textContent = "Título modificado con JS";
subtitulo.innerHTML = "<em>Subrayado</em> con HTML";

// MANIPULACIÓN DE ESTILOS
titulo.style.color = "crimson";
subtitulo.style.fontWeight = "bold";

// CAMBIO DE ATRIBUTOS
titulo.setAttribute("data-id", "123");
console.log(titulo.getAttribute("data-id"));

// EVENTOS
const boton = document.querySelector("#miBoton");

boton.addEventListener("click", () => {
    console.log("¡Clic detectado!");
    alert("Hiciste clic en el botón");
});

// ACCESO A INPUTS
const inputNombre = document.querySelector("#nombre");

inputNombre.addEventListener("input", () => {
    console.log("Nombre:", inputNombre.value);
});
