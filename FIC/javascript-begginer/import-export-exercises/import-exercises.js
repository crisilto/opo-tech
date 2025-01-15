import myDefaults, { count, Person, PI } from './export-exercises.js';
import { sayHelloFromOtherDirectory, SQRT_2, Student } from './sub-directory/last-exercise.js';
// 4. Importa una funciÃ³n.
count()

// 5. Importa una constante.
let myPi = PI
console.log(myPi)

// 6. Importa una clase.
let myPerson = new Person("Raúl", 35, "Spain", "spanish")
for (const key in myPerson) {
    console.log(`${key}: ${myPerson[key]}`);
}

// 8. Importa una funciÃ³n, una constante y una clase por defecto
// (en caso de que lo permita).
const myModule = myDefaults()
myModule.click()
console.log(myModule.MY_NAME)
const myCat = new myModule.Cat("Kenneth", 1, "Orange")
myCat.meow()
console.log(myModule.PI)

// 10. Importa una funciÃ³n, una constante y una clase desde un 
// directorio diferente al anterior.

sayHelloFromOtherDirectory()
console.log(SQRT_2)
let me = new Student("Cristina", ["FIC",  "UVE", "FLI", "UIT", "EDC", "URF"], )
console.log(me.isMotivated)
me.cheerUp()