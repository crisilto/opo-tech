// Diseña una lista interactiva que permita añadir y eliminar elementos dinámicamente.
const inputElemento = document.querySelector("#elemento")
const btnAñ = document.querySelector("#btnAñ")
const btnEl = document.querySelector("#btnEl")
const elementos = document.querySelector("#elementos")

btnAñ.addEventListener("click", () => {
    const el = inputElemento.value.trim()
    if (el === "") {
        alert("introduce un valor")
        return
    }

    const nuevoItem = document.createElement("li")
    nuevoItem.textContent = el

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "❌"
    btnEliminar.style.marginLeft = "10px"

    btnEliminar.addEventListener("click", () => {
        elementos.removeChild(nuevoItem)
    })

    nuevoItem.appendChild(btnEliminar)
    elementos.appendChild(nuevoItem)

    inputElemento.value = ""
})

btnEl.addEventListener("click", ()=>{
    elementos.textContent = []
})