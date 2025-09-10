// 1. Escribe un comentario en una lÃ­nea.
//Este es mi comentario simple

// 2. Escribe un comentario en varias lÃ­neas.
/* 
Este es mi
comentario largo
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos.
let myVariables = {
    myName: "Cristina",
    myAge: 27,
    isStudent: true,
    myWork: undefined, //for this to be undefined could be also like "myWork," but being inside of an array of objects gives an error
    myKids: null,
    mySymbol: Symbol("mySymbol"),
    myBigInt:
        BigInt(
            231981938391821398123912389128931891238123989132912389312983128931891238912389913893812
        ),
    myOtherBigInt: 8938912839128312938129132893128312912n,
};

// 4. Imprime por consola el valor de todas las variables.
console.log("Initial values:");
console.log(myVariables);

// 5. Imprime por consola el tipo de todas las variables.
console.log("Initial type of variables:");
for (variable in myVariables) {
    console.log(`${variable} : ${typeof myVariables[variable]}`);
}

// 6. A continuaciÃ³n, modifica los valores de las variables por otros del mismo tipo.
myVariables.myName = "Cristina Perez";
myVariables.myAge = 28;
myVariables.isStudent = false;
myVariables.myWork = undefined;
myVariables.myKids = null;
myVariables.mySymbol = Symbol("mySymbolUpdated");
myVariables.myBigInt =
    BigInt(
        231981938391821398123912389128931891238123989132912389312983128931891238912389913893812
    );
myVariables.myOtherBigInt = 8938912839128312938129132893128312912n;

console.log("Modified values with same type of variable");
for (variable in myVariables) {
    console.log(`${variable} : ${typeof myVariables[variable]}`);
}

// 7. A continuaciÃ³n, modifica los valores de las variables por otros de distinto tipo.
myVariables.myName = 27;
myVariables.myAge = "28";
myVariables.isStudent = "false";
myVariables.myWork = 123;
myVariables.myKids = ["Juan", 24];
myVariables.mySymbol = "mySymbolUpdated";
myVariables.myBigInt = true;
myVariables.myOtherBigInt = 1;

console.log("Modified variables with another type of variable");
for (variable in myVariables) {
    console.log(`${variable} : ${typeof myVariables[variable]}`);
}

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.
const myConstants = {
    myName: "Cristina",
    myAge: 27,
    isStudent: true,
    myWork: undefined,
    myKids: null,
    mySymbol: Symbol("mySymbol"),
    myBigInt:
        BigInt(
            231981938391821398123912389128931891238123989132912389312983128931891238912389913893812
        ),
    myOtherBigInt: 8938912839128312938129132893128312912n,
};
console.log("Constant values");
for (constant in myConstants) {
    console.log(`${constant} : ${typeof myConstants[constant]}`);
}

// 9. A continuaciÃ³n, modifica los valores de las constantes.
myConstants.myName = 27;
myConstants.myAge = "28";
myConstants.isStudent = "false";
myConstants.myWork = 123;
(myConstants.myKids = undefined),
    (myConstants.mySymbol = Symbol("mySymbolUpdated"));
myConstants.myBigInt = true;
myConstants.myOtherBigInt = 1;

console.log("Trying to modify a constant value");
for (constant in myConstants) {
    console.log(`${constant} : ${typeof myConstants[constant]}`);
    myConstants[constant] = "New value";
}

/*
10. Comenta las líneas que produzcan algún tipo de error al ejecutarse.

En este caso, he creado todos mis valores dentro de un array de objetos para simplificar el manejo de datos. Sin embargo, al hacerlo nos alejamos del objetivo del ejercicio porque:

1. **Los objetos en JavaScript son mutables**:
   Esto significa que, aunque el array de objetos esté declarado como constante (`const`), sus propiedades internas pueden ser modificadas sin generar errores. Esto no ocurriría si hubiéramos declarado cada valor de forma individual con `const`, ya que las variables simples no pueden ser reasignadas.

2. **El error esperado**:
   Si quisiéramos forzar un error, bastaría con intentar reasignar el valor completo de `myConstants` (por ejemplo, asignándolo a un array vacío). Esto generaría un error porque `const` no permite la reasignación de una variable completa.

Ejemplo de un error que sí se produciría:
```javascript
myConstants = {}; // TypeError: Assignment to constant variable.
*/
