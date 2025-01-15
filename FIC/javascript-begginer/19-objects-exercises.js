// 1. Crea un objeto con 3 propiedades.
let cat = {
    name: "Lilith",
    age: 3,
    sleep: function () {
        return `${this.name} loves to sleep`
    }
}

// 2. Accede y muestra su valor.
console.log(`My cat name is ${cat.name}, she is ${cat.age} years old and ${cat.sleep()}`)

// 3. Agrega una nueva propiedad.
cat.food = `${cat.name} really likes ox and tomato puree`
console.log(cat)

// 4. Elimina una de las 3 primeras propiedades.
delete cat.food
console.log(cat)

// 5. Agrega una funciÃ³n e invÃ³cala.
cat.play = function () {
    console.log(`${this.name} does not like to play, just wants to ${cat.sleep()}`)
}
cat.play()

// 6. Itera las propiedades del objeto.
for (const key in cat) {
    console.log(`${key}: ${cat[key]}`)
}

// 7. Crea un objeto anidado.
let myExternObject = {
    name: "Extern object",
    age: 3,
    externSentence: "Hello from the outside",
    myInternObject : {
        name: "Intern object",
        internSentence: "Hello from the inside"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas.
console.log(myExternObject.myInternObject.name)
console.log(myExternObject.myInternObject.internSentence)

// 9. Comprueba si los dos objetos creados son iguales.
let compareObjects = (obj1, obj2) => {
    if(obj1 == obj2){
        console.log("Son objetos iguales")
    }
    if(typeof obj1 == typeof obj2){
        console.log("Ambos son objetos del mismo tipo")
    }
    for (const key1 in obj1) {
        for (const key2 in obj2) {
            if (key2.includes(key1)){
                console.log(`They share ${key2}`)
            }
        }
    }
}
compareObjects(cat, myExternObject)

// 10. Comprueba si dos propiedades diferentes son iguales.
console.log(myExternObject.name == cat.name)
console.log(myExternObject.age == cat.age)


// GPT - CLEAN CODE
// 1. Crea un objeto con 3 propiedades.
const animal = {
    species: "Cat",
    name: "Luna",
    age: 4
};

// 2. Accede y muestra su valor.
console.log(`The animal is a ${animal.species} named ${animal.name}, and it is ${animal.age} years old.`);

// 3. Agrega una nueva propiedad.
animal.favoriteFood = "Salmon";
console.log(animal);

// 4. Elimina una de las 3 primeras propiedades.
delete animal.age;
console.log(animal);

// 5. Agrega una función e invócala.
animal.describe = function () {
    return `This is ${this.name}, a ${this.species} that loves ${this.favoriteFood}.`;
};
console.log(animal.describe());

// 6. Itera las propiedades del objeto.
for (const key in animal) {
    if (animal.hasOwnProperty(key)) {
        console.log(`${key}: ${animal[key]}`);
    }
}

// 7. Crea un objeto anidado.
const zoo = {
    name: "City Zoo",
    location: "Downtown",
    animals: {
        mammal: animal,
        bird: {
            species: "Parrot",
            name: "Kiwi",
            age: 2
        }
    }
};

// 8. Accede y muestra el valor de las propiedades anidadas.
console.log(`The zoo has a ${zoo.animals.mammal.species} named ${zoo.animals.mammal.name}.`);
console.log(`It also has a ${zoo.animals.bird.species} named ${zoo.animals.bird.name}.`);

// 9. Comprueba si los dos objetos creados son iguales.
const areObjectsEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
};

// Comparando `animal` con `zoo.animals.mammal` (mismo objeto, debe ser `true`).
console.log(areObjectsEqual(animal, zoo.animals.mammal));

// Comparando `animal` con `zoo.animals.bird` (diferentes objetos, debe ser `false`).
console.log(areObjectsEqual(animal, zoo.animals.bird));

// 10. Comprueba si dos propiedades diferentes son iguales.
console.log(zoo.animals.mammal.species === zoo.animals.bird.species); // Comparando especies
console.log(zoo.animals.mammal.name === zoo.animals.bird.name); // Comparando nombres
