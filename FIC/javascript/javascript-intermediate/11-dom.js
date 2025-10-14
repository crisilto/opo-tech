// 📘 MÉTODOS DEL DOM
// El DOM (Document Object Model) representa la estructura de un documento HTML
// como un árbol de nodos, que podemos manipular con JavaScript.

// 🧩 SELECCIÓN DE ELEMENTOS
// Para modificar o leer contenido HTML desde JS, primero debemos “seleccionar” los elementos.

// -------------------------------------------------------------
// 🧱 MÉTODOS BÁSICOS (anteriores a querySelector)
// -------------------------------------------------------------

// ✅ getElementById(id)
// Devuelve un único elemento que tenga el id especificado.
// Si no existe, devuelve null.
const myElementById = document.getElementById("id")

// ✅ getElementsByClassName(class)
// Devuelve una colección *viva* (HTMLCollection) de todos los elementos
// que tengan esa clase. Si el DOM cambia, esta colección se actualiza sola.
const myElementsClass = document.getElementsByClassName("class")

// ✅ getElementsByTagName(tag)
// Devuelve todos los elementos con esa etiqueta (p. ej. "div", "p", "img", etc.)
// También devuelve una HTMLCollection (colección viva).
const myElementsTag = document.getElementsByTagName("tag")

// -------------------------------------------------------------
// 🧭 MÉTODOS MODERNOS (más flexibles y potentes)
// -------------------------------------------------------------

// ✅ querySelector(selector)
// Devuelve el PRIMER elemento que coincida con el selector CSS indicado.
// (por ejemplo: una clase ".paragraph", un id "#header", o una etiqueta "p")
const myElementFirstParagraph = document.querySelector(".paragraph")

// ✅ querySelectorAll(selector)
// Devuelve *todos* los elementos que coincidan con el selector CSS indicado.
// Devuelve una NodeList (NO viva → no se actualiza si el DOM cambia).
const myElements = document.querySelectorAll(".paragraph")

// -------------------------------------------------------------
// 💡 DIFERENCIAS IMPORTANTES
// -------------------------------------------------------------
// - getElementById → siempre un solo elemento (más rápido)
// - getElementsByClassName / TagName → colección viva (antiguo)
// - querySelector / querySelectorAll → más modernos, aceptan cualquier selector CSS
// - querySelectorAll → devuelve NodeList, útil con forEach()

// 📘 MANIPULACIÓN DE ELEMENTOS DEL DOM
// Una vez que seleccionamos un elemento del DOM, podemos cambiar su contenido,
// sus atributos, estilos, clases, o incluso crear/eliminar nodos.

// -------------------------------------------------------------
// 📝 CAMBIAR EL CONTENIDO DE UN ELEMENTO
// -------------------------------------------------------------

// ✅ textContent
// Cambia o devuelve el texto interno de un elemento.
// ❗No interpreta etiquetas HTML → las muestra como texto literal.
const title = document.getElementById("title")
title.textContent = "Hola JavaScript"
// Ejemplo: <h1 id="title">Hola JavaScript</h1>

// -------------------------------------------------------------
// ✅ innerHTML
// Cambia o devuelve el contenido HTML interno de un elemento.
// ❗Sí interpreta etiquetas HTML, es decir, puede insertar otras etiquetas dentro.
// ⚠️ Cuidado: si se usa con contenido dinámico o externo, puede provocar fallos de seguridad (XSS).
const container = document.querySelector(".container")
container.innerHTML = "<p>Nuevo párrafo</p>"
// Ejemplo: <div class="container"><p>Nuevo párrafo</p></div>

// -------------------------------------------------------------
// 💡 DIFERENCIAS ENTRE textContent e innerHTML
// -------------------------------------------------------------
// - textContent: más seguro y rápido, sólo texto (no renderiza etiquetas).
// - innerHTML: más flexible, permite insertar etiquetas HTML.

// Ejemplo de diferencia:
const div = document.querySelector(".example")

div.textContent = "<strong>Hola</strong> mundo"
// Resultado visible: <strong>Hola</strong> mundo (no renderiza <strong>)

div.innerHTML = "<strong>Hola</strong> mundo"
// Resultado visible: Hola (en negrita) mundo

// -------------------------------------------------------------
// ✅ insertAdjacentHTML(posición, html)
// Inserta HTML en una posición específica sin reemplazar el contenido existente.
// Muy útil cuando no quieres borrar el contenido anterior del elemento.
container.insertAdjacentHTML("beforeend", "<p>Segundo párrafo</p>")

// Posiciones posibles:
// - "beforebegin": antes del elemento actual
// - "afterbegin": dentro, al inicio
// - "beforeend": dentro, al final
// - "afterend": después del elemento actual


// 📘 MODIFICACIÓN DE ATRIBUTOS DEL DOM
// Los atributos son las propiedades que se definen directamente en las etiquetas HTML.
// Ejemplo: <a href="https://google.com" target="_blank">Google</a>

