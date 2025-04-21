// ===============================================
// EJERCICIOS: MANIPULACIÓN AVANZADA DE ARRAYS Y OBJETOS
// ===============================================

// 🧩 1. Usa .map() para transformar un array de números a sus cuadrados.
const numeros = [9, 7, 5, -3, 20, 4, 6]
const cuadrados = numeros.map(n => Math.pow(n, 2)) // n**2 <- es lo mismo y mas moderno
console.log(cuadrados)

// 🧩 2. Usa .filter() para quedarte solo con los nombres que tengan más de 4 letras.
const nombres = ["cris", "lilith", "kenneth"]
const nombreLargo = nombres.filter(nombre => nombre.length > 4)
console.log(nombreLargo)

// 🧩 3. Usa .reduce() para sumar todos los elementos de un array de precios.
const precios = [100, 150, 190, 210]
const sumaPrecios = precios.reduce((acc, val) => acc + val, 0)
console.log(sumaPrecios)

// 🧩 4. Usa .reduceRight() para concatenar los strings de un array al revés.
const array = ["hola", "mundo", "me llamo", "cris"]
const arrayInversa = array.reduceRight((acc, val) => acc + " " + val);
console.log(arrayInversa)

// 🧩 5. Usa .find() para encontrar el primer número par en un array.
const numeroPar = numeros.find(n => n % 2 == 0)

// 🧩 6. Usa .findIndex() para encontrar el índice del primer número mayor a 50.
const indice = numeros.findIndex(n => n > 50)

// 🧩 7. Usa .some() para verificar si al menos un número es negativo en un array.
const negatvo = numeros.some(n => n < 0)
console.log(negatvo)

// 🧩 8. Usa .every() para verificar si todos los elementos son mayores a 18.
const mayores = numeros.every(n => n > 18)
console.log(mayores)

// 🧩 9. Usa .flat() para aplanar un array de arrays con 1 nivel de profundidad.
const arrDeArr = [1, 2, [3, 4]]
const plano = arrDeArr.flat()
console.log(plano)

// 🧩 10. Usa .flatMap() para transformar un array de frases en un array de todas las palabras separadas.
const frases = ["up from the bottom", "good things go", "waiting for the end"]
const frasesPalabras = frases.flatMap(frase => frase.split(" "));
console.log(frasesPalabras)

// 🧩 11. Usa .sort() para ordenar un array de objetos por la propiedad "edad" (de menor a mayor).
const arrObj = [
    { nombre: "cris", edad: 27 },
    { nombre: "fay", edad: 26 },
    { nombre: "lilith", edad: 4 },
]
const objetosOrdenados = [...arrObj].sort((a, b) => a.edad - b.edad);
console.log(objetosOrdenados);

// 🧩 12. Usa .reverse() para invertir un array de letras.
const letras = ["a", "b", "c", "d", "e", "f", "u"]
const letrasReves = letras.reverse()
console.log(letrasReves)

// 🧩 13. Usa .split() para convertir una frase en palabras. Luego, con .join(), vuelve a unirlas con guiones.
const frase = "am i forgiven, mother?"
const palabras = frase.split(" ")
const guiones = palabras.join(" - ")
console.log(guiones)

// 🧩 14. Usa Object.entries() para recorrer las propiedades de un objeto y mostrar "clave: valor" por consola.
const persona = { nombre: 'Ana', edad: 30 };
const propiedades = Object.entries(persona)
console.log(propiedades)

// 🧩 15. Usa Object.keys() y Object.values() para imprimir por separado las claves y los valores de un objeto.

// 🧩 16. Usa el operador spread (...) para fusionar dos arrays y dos objetos distintos.

// 🧩 17. Crea una función que use el operador rest (...) para recibir cualquier cantidad de argumentos y devolver la media.

// 🧩 18. Usa destructuring para extraer el segundo valor de un array sin guardar los otros.

// 🧩 19. Usa destructuring profundo para extraer la propiedad "ciudad" de un objeto anidado en "usuario.direccion.ciudad".

// 🧩 20. BONUS: combina destructuring + spread:
//    - extrae una propiedad concreta de un objeto
//    - guarda el resto de propiedades en otro objeto usando ...rest
