// SCOPE (ÁMBITO)
// El "scope" define dónde una variable existe y es accesible

// Scope global
let globalVar = "Soy global";

function testScope() {
    // Scope local
    let localVar = "Soy local";
    console.log(globalVar); // Accede a la variable global
    console.log(localVar);  // Accede a su propia variable local
}

testScope();
// console.log(localVar); // ❌ Error: fuera del scope

// Scope de bloque
if (true) {
    let blockVar = "Soy de bloque";
    var funcVar = "Var se ignora el bloque";
    console.log(blockVar); // ✅ Accesible aquí
}
console.log(funcVar); // ✅ Accesible (var ignora el bloque)
// console.log(blockVar); // ❌ Error: let y const respetan el bloque

// ------------------------------------
// HOISTING (ELEVACIÓN)

// Las declaraciones (no asignaciones) con `var` y las funciones tradicionales
// se "elevan" al principio del archivo, por eso puedes usarlas antes de definirlas:

saludar(); // ✅ Funciona
function saludar() {
    console.log("Hola!");
}

// pero con funciones flecha o `let/const` no pasa:
try {
    noFunciona(); // ❌ Error
} catch (e) {
    console.error("noFunciona:", e.message);
}
const noFunciona = () => {
    console.log("Esto no se eleva");
};

try {
    console.log(x); // undefined, porque `var` se eleva sin valor
    var x = 10;
} catch (e) {
    console.error("x error:", e.message);
}

try {
    console.log(y); // ❌ Error
    let y = 20;
} catch (e) {
    console.error("y error:", e.message);
}
