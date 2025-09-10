// Crea un script que valide si una entrada es un número impar o par e indique su tipo (entero o decimal).
const inputNum = document.querySelector("#num")
const boton = document.querySelector("#boton")
const resultado = document.querySelector("#resultado")

function parOImpar() {
    const num = parseFloat(inputNum.value)

    if (isNaN(num)) {
        resultado.textContent = "Introduce un número válido"
        return
    }

    const tipo = Number.isInteger(num) ? "entero" : "decimal"
    const paridad = num % 2 === 0 ? "par" : "impar"

    resultado.textContent = `El número es ${paridad} y ${tipo}`
}

boton.addEventListener("click", parOImpar)
