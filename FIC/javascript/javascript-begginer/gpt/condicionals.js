// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.
let myName = "Fay"
if (myName == "Fay") {
    console.log(myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseÃ±a concide 
// con unos establecidos.
let myUser = "user"
let myPass = 123
if (myUser === "user" && myPass === "123") {
    console.log(`User: ${myUser} Pass: ${myPass}`)
}
if (myUser == "user" && myPass == "123") {
    console.log(`User: ${myUser} Pass: ${myPass}`)
}
// 3. Verifica si un nÃºmero es positivo, negativo o cero e imprime un mensaje.
let number = 0
if (number > 0) {
    console.log("positivo")
} else if (number == 0) {
    console.log("cero")
} else {
    console.log("negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuÃ¡ntos aÃ±os le faltan.
let age = 15
if (age >= 18) {
    console.log("puede votar")
} else {
    let yearsLeft = 18 - age
    console.log("no puede votar le faltan " + yearsLeft + " años")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
console.log(age >= 18 ? "adulto" : "menor")
console.log((age + 5) >= 18 ? "adulto" : "menor")

// 6. Muestra en que estaciÃ³n del aÃ±o nos encontramos dependiendo del valor de una variable "mes".
let mes = 4
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
if (mes == 2) {
    console.log(28)
} else if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
    console.log(31);
} else {
    console.log(30);
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo 
// del idioma.
let language = "de"
switch (language) {
    case "es":
        console.log("hola")
        break;

    case "en":
        console.log("hi")
        break;

    case "de":
        console.log("hallo")
        break;

    case "fr":
        console.log("bonjour")
        break;

    default:
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6.
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("invierno")
        break;

    case 3:
    case 4:
    case 5:
        console.log("primavera")
        break;

    case 6:
    case 7:
    case 8:
        console.log("verano")
        break;

    case 9:
    case 10:
    case 11:
        console.log("otoño")
        break;

    default:
        break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7.

switch (mes) {
    case 2:
        console.log(28)
        break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(31)
        break;
    default:
        console.log(30)
        break;
}