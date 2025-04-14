// Crea un formulario donde los usuarios puedan introducir dos números. 
// Al presionar un botón, muestra la suma, resta, multiplicación y división de esos números.
const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const boton = document.querySelector("#miBoton")
const suma = document.querySelector("#suma")
const resta = document.querySelector("#resta")
const mult = document.querySelector("#mult")
const div = document.querySelector("#div")

boton.addEventListener("click", () => {
    const valor1 = parseFloat(num1.value)
    const valor2 = parseFloat(num2.value)

    suma.textContent = valor1 + valor2
    resta.textContent = valor1 - valor2
    mult.textContent = valor1 * valor2
    div.textContent = valor2 !== 0 ? (valor1 / valor2).toFixed(2) : "No se puede dividir entre 0"
})
