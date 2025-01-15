import substract, { add, Circle, name, PI } from "./28-export-modules.js";

// FUNCTIONS
console.log(add(5,2))

// PROPERTIES
console.log(PI)
console.log(name)

// DEFAULT
console.log(substract(5,10))

// CLASS
let cirle = new Circle(10)
console.log(cirle.area().toFixed(2))
console.log(cirle.perimeter().toFixed(2))