let edad = 18

//if
if(edad >= 18) console.log("Es mayor de edad")

//if else
if(edad < 18){
    console.log("Es menor de edad")
}else{
    console.log("Es mayor de edad")
}

//if elseif else
if(edad < 18){
    console.log("Es menor de edad")
}else if (edad == 18){
    console.log("Tiene 18 años")
}else{
    console.log("Es mayor de edad")
}

//ternario
const mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad"
console.log(mensaje)

//switch
let dia = 0
let nombreDia

switch(dia){
    case 0:
        nombreDia = "Lunes"
        break;
    case 1:
        nombreDia = "Martes"
        break;
    case 2:
        nombreDia = "Miércoles"
        break;
    case 3:
        nombreDia = "Jueves"
        break;
    case 4:
        nombreDia = "Viernes"
        break;
    case 5:
        nombreDia = "Sábado"
        break;
    case 6:
        nombreDia = "Domingo"
        break;
    default:
        nombreDia = "Día no válido"
}
console.log(nombreDia)