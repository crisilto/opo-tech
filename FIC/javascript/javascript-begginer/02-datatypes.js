//Cadena de texto (String)
let name = "Cristina Silvestre"
let alias = 'crisilto'
let email = `crisilto1997@gmail.com`
console.log(name, alias, email); //top level triggers the deprecated warning
//But local is fine
!(function () {
    let name = "Brais Moure"
    let alias = 'braismoure'
    let email = `braismoure@mouredev.com`

    console.log(name, alias, email);
})();

//Número (Number)
let age = 27
let height = 1.68
console.log(age, height);

//Booleanos (boolean)
let isStudent = true
let isTeacher = false
console.log(name, isStudent, isTeacher);

//Undefined 
let undefinedValue
console.log(undefinedValue);

//Null
let nullValue = null
console.log(nullValue);

//Symbol
let mySymbol = Symbol("mysymbol")
console.log(mySymbol);

//BigInt
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
console.log(myBigInt);
let myBigInt2 = BigInt(817239871289371986589716389471628n)
console.log(myBigInt2);

//Show datatypes
console.log(typeof name)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)
console.log(typeof isStudent)
console.log(typeof isTeacher)

console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof null)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)

let myBig = 1000n;
console.log(typeof myBig); // BigInt