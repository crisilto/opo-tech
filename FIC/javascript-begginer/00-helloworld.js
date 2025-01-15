/* console.log("Hola mundo")/* 
console.log('Hola mundo')
console.log(`Hola mundo`) */

console.log(5+"5") //55
console.log(5+5) //10
console.log("5"+5) //

console.log(5*5) //25
console.log(5/5) //1
console.log(5%5) //0

console.log(5**2) //25

console.log(5 == 5) //true
console.log(5 == "5") //true
console.log(5 === 5) //true
console.log(5 === "5") //false

console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

console.log(!true) //false
console.log(!false) //true

console.log(5 > 10) //false
console.log(5 < 10) //true
console.log(5 >= 10) //false
console.log(5 <= 10) //true
console.log(5 == 10) //false
console.log(5 != 10) //true */

console.log(5 > 10 && 15 > 20) //false
console.log(5 < 10 && 15 < 20) //true
console.log(5 < 10 && 15 > 20) //false
console.log(5 > 10 && 15 > 20 && 30 > 40) //false

console.log(5 > 10 || 15 > 20) //false
console.log(5 < 10 || 15 < 20) //true
console.log(5 < 10 || 15 > 20) //true
console.log(5 > 10 || 15 > 20 || 30 > 40) //false

console.log(5 > 10 && 15 > 20 || 30 < 40) //true
