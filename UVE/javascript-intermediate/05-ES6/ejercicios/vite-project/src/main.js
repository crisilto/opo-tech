import saludo from "./saludo.js"; //al ser por defecto se quitan las llaves
import { Usuario } from "./usuario.js";
import * as calculadora from "./utils/math.js";

console.log(calculadora.sumar(10, 5))
console.log(calculadora.restar(10, 5))
console.log(calculadora.multiplicar(10, 5))
saludo("cris")
const miUsuario = new Usuario("fay", 26)
miUsuario.presentarse()
console.log(calculadora.PI)