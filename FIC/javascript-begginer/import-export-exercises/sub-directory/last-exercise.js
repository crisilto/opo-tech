// 9. Exporta una funciÃ³n, una constante y una clase 
//   desde una carpeta.
export function sayHelloFromOtherDirectory(){
    console.log("Hello!!")
}
export const SQRT_2 = Math.SQRT2
export class Student{
    constructor(name, subjects, isMotivated = true){
        this.name = name
        this.subjects = subjects
        this.isMotivated = isMotivated
    }
    cheerUp(){
        console.log(`The student ${this.name} is motivated? ${this.isMotivated}`)
    }
}