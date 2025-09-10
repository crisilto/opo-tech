//Crea variables con estos tipos: string, number, boolean, undefined, null, symbol, bigint.
let string = "String"
let number = 13
let boolean = true
let undefinedValue = undefined
let nullValue = null
let mySymbol = Symbol(4)
let myBigInt = 131211n

//Imprime el tipo de cada una usando typeof.
console.log(typeof string)
console.log(typeof number)
console.log(typeof boolean)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

//Crea un Symbol y compáralo con otro símbolo igual: console.log(sym1 === sym2);
let mySymbol2 = Symbol(4)
console.log(mySymbol === mySymbol2)

//Crea dos BigInt y súmalos.
let myBigInt2 = 131211n
console.log(myBigInt + myBigInt2)