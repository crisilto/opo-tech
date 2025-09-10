//Strings

let myName = "Cris";
let greeting = "Hello, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

//Longitud
console.log(greeting.length);

//Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[greeting.length - 1]);
//O lo que es lo mismo
console.log(greeting[11])

//Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

console.log(greeting.indexOf("Hello"))
console.log(greeting.indexOf("Cris"))
console.log(greeting.indexOf("Cristina")) //Si no lo encuentra = -1

console.log(greeting.includes("Hello"))
console.log(greeting.includes("Cris"))
console.log(greeting.includes("Cristina"))

console.log(greeting.slice(7, greeting.length)) //Cris! 
//Acceder por índice
//console.log(greeting[greeting.length - 1]) //Último carácter (!)
//Acceder por rango
console.log(greeting.slice(11, greeting.length)) //Desde el índice 11 hasta el final (!)
//Acceder por índice: El índice comienza en 0, por eso el último es length - 1.
//Acceder por rango (slice): Incluye el inicio y excluye el final. Con length, ya abarca hasta el último carácter.

console.log(greeting.replace("Cris", "Cristina"))

//Template literals (plantillas literales)
let message = `está estudiando JavaScript
en el curso de MoureDev.`;
console.log(`
    ${myName} ${message}`)
let email = "cris@gmail.com";
console.log(`${greeting}, tu email es ${email}`)
