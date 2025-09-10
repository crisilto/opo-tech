// Implementa un contador interactivo que incremente o disminuya un número al hacer clic en botones.
const contador = document.querySelector("#contador")
const btnInc = document.querySelector("#btnInc")
const btnDec = document.querySelector("#btnDec")

let valor = 0

btnInc.addEventListener("click", () => {
    valor++
    contador.textContent = valor
})


btnDec.addEventListener("click", () => {
    valor--
    contador.textContent = valor
})