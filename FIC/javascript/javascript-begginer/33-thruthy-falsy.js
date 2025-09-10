// TRUTHY Y FALSY
// En JavaScript, ciertos valores se evalúan como `true` o `false` automáticamente cuando se usan en contextos booleanos

// FALSY VALUES (se consideran "falsos" en condiciones):
// - false
// - 0
// - -0
// - 0n (BigInt 0)
// - "", '', `` (string vacío)
// - null
// - undefined
// - NaN

// Todo lo demás es TRUTHY

console.log(Boolean(false));       // false
console.log(Boolean(0));           // false
console.log(Boolean(""));          // false
console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));         // false

console.log(Boolean("Hola"));      // true
console.log(Boolean(42));          // true
console.log(Boolean([]));          // true
console.log(Boolean({}));          // true
console.log(Boolean(() => {}));    // true

// COERCIÓN DE TIPOS
// JavaScript convierte tipos automáticamente en algunas situaciones

console.log("5" + 2);     // "52"  → string
console.log("5" - 2);     // 3     → number
console.log(5 + true);    // 6     → true = 1
console.log(5 + false);   // 5     → false = 0
console.log("5" * "2");   // 10    → string * string → convertido a number
console.log(null + 1);    // 1     → null = 0
console.log(undefined + 1); // NaN → undefined no puede convertirse a número

// COMPARACIONES SUAVES vs ESTRICTAS
console.log(5 == "5");    // true  → comparación con coerción
console.log(5 === "5");   // false → comparación estricta sin conversión

console.log(null == undefined); // true
console.log(null === undefined); // false
