// Diseña una calculadora de IMC que tome peso y altura 
// como entrada, calcule el resultado y lo clasifique según las categorías estándar.
const pesoInput = document.querySelector("#peso")
const alturaInput = document.querySelector("#altura")
const boton = document.querySelector("#boton")
const resultado = document.querySelector("#resultado")
const categoria = document.querySelector("#categoria")

function calcIMC() {
    const peso = parseFloat(pesoInput.value)
    const altura = parseFloat(alturaInput.value)

    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        resultado.textContent = "Por favor introduce valores válidos"
        categoria.textContent = ""
        return
    }

    const imc = peso / Math.pow(altura, 2)
    resultado.textContent = `Tu IMC es: ${imc.toFixed(2)}`

    if (imc < 18.5) {
        categoria.textContent = "Bajo peso"
    } else if (imc < 25) {
        categoria.textContent = "Peso normal"
    } else if (imc < 30) {
        categoria.textContent = "Sobrepeso"
    } else {
        categoria.textContent = "Obesidad"
    }
}

boton.addEventListener("click", calcIMC)