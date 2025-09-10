// Diseña un temporizador de cuenta regresiva que permita al usuario introducir una duración y muestre el tiempo restante.
const inputTiempo = document.querySelector("#tiempo")
const btnIniciar = document.querySelector("#iniciar")
const pantalla = document.querySelector("#pantalla")

let intervalo // para poder detenerlo luego

btnIniciar.addEventListener("click", () => {
    let tiempo = parseInt(inputTiempo.value)

    if (isNaN(tiempo) || tiempo <= 0) {
        alert("Introduce un número válido mayor que 0")
        return
    }

    // Mostramos la cuenta regresiva cada segundo
    intervalo = setInterval(() => {
        // Formateamos como mm:ss
        let minutos = Math.floor(tiempo / 60)
        let segundos = tiempo % 60
        if (segundos < 10) segundos = "0" + segundos
        if (minutos < 10) minutos = "0" + minutos

        pantalla.textContent = `${minutos}:${segundos}`
        tiempo--

        if (tiempo < 0) {
            clearInterval(intervalo)
            pantalla.textContent = "¡Tiempo terminado!"
        }
    }, 1000)
})
