// 1. Crea una funciÃ³n que reciba dos nÃºmeros y devuelva su suma.
const sum = (a = 0, b = 0) => a + b;
console.log(sum(2, 6));
//La función de flecha con un retorno implícito hace que el código sea más claro y directo.


// 2. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva el mayor de ellos.
const findMax = (arr) => Math.max(...arr);
console.log(findMax([8, 2, 4, 12, 43, 1]));

//Se usa Math.max con el operador spread para encontrar el máximo sin bucles adicionales.


// 3. Crea una funciÃ³n que reciba un string y devuelva el nÃºmero de vocales que contiene.
const countVowels = (str) =>
    [...str.toLowerCase()].filter(char => 'aeiou'.includes(char)).length;
console.log(countVowels("Eduardo Camavinga"));
//Se convierte la cadena en un array y se filtran solo las vocales, reduciendo el uso de variables intermedias.


// 4. Crea una funciÃ³n que reciba un array de strings y devuelva un nuevo array con las strings en mayÃºsculas.
const convertMayusc = (arr) => arr.map(str => str.toUpperCase());
console.log(convertMayusc(["Lilith", "Kenneth", "Cristina", "Raúl"]));
//MAP transforma el array aplicando toUpperCase a cada elemento.


// 5. Crea una funciÃ³n que reciba un nÃºmero y devuelva true si es primo, y false en caso contrario.
const isPrime = (num) => {
    if (num < 2) return false;
    return ![...Array(Math.floor(Math.sqrt(num)) + 1).keys()]
        .slice(2)
        .some(i => num % i === 0);
};
console.log(isPrime(5));
//Se usa un array de posibles divisores y se verifica si alguno divide al número, manteniendo un enfoque funcional.


// 6. Crea una funciÃ³n que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
const findCommons = (arr1, arr2) => arr1.filter(item => arr2.includes(item));
console.log(findCommons(
    ["Java", "SpringBoot", "JavaScript", "React"],
    ["Java", "PHP", "Laravel", "JavaScript", "Vue"]
));
//Se usa filter para encontrar elementos comunes, eliminando la necesidad de bucles anidados.


// 7. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva la suma de todos los nÃºmeros pares.
const evenSum = (arr) => arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
console.log(evenSum([2, 5, 6, 2, 1, 0, 8, 7])); 
//Se combinan filter y reduce para sumar solo los números pares de manera funcional.


// 8. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva un nuevo array con cada nÃºmero elevado al cuadrado.
const squaredNumbers = (arr) => arr.map(n => n ** 2);
console.log(squaredNumbers([3, 2, 5, 6]));
//Se usa map y el operador de exponenciación (**) para hacer el código más conciso.


// 9. Crea una funciÃ³n que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.
const reverseChain = (str) => str.split(" ").reverse().join(" ");
console.log(reverseChain("Estoy aprendiendo JavaScript")); 
//El uso de split, reverse y join evita pasos innecesarios, haciendo el código más directo.


// 10. Crea una funciÃ³n que calcule el factorial de un nÃºmero dado.
const factorial = (n) => n === 0 ? 1 : [...Array(n).keys()].map(i => i + 1).reduce((a, b) => a * b);
console.log(factorial(5)); 
//Se utiliza un enfoque funcional con Array, map y reduce, eliminando bucles explícitos.