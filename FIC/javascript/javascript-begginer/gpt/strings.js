// 1. Concatena dos cadenas de texto.
let cad1 = "que te"
let cad2 = "follen:)"
let string = cad1 + " " + cad2
console.log(string)

// 2. Muestra la longitud de una cadena de texto.
console.log(string.length)

// 3. Muestra el primer y Ãºltimo carÃ¡cter de un string.
console.log(string[0])
console.log(string[string - 1])

// 4. Convierte a mayÃºsculas y minÃºsculas un string.
console.log(string.toUpperCase())
console.log(string.toLowerCase())

// 5. Crea una cadena de texto en varias lÃ­neas.
let varias = `
Cadena
en varias
líneas`
console.log(varias)

// 6. Interpola el valor de una variable en un string.
console.log(`Hola ${string}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.
console.log(string.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta.
console.log(string.includes(":)"))
console.log(string.includes(":("))

// 9. Comprueba si dos strings son iguales.
let string2 = "que te follen:)"
let string3 = "que te follen :("
console.log(string == string2)
console.log(string == string3)

// 10. Comprueba si dos strings tienen la misma longitud.
console.log(string.length == string2.length)
console.log(string.length == string3.length)

//indexOf

//slice

//replace