// 1. Usa desestructuraciÃ³n para extraer los dos primeros elementos de un array.
let colors = ["black", "white", "yellow", "red"]
let [color1, color2] = colors
console.log(`The two first colors of the array [${colors}] are 1-${color1} 2-${color2}`)

// 2. Usa desestructuraciÃ³n en un array y asigna un valor predeterminado a una variable.
let family = ["Lilith", "Kenneth", "Raul"]
let [fam1, fam2, fam3, fam4 = "Dunno yet"] = family
console.log(`My family are ${fam1}, ${fam2}, ${fam3} and ${fam4}.`)

// 3. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto.
let cat = {
    name: "Kenneth",
    age: 1,
    color: "orange",
    hobby: function () {
        return `${this.name} loves to eat a lot`
    }
}
let { hobby, age } = cat
console.log(`Being just ${age} year old, ${cat.hobby()}`)

// 4. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto y asÃ­gnalas a nuevas variables con nombres diferentes.
let { name: catName, age: catAge } = cat
console.log(`${cat.name} and ${catName} are the same. Also, ${age} and ${catAge}`)

// 5. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto anidado.
const zoo = {
    name: "City Zoo",
    location: "Downtown",
    animals: {
        mammal: cat,
        bird: {
            species: "Parrot",
            name: "Kiwi",
            age: 2
        }
    }
};
let { animals: { bird: { species: birdSpecies, name: birdName } } } = zoo
console.log(`The name of that ${birdSpecies} is ${birdName}`)

// 6. Usa propagaciÃ³n para combinar dos arrays en uno nuevo.
const nums1 = [1, 2, 3, 4, 5]
const nums2 = [6, 7, 8, 9, 10]
const nums3 = [...nums1, ...nums2]
console.log(nums3)

// 7. Usa propagaciÃ³n para crear una copia de un array.
const arr1 = ["I am practicing JavaScript", 8, false]
const arr2 = [...arr1]
console.log(arr2)

// 8. Usa propagaciÃ³n para combinar dos objetos en uno nuevo.
const person = {
    name: "Raúl",
    surname: "González",
    age: 35
}
const data = {
    isSingle: false,
    hobbies: ["Anime", "Videogames", "Read"],
    family: {
        kenneth: {
            species: "cat",
            color: "orange"
        },
        lilith: {
            species: "cat",
            color: "grey"
        },
        cris: {
            species: "wife",
            color: "redhead"
        },
    }
}
const deepPerson = {...person, ...data}
console.log(deepPerson)

// 9. Usa propagaciÃ³n para crear una copia de un objeto.
const secureData = {...data}
console.log(secureData)

// 10. Combina desestructuraciÃ³n y propagaciÃ³n.
let {family: theFam} = data
console.log(theFam)
const personFamily = {...theFam}
console.log(personFamily)