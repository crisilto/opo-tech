// EXPORT MODULES

// FUNCTIONS
export function add(a,b){
    return a+b
}
console.log(add(5,2))

// PROPERTIES
export const PI = Math.PI
export let name = "Cristina"


// CLASS
export class Circle{
    
    constructor(radius){
        this.radius = radius
    }
    
    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }
    
    perimeter(){
        return 2 * Math.PI * this.radius
    }
}

// DEFAULT
export default function substract(a,b){
    return a-b
}