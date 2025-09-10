// Implementa un reloj digital que se actualice cada segundo.
const reloj = document.querySelector("#reloj")

function actualizarReloj() {
    const ahora = new Date()
    let horas = ahora.getHours().toString().padStart(2, "0")
    let minutos = ahora.getMinutes().toString().padStart(2, "0")
    let segundos = ahora.getSeconds().toString().padStart(2, "0")

    reloj.textContent = `${horas}:${minutos}:${segundos}`
}

actualizarReloj()

setInterval(actualizarReloj, 1000)