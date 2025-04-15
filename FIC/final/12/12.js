// Diseña una aplicación que guarde datos en localStorage y los recupere al recargar la página.
const inputElemento = document.querySelector("#elemento")
const btnGuardar = document.querySelector("#btnGuardar")
const btnVaciar = document.querySelector("#btnVaciar")
const elementos = document.querySelector("#elementos")

//recuperar elementos guardados al cargar
window.addEventListener("DOMContentLoaded", () => {
    const guardados = JSON.parse(localStorage.getItem("misElementos")) || []
    guardados.forEach(el => agregarElementosALista(el)
    )
})

//funcion para agregar un elemento al DOM y tb un boton de eliminar
function agregarElementosALista(texto) {
    const li = document.createElement("li")
    li.textContent = texto

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "❌"
    btnEliminar.style.marginLeft = "10px"

    btnEliminar.addEventListener("click", () => {
        li.remove()
        eliminarDelStorage(texto)
    })

    li.appendChild(btnEliminar)
    elementos.appendChild(li)
}

//guardar nuevo elemento al hacer click
btnGuardar.addEventListener("click", () => {
    const el = inputElemento.value.trim()
    if (el === "") {
        alert("introduce un valor")
        return
    }

    //mostrar en pantalla
    agregarElementosALista(el)

    //guardarlo en localstorage
    const guardados = JSON.parse(localStorage.getItem("misElementos")) || []
    guardados.push(el)
    localStorage.setItem("misElementos", JSON.stringify(guardados))

    //limpiar el input
    inputElemento.value = ""
})

//funcion para eliminar un elemento del localstorage
function eliminarDelStorage(valor) {
    let guardados = JSON.parse(localStorage.getItem("misElementos")) || []
    guardados = guardados.filter(item => item !== valor)
    localStorage.setItem("misElementos", JSON.stringify(guardados))
}

//vaciar toda la lista y el localstorage
btnVaciar.addEventListener("click", () => {
    localStorage.removeItem("misElementos")
    elementos.innerHTML = ""
})