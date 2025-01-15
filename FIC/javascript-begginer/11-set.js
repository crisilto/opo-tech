// SET

// DECLARACIÓN
let mySet = new Set();
console.log(mySet); // Imprime un Set vacío

// INICIALIZACIÓN
mySet = new Set(["Cristina", "Silvestre", "crisilto", 27, true]);
console.log(mySet); // Imprime el Set con los valores iniciales

// MÉTODOS COMUNES

// ADD
mySet.add("https://crisilto.dev"); // Añade un elemento al Set
console.log(mySet); // El elemento se añade porque es único

// DELETE
mySet.delete(27); // Elimina el elemento con valor 27
console.log(mySet); // Imprime el Set sin el valor 27

console.log(mySet.delete("crisilto")); 
// true: Elimina "crisilto" y confirma que existía en el Set
console.log(mySet);

console.log(mySet.delete(false)); 
// false: No elimina nada porque "false" no existe en el Set
console.log(mySet);

// Validamos si un elemento ha sido eliminado
if (mySet.delete("Cristina")) {
    console.log("Elemento 'Cristina' existía y ha sido eliminado correctamente");
    console.log(mySet);
} else {
    console.log("No se ha encontrado el elemento 'Cristina' en el Set, por lo que no se ha eliminado");
}

// HAS
// Comprueba si un elemento existe en el Set
console.log(mySet.has("Cristina")); // false
console.log(mySet.has("Silvestre")); // true

// SIZE
// Muestra el número de elementos en el Set
console.log(mySet.size); // 3

// CONVERTIR UN SET A ARRAY
let myArray = Array.from(mySet); // Convierte el Set a un Array
console.log(myArray);

// CONVERTIR UN ARRAY A SET
mySet = new Set(myArray); // Convierte el Array de vuelta a un Set
console.log(mySet);

// PRINCIPAL DIFERENCIA ENTRE SET Y ARRAY
mySet.add(true); 
console.log(mySet); 
// No añade `true` porque ya existe en el Set

myArray.push(true); 
console.log(myArray); 
// Añade otro `true` porque los Arrays permiten duplicados

// Set no permite valores duplicados, solo almacena valores únicos
// Por eso no necesita índices, ya que no hay elementos repetidos

// CASE-SENSITIVE EN SET
mySet.add("SILVESTRE"); 
// Añade "SILVESTRE" porque es diferente de "Silvestre"
console.log(mySet);