// Implementa un contador simple que lleve el historial de valores únicos ingresados usando un Set.
const inputValor = document.querySelector("#inputValor")
const btnAgregar = document.querySelector("#btnAgregar")
const contador = document.querySelector("#contador")
const historial = document.querySelector("#historial")

const valoresUnicos = new Set()

btnAgregar.addEventListener("click", () => {
    const valor = inputValor.value.trim()

    //no permitir vacíos
    if (valor === "") {
        alert("introduce un valor")
        return
    }

    //agregar solo si no existen
    if (!valoresUnicos.has(valor)) {
        valoresUnicos.add(valor)

        const nuevoItem = document.createElement("li")
        nuevoItem.textContent = valor
        historial.appendChild(nuevoItem)

        contador.textContent = valoresUnicos.size //el contador va subiendo por cada valorUnico que se mande
    } else {
        prompt("ese valor ya existe")
    }

    inputValor.value = "" //con esto se va limpiando el valor del input cada vez que enviemos un valor
})