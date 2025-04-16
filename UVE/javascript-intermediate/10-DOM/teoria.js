// ========================================
// TEORÍA: DOM Y EVENTOS PROFUNDOS EN JS
// ========================================

//----------------------------------------------------------
// 🧠 1. DELEGACIÓN DE EVENTOS
//----------------------------------------------------------

// En lugar de añadir listeners a muchos elementos individuales,
// añadimos un solo listener a su contenedor (padre) y filtramos por el target.

document.querySelector("#lista").addEventListener("click", (e) => {
    if (e.target.matches("li")) {
        console.log("Hiciste clic en:", e.target.textContent);
    }
});

// Ventajas:
// - Menos listeners = más rendimiento
// - Soporta elementos que aún NO existían al cargar la página

//----------------------------------------------------------
// 🔁 2. PROPAGACIÓN DE EVENTOS (bubbling y capturing)
//----------------------------------------------------------

// Cuando haces clic en un elemento, el evento sube (burbujea) desde el hijo hasta el padre.
// También puede bajar (captura) si lo especificamos.

// ➤ Bubbling (por defecto):
document.querySelector("#hijo").addEventListener("click", () => {
    console.log("Clic en HIJO");
});

document.querySelector("#padre").addEventListener("click", () => {
    console.log("Clic en PADRE");
});

// Resultado al hacer clic en el hijo:
// "Clic en HIJO"
// "Clic en PADRE"

// ➤ Capturing (menos común):
document.querySelector("#padre").addEventListener(
    "click",
    () => console.log("Captura del padre"),
    true // <--- tercer parámetro: useCapture = true
);

//----------------------------------------------------------
// 🛑 3. event.preventDefault() y stopPropagation()
//----------------------------------------------------------

// ➤ preventDefault(): evita el comportamiento por defecto del navegador
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); // evita que recargue
    console.log("Formulario enviado sin recargar");
});

// ➤ stopPropagation(): detiene la burbuja
document.querySelector("#elemento").addEventListener("click", (e) => {
    e.stopPropagation(); // no sube al padre
    console.log("Solo yo me ejecuto");
});

//----------------------------------------------------------
// 🧬 4. MutationObserver
//----------------------------------------------------------

// Detecta cambios en el DOM: nodos añadidos, atributos, texto, etc.

const contenedor = document.querySelector("#zona");

const observador = new MutationObserver((mutaciones) => {
    for (let mutacion of mutaciones) {
        console.log("Hubo un cambio:", mutacion);
    }
});

observador.observe(contenedor, {
    childList: true,
    subtree: true,
    attributes: true
});

// Muy útil para:
// - Interfaces que cambian dinámicamente
// - Detectar elementos inyectados (ej: mensajes, errores, etc.)

//----------------------------------------------------------
// 👁️ 5. IntersectionObserver
//----------------------------------------------------------

// Detecta si un elemento está visible en el viewport (pantalla)

const objetivo = document.querySelector("#caja");

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            console.log("Elemento visible:", entrada.target);
        }
    });
});

observer.observe(objetivo);

// Ideal para:
// - Cargar imágenes perezosas (lazy loading)
// - Animaciones al hacer scroll
// - Detectar cuándo un componente entra/sale de la vista

//----------------------------------------------------------
// 📝 6. Formularios complejos
//----------------------------------------------------------

// ➤ Validaciones personalizadas:
const emailInput = document.querySelector("#email");

emailInput.addEventListener("input", () => {
    if (!emailInput.value.includes("@")) {
        emailInput.setCustomValidity("El correo debe contener '@'");
    } else {
        emailInput.setCustomValidity("");
    }
});

// ➤ Inputs dinámicos:
// Agregar campos de forma programada (ej: inputs extra de teléfono)

document.querySelector("#agregar-input").addEventListener("click", () => {
    const nuevoInput = document.createElement("input");
    nuevoInput.placeholder = "Teléfono adicional";
    document.querySelector("#formulario").appendChild(nuevoInput);
});

// Puedes usar `form.elements` para recorrer todos los inputs de un formulario