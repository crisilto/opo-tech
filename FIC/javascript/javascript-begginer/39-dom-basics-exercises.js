// DOM Y EVENTOS - EJERCICIOS

// 1. Selecciona un elemento por su ID y cambia su texto.
document.getElementById("miTitulo").innerText = "Nuevo Título"

// 2. Selecciona un elemento por su clase y cambia su color de fondo.
const navContainer = document.querySelector(".navigation-container")
navContainer.style.backgroundColor = "red"

// 3. Selecciona todos los párrafos y cambia el texto del segundo.
const misParrafos = document.querySelectorAll(".parrafo")
misParrafos.forEach(p => {
    p.style.color = "blue"
})
misParrafos[1].textContent = "parrafo modificado"

// 4. Usa `querySelector` para seleccionar un botón y agregarle un evento click que muestre una alerta.
const boton = document.querySelector(".button")
boton.addEventListener("click", () => {
    console.log("boton clickado")
    alert("click!")
})

// 5. Crea un input en HTML y haz que al escribir algo se imprima en consola lo que escribe el usuario.
const inputEscribir = document.querySelector("#miInput")
inputEscribir.addEventListener("input", function () {
    console.log(inputEscribir.value)
})

// 6. Agrega un evento a un botón para cambiar el contenido de un párrafo cuando se hace clic.
const btnCambiar = document.querySelector("#miBtn")
const parrafo = document.querySelector("#miParrafo")
btnCambiar.addEventListener("click", function () {
    parrafo.textContent = "parrafo cambiado"
})

// 7. Usa `setAttribute()` para modificar el atributo `placeholder` de un input desde JavaScript.
inputEscribir.setAttribute("placeholder", "placeholder cambiado")

// 8. Cambia el estilo (color, tamaño) de un `h1` cuando se hace hover con el mouse (puedes usar `mouseenter` y `mouseleave`).
const miTitulo = document.querySelector("#miTitulo2")

miTitulo.addEventListener("mouseenter", function () {
    miTitulo.style.color = "blue"
    miTitulo.style.fontSize = "3rem"
})

miTitulo.addEventListener("mouseleave", function () {
    miTitulo.style.color = "black"
    miTitulo.style.fontSize = "2rem"
})

// 9. Crea un contador de clics con un botón. Cada clic suma 1 y se muestra en pantalla.
const miBoton = document.querySelector("#miContador")
const resultado = document.querySelector("#resultado")

let contador = 0

miBoton.addEventListener("click", function () {
    contador++
    resultado.textContent = "Clics: " + contador
})

miBoton.addEventListener("dblclick", function () {
    contador = 0
    resultado.textContent = "Clicks: " + contador
})

// 10. Usa `querySelectorAll` para seleccionar varios elementos y recorrerlos con `forEach` para aplicarles una clase o estilo.
const parrafos = document.querySelectorAll(".parrafo")
parrafos.forEach(parrafo => {
    parrafo.style.color = "pink"
})