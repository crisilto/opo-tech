//ARRAY

//DECLARACIÓN
let myArray = [] //Opción común
let myArray2 = new Array() //Opción inusual pero más pura
console.log(myArray)
console.log(myArray2)

//INICIALIZACIÓN
myArray = [2] //Es un array con un valor 2
myArray2 = new Array(2) //Es un array que guarda 2 huecos de espacio en memoria
console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4] //1, 2, 3, 4
myArray2 = new Array(1, 2, 3, 4) //1, 2, 3, 4 (Es confusa su forma de inicialización porque en este caso lo guarda igual)
console.log(myArray)
console.log(myArray2)

myArray = ["Cristina", "Silvestre", "crisilto", 27, true]
myArray2 = new Array("Cristina", "Silvestre", "crisilto", 27, true)
console.log(myArray)
console.log(myArray2)

//Inicialización poco a poco
myArray = []
myArray[3] = true
myArray[1] = "Silvestre"
myArray[2] = 27
console.log(myArray)

myArray2 = new Array(4)
myArray2[3] = true
myArray2[1] = "Silvestre"
myArray2[2] = 27
console.log(myArray2)

//MÉTODOS
myArray = []

//PUSH
myArray.push("Cristina") //Agrega un elemento al final del array
myArray.push("Silvestre")
myArray.push("crisilto")
myArray.push(27)
myArray.push(true)
console.log(myArray)

//POP
console.log(myArray.pop()) //Elimina el último elemento del array (y lo devuelve)
console.log(myArray)
let lastElement = myArray.pop() //También lo puedes guardar en una variable a la vez que lo eliminas
console.log(lastElement)
console.log(myArray)

//SHIFT
console.log(myArray.shift()) //Elimina el primer elemento del array (y lo devuelve)
console.log(myArray.shift())
console.log(myArray)

//UNSHIFT
//myArray.unshift("Cristina") //Agrega un elemento al principio del array
//myArray.unshift("Silvestre")
//De esa manera se agregaría primero Cristina al principio, posteriormente Silvestre de nuevo al principio, quedando-> "Silvestre", "Crsitina"
myArray.unshift("Cristina", "Silvestre") //Se pueden agregar varios elementos a la vez, de nuevo al principio del array, aquí seguiría el orden lógico, quedando-> "Cristina", "Silvestre"
console.log(myArray)

//LENGTH
console.log(myArray.length) //Devuelve el número de elementos que hay en el array

//CLEAR
myArray = []
//myArray.length = 0 Sería una alternativa menos elegante y menos interesante
console.log(myArray)

//SLICE
myArray = ["Cristina", "Silvestre", "crisilto", 27, true]
let myNewArray = myArray.slice(2, 4) //Le indicamos el primer indice incluido, y el segundo índice excluyente
console.log(myNewArray)

//SPLICE
myArray.splice(2, 2) //Le indicamos desde qué indice empezar a borrar y qué cantidad de elementos borrar
console.log(myArray)

myArray = ["Cristina", "Silvestre", "crisilto", 27, true]
myArray.splice(2, 2, "Nuevo elemento", "Otro elemento") //Le indicamos desde qué indice empezar a borrar, qué cantidad de elementos y desde el índice indicado podemos incluir más elementos en su posición
console.log(myArray)