// -------------------------------------------------------------
// ✅ 1. OBTENER UN ATRIBUTO EXISTENTE
// -------------------------------------------------------------
// getAttribute("nombreDelAtributo")
// Devuelve el valor actual del atributo indicado.

const firstLink = document.querySelector("a")
const firstUrl = firstLink.getAttribute("href")

console.log("La URL original es:", firstUrl)
// Ejemplo: si el enlace es <a href="https://google.com"> → devuelve "https://google.com"

// -------------------------------------------------------------
// ✅ 2. ESTABLECER O MODIFICAR UN ATRIBUTO
// -------------------------------------------------------------
// setAttribute("nombreDelAtributo", "nuevoValor")
// Si el atributo no existe, lo crea; si ya existe, lo actualiza.

firstLink.setAttribute("href", "https://example.com")
console.log("Nuevo enlace:", firstLink.getAttribute("href"))
// Ahora el enlace apunta a https://example.com

// También puedes crear atributos nuevos:
firstLink.setAttribute("title", "Visita el sitio ejemplo")
// → ahora el enlace tiene un atributo title visible al pasar el ratón

// -------------------------------------------------------------
// ✅ 3. COMPROBAR SI UN ELEMENTO TIENE UN ATRIBUTO
// -------------------------------------------------------------
// hasAttribute("nombreDelAtributo")
// Devuelve true o false según el atributo exista o no.

const hasTarget = firstLink.hasAttribute("target")
console.log("¿El enlace tiene atributo target?", hasTarget)
// Ejemplo: <a href="..." target="_blank"> → devuelve true
// Ejemplo: <a href="..."> → devuelve false

// -------------------------------------------------------------
// ✅ 4. ELIMINAR UN ATRIBUTO
// -------------------------------------------------------------
// removeAttribute("nombreDelAtributo")
// Elimina un atributo completamente del elemento.

firstLink.removeAttribute("title")
// Ahora ya no tiene el atributo "title" que habíamos añadido

// -------------------------------------------------------------
// 💡 RESUMEN DE MÉTODOS
// -------------------------------------------------------------
// getAttribute()    → obtiene el valor de un atributo
// setAttribute()    → establece o crea un atributo
// hasAttribute()    → comprueba si existe un atributo
// removeAttribute() → elimina un atributo


// 🎨 INTERACCIÓN CON CLASES Y ESTILOS CSS
// El DOM nos permite modificar tanto las clases de un elemento (para aplicar estilos CSS),
// como sus estilos inline directamente desde JavaScript.

// -------------------------------------------------------------
// ✅ 1. MANIPULAR CLASES CON classList
// -------------------------------------------------------------
// La propiedad .classList devuelve un objeto con todos los nombres de clase del elemento.
// Además, permite usar métodos para añadir, eliminar o alternar clases dinámicamente.

const box = document.querySelector(".box")

// ➕ Agregar una clase
box.classList.add("selected")
// Ahora el elemento tendrá la clase "selected" → <div class="box selected"></div>

// ➖ Eliminar una clase
box.classList.remove("selected")
// Elimina la clase "selected" si existe → <div class="box"></div>

// 🔁 Alternar (añadir si no la tiene, eliminar si ya la tiene)
box.classList.toggle("selected")
// Ideal para efectos de clic o animaciones → alterna el estado cada vez que se ejecuta

// ⚡ Puedes comprobar si un elemento tiene una clase:
console.log(box.classList.contains("selected")) // true o false


// -------------------------------------------------------------
// ✅ 2. APLICAR ESTILOS DIRECTAMENTE CON style
// -------------------------------------------------------------
// Cada propiedad CSS se puede modificar directamente desde el objeto `style`.
// OJO: las propiedades se escriben en formato camelCase (sin guiones).

const button = document.querySelector("button")

button.style.backgroundColor = "blue"
button.style.color = "white"
button.style.padding = "10px"

// Esto equivale a escribir en CSS:
// button {
//   background-color: blue;
//   color: white;
//   padding: 10px;
// }

// ⚠️ Nota importante:
// Los estilos aplicados desde JavaScript tienen prioridad sobre los del CSS externo
// (porque son inline, es decir, escritos directamente en el HTML).

// -------------------------------------------------------------
// 💡 RESUMEN DE MÉTODOS ÚTILES
// -------------------------------------------------------------
// 🔸 classList.add("nombreClase")       → Añade una clase
// 🔸 classList.remove("nombreClase")    → Elimina una clase
// 🔸 classList.toggle("nombreClase")    → Alterna una clase
// 🔸 classList.contains("nombreClase")  → Devuelve true/false si la clase existe
// 🔸 element.style.propiedadCSS         → Modifica un estilo inline


// 🧱 CREACIÓN Y ELIMINACIÓN DE ELEMENTOS EN EL DOM

// -------------------------------------------------------------
// ✅ 1. CREAR ELEMENTOS NUEVOS
// -------------------------------------------------------------
// Se usa document.createElement("etiqueta") para crear un nuevo nodo HTML en memoria.
// Aún no aparece en la página hasta que lo insertamos en el DOM.

const container = document.querySelector(".container")

const newParagraph = document.createElement("p") // crea <p></p>

// 💬 Importante: textContent es una propiedad, no una función
newParagraph.textContent = "nuevo párrafo creado desde JS"

// Podemos añadir estilos directamente:
newParagraph.style.padding = "8px"
newParagraph.style.backgroundColor = "#eee"

// Finalmente, lo insertamos en el DOM (al final del contenedor)
container.appendChild(newParagraph)


// -------------------------------------------------------------
// ✅ 2. INSERTAR ELEMENTOS EN POSICIONES ESPECÍFICAS
// -------------------------------------------------------------
const itemsList = document.querySelector("ul")

const newItem = document.createElement("li")
newItem.textContent = "nuevo elemento"

// Opción 1️⃣ - Insertar antes de un hijo existente
const secondItem = itemsList.children[1] // seleccionamos el segundo <li>
itemsList.insertBefore(newItem, secondItem)
// Resultado: el nuevo <li> se coloca justo antes del segundo elemento

// ⚠️ Si intentas usar append(), prepend(), before() o after() con el mismo nodo,
// se *moverá* de lugar (no se duplica). Cada elemento solo puede estar una vez en el DOM.

// Opción 2️⃣ - Insertar al final de la lista
itemsList.append(newItem)

// Opción 3️⃣ - Insertar al principio
itemsList.prepend(newItem)

// Opción 4️⃣ - Insertar justo antes o después de un nodo concreto
secondItem.before(newItem)
secondItem.after(newItem)


// -------------------------------------------------------------
// 🗑️ 3. ELIMINAR ELEMENTOS DEL DOM
// -------------------------------------------------------------

// ✅ Forma moderna y sencilla:
newParagraph.remove()
// → Elimina directamente el nodo del DOM

// ✅ Forma tradicional (anterior a ES6):
// 1. Se busca el elemento padre
// 2. Se elimina el hijo desde el padre

const parent = container
parent.removeChild(newParagraph)


// -------------------------------------------------------------
// 💡 RESUMEN DE MÉTODOS
// -------------------------------------------------------------
// 🔸 document.createElement("tag") → Crea un nodo HTML
// 🔸 element.textContent = "texto" → Añade texto al elemento
// 🔸 parent.appendChild(element) → Inserta el hijo al final del padre
// 🔸 parent.insertBefore(newNode, referenceNode) → Inserta antes de un hijo concreto
// 🔸 element.append() / prepend() → Añade hijos al final o principio
// 🔸 element.before() / after() → Inserta antes o después de un nodo
// 🔸 element.remove() → Elimina directamente el nodo
// 🔸 parent.removeChild(child) → Forma clásica de eliminar un hijo


//----------------------------
// EVENTOS Y ELEMENTOS DEL DOM
//----------------------------

// 1️⃣ Definir una función que se ejecutará cuando ocurra un evento
// En este caso, la función se ejecuta al hacer clic en un botón
function showMsg() {
    alert("click!")
}

// 2️⃣ Seleccionar el botón mediante su id
const sendButton = document.querySelector("#send")

// 3️⃣ Asociar un evento al botón con addEventListener
// El primer parámetro es el tipo de evento ("click")
// El segundo es la función que se ejecutará cuando ocurra
sendButton.addEventListener("click", showMsg)

// También podemos usar funciones flecha directamente
sendButton.addEventListener("click", () => {
    alert("click con una arrow function")
})


//--------------------------------------
// EVENTO "DOMContentLoaded"
//--------------------------------------
// Este evento se dispara cuando TODO el contenido HTML ha sido cargado
// (antes de que se carguen imágenes, CSS, etc.)
// Es útil para asegurarse de que el DOM está listo antes de manipularlo
document.addEventListener("DOMContentLoaded", () => {
    console.log("el dom está completamente cargado")
})


//--------------------------------------
// EVENTOS DE RATÓN (mouseenter / mouseleave)
//--------------------------------------
// "mouseenter": cuando el cursor entra en el elemento
// "mouseleave": cuando el cursor sale del elemento
sendButton.addEventListener("mouseenter", () => {
    sendButton.style.backgroundColor = "green"
})

sendButton.addEventListener("mouseleave", () => {
    sendButton.style.backgroundColor = "blue"
})


//--------------------------------------
// EVENTOS DE FORMULARIO
//--------------------------------------

// 1️⃣ Seleccionar el formulario
const form = document.querySelector("form")

// 2️⃣ Escuchar el evento "submit"
// Este evento ocurre cuando se envía el formulario (por botón o Enter)
form.addEventListener("submit", (event) => {
    // Por defecto, el formulario recarga la página al enviarse.
    // Si queremos evitarlo:
    event.preventDefault()

    // Aquí podríamos escribir código para procesar los datos del formulario
    console.log("form submitted!")
})
