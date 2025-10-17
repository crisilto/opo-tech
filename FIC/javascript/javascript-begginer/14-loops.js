// LOOPS

// FOR
for (let i = 6; i < 5; i++) {
    console.log(`Hola ${i}`);
}

const numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++) {
    console.log(`${i}: ${numbers[i]}`)
}

// WHILE
let i = 6
while (i < 5) {
    console.log(`Hola ${i}`);
    i++;
}

// DO WHILE
do{
    console.log(`Hola ${i}`);
    i++;
}while (i < 5);

// FOR OF
let myArray = ["Cristina", "Silvestre", "crisilto", 27, true]
for(let value of myArray) {
    console.log(value);
}

let mySet = new Set(["Cristina", "Silvestre", "crisilto", 27, true]);
for(let value of mySet) {
    console.log(value);
}

let myMap = new Map([
    ["name", "Cristina"],
    ["surname", "Silvestre"],
    ["age", 27],
]);
for(let value of myMap) {
    console.log(value);
}

// BUENAS PRÁCTICAS

// BREAK Y CONTINUE
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue //Se lo salta
    } else if (i == 7) {
        break //Rompe el bucle y sale de él
    }
    console.log(`Hola ${i}`)
}