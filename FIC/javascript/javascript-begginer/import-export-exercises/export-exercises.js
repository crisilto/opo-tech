// 1. Exporta una funciÃ³n.
// Arrow function without params
export const count = () => {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}
//Function with params
export function description(name, age, country) {
    console.log(`${name} is ${age} years old and is from ${country}`)
}

// 2. Exporta una constante.
export const PI = (Math.PI).toFixed(4)

// 3. Exporta una clase.
export class Person {
    constructor(name, age, country, language) {
        this.name = name
        this.age = age
        this.country = country
        this.language = language
    }
    talks() {
        console.log(`${this.name} talks in ${this.language}`)
    }
}

// 7. Exporta una funciÃ³n, una constante y una clase por
//    defecto (en caso de que lo permita).
export default function myDefaults() {
    return {
        click: () => {
            for (let i = 0; i <= 5; i++) {
                console.log("click");
            }
        },
        MY_NAME: "Cristina",
        Cat: class {
            constructor(name, age, color) {
                this.name = name;
                this.age = age;
                this.color = color;
            }
            meow() {
                console.log(`${this.name} says MEOW! :3`);
            }
        },
        PI: Math.PI.toFixed(2),
    };
}