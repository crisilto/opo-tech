// 1. Concatena dos cadenas de texto.
let cadena1 = "Estoy aprendiendo"
let cadena2 = "a programar en JavaScript"
let miCadena = `${cadena1} ${cadena2}`
console.log(miCadena)

// 2. Muestra la longitud de una cadena de texto.
console.log(`La longitud de '${cadena1}' es: ${cadena1.length}`);

// 3. Muestra el primer y Ãºltimo carÃ¡cter de un string.
console.log(`Primer caracter de ${cadena1} es: ${cadena1[0]} y el último caracter es: ${cadena1[cadena1.length - 1]}`)

// 4. Convierte a mayÃºsculas y minÃºsculas un string.
console.log(`En mayúsculas: ${cadena1.toUpperCase()}`);
console.log(`En minúsculas: ${cadena1.toLowerCase()}`);

// 5. Crea una cadena de texto en varias lÃ­neas.
let cadenaLarga = `Esta cadena
de texto
está escrita 
en varias líneas`
console.log(cadenaLarga)

// 6. Interpola el valor de una variable en un string.
console.log(`Interpolando el string: "${cadena2}" dentro de otro.`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones.
let cadenaGuiones = cadenaLarga.replaceAll(" ", "-")
console.log(cadenaGuiones)

// 8. Comprueba si una cadena de texto contiene una palabra concreta.
console.log(`¿La cadena "${cadena2}" incluye "JavaScript"? ${cadena2.includes("JavaScript")}`);
console.log(`¿La cadena "${cadena2}" incluye "Python"? ${cadena2.includes("Python")}`);


// 9. Comprueba si dos strings son iguales.
let cadena3 = "Estoy aprendiendo"
console.log(`¿"${cadena1}" es igual a "${cadena2}"? ${cadena1 == cadena2}`)
console.log(`¿"${cadena1}" es igual a "${cadena3}?" ${cadena1 == cadena3}`)

// 10. Comprueba si dos strings tienen la misma longitud.
console.log(`¿"${cadena1}" y "${cadena2}" tienen la misma longitud? ${cadena1.length == cadena2.length}`)
console.log(`¿"${cadena1}" y "${cadena3}" tienen la misma longitud? ${cadena1.length == cadena3.length}`)