// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.
let myName = "Cristina"
if (myName = "Cristina") {
    console.log(myName);
}

// 2. Imprime por consola un mensaje si el usuario y contraseÃ±a concide 
// con unos establecidos.
let myUser = "cristina"
let myPassword = "123"
if ((myUser === "cristina") && (myPassword === "123")) {
    console.log(`User ${myUser} Password: ${myPassword}`)
}

// 3. Verifica si un nÃºmero es positivo, negativo o cero e imprime un mensaje.
let a = 8
if (a > 0) {
    console.log(`${a} es un numero positivo`)
} else if (a < 0) {
    console.log(`${a} es un numero negativo`)
} else {
    console.log(`${a} es cero`)
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuÃ¡ntos aÃ±os le faltan.
let edad = 15
const mayorEdad = 18
let edadFaltante = edad - mayorEdad

if (edad >= mayorEdad) {
    console.log("Puedes votar")
} else {
    console.log(`No eres mayor de edad, no puedes votar hasta dentro de ${edadFaltante} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
let adultoOMenor = edad >= mayorEdad ? "adulto" : "menor"
console.log(adultoOMenor)

// 6. Muestra en que estaciÃ³n del aÃ±o nos encontramos dependiendo del valor de una variable "mes".
if (mes >= 3 && mes <= 5) {
    console.log("Primavera");
} else if (mes >= 6 && mes <= 8) {
    console.log("Verano");
} else if (mes >= 9 && mes <= 11) {
    console.log("Otoño");
} else if (mes === 12 || mes === 1 || mes === 2) {
    console.log("Invierno");
} else {
    console.log("Mes inválido");
}

// 7. Muestra el nÃºmero de dÃ­as que tiene un mes dependiendo de la variable del ejercicio anterior.
if (mes === 2) {
    console.log("Este mes tiene 28 o 29 días");
} else if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
    console.log("Este mes tiene 31 días");
} else {
    console.log("Este mes tiene 30 días");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo 
// del idioma.
let language = "en";
switch(language){
    case "es":
        console.log("Hola!")
        break
    case "en":
        console.log("Hello!")
        break
    case "fr":
        console.log("Bonjour!")
        break
    default:
        console.log("Idioma no soportado")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6.
let mes = 1
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Invierno");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Verano");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Otoño");
        break;
    default:
        console.log("Mes inválido");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7.
switch(mes){
    case 2:
        console.log("28 días")
        break
    case 1: 
    case 3: 
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 días")
        break
    default:
        console.log("30 días")
}