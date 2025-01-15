// MAP

// DECLARACIÓN
let myMap = new Map();
console.log(myMap); // Imprime un Map vacío

// INICIALIZACIÓN
myMap = new Map([
    ["name", "Cristina"],
    ["surname", "Silvestre"],
    ["age", 27],
]);
console.log(myMap); // Imprime el Map con las claves y valores iniciales

// MÉTODOS Y PROPIEDADES

// SET
myMap.set("alias", "crisilto"); 
// Añade la clave "alias" con el valor "crisilto" porque no existía
myMap.set("name", "Cris"); 
// Actualiza la clave "name" con el nuevo valor "Cris"
console.log(myMap); // Imprime el Map actualizado

// GET
console.log(myMap.get("name")); 
// "Cris": Devuelve el valor asociado a la clave "name"
console.log(myMap.get("email")); 
// undefined: No existe la clave "email" en el Map

// HAS
console.log(myMap.has("email")); 
// false: La clave "email" no existe
console.log(myMap.has("name")); 
// true: La clave "name" sí existe

// Validación con `if` para verificar si una clave existe
if (myMap.has("email")) {
    console.log(`La clave 'email' existe en el Map: ${myMap.get("email")}`);
} else {
    console.log("La clave 'email' no existe en el Map");
}

if (myMap.has("name")) {
    console.log(`La clave 'name' existe en el Map: ${myMap.get("name")}`);
} else {
    console.log("La clave 'name' no existe en el Map");
}

// DELETE
myMap.delete("age"); 
// Elimina la clave "age" junto con su valor
console.log(myMap); // Imprime el Map actualizado
console.log(myMap.delete("email")); 
// false: No elimina nada porque "email" no existe

// CLEAR
myMap.clear(); 
// Elimina todos los elementos del Map
console.log(myMap); // Imprime un Map vacío

// Volvemos a inicializar el Map
myMap = new Map([
    ["name", "Cristina"],
    ["surname", "Silvestre"],
    ["age", 27],
]);

// SIZE
console.log(myMap.size); 
// 3: Devuelve el número de elementos en el Map

// KEYS, VALUES y ENTRIES
console.log(myMap.keys()); 
// Devuelve un iterador con todas las claves: "name", "surname", "age"
console.log(myMap.values()); 
// Devuelve un iterador con todos los valores: "Cristina", "Silvestre", 27
console.log(myMap.entries()); 
// Devuelve un iterador con todas las parejas clave-valor