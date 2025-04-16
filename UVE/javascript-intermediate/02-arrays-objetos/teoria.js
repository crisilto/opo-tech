// ===============================================
// TEORÍA: MANIPULACIÓN AVANZADA DE ARRAYS Y OBJETOS
// ===============================================

//----------------------------------------------------------
// 🧠 MÉTODOS AVANZADOS DE ARRAYS
//----------------------------------------------------------

// .map(): crea un nuevo array con los elementos transformados
const numeros = [1, 2, 3];
const dobles = numeros.map(n => n * 2); // [2, 4, 6]

// .filter(): crea un nuevo array solo con los elementos que cumplen una condición
const pares = numeros.filter(n => n % 2 === 0); // [2]

// .reduce(): acumula un valor (ej: suma total)
const suma = numeros.reduce((acc, val) => acc + val, 0); // 6

// .reduceRight(): igual que reduce, pero empieza por la derecha
const restaInversa = numeros.reduceRight((acc, val) => acc - val); // ((3 - 2) - 1) = 0

// .find(): devuelve el primer elemento que cumple una condición
const encontrado = numeros.find(n => n > 1); // 2

// .findIndex(): igual que find pero devuelve el índice
const indice = numeros.findIndex(n => n > 1); // 1

// .some(): devuelve true si ALGUNO cumple la condición
const hayMayor = numeros.some(n => n > 2); // true

// .every(): true si TODOS cumplen la condición
const todosPositivos = numeros.every(n => n > 0); // true

// .flat(): aplana un array anidado 1 nivel por defecto
const arrAnidado = [1, 2, [3, 4]];
const plano = arrAnidado.flat(); // [1, 2, 3, 4]

// .flatMap(): combina map() y flat(1)
const nombres = ['ana', 'juan'];
const letrasSeparadas = nombres.flatMap(nombre => nombre.split('')); // ['a','n','a','j','u','a','n']

// .sort(): ordena el array *mutando el original*
const desorden = [3, 1, 4, 2];
desorden.sort(); // [1, 2, 3, 4] (por defecto compara como strings)

// Para números reales:
desorden.sort((a, b) => a - b); // orden ascendente

// .reverse(): invierte el array (también muta)
desorden.reverse(); // [4, 3, 2, 1]

//----------------------------------------------------------
// 🔠 .split() y .join()
//----------------------------------------------------------

// .split(): convierte string a array
const texto = "hola mundo";
const separado = texto.split(" "); // ['hola', 'mundo']

// .join(): convierte array a string
const unido = separado.join(" - "); // "hola - mundo"

//----------------------------------------------------------
// 🧱 MÉTODOS DE OBJETOS
//----------------------------------------------------------

// Object.entries(): array de pares [clave, valor]
const persona = { nombre: 'Ana', edad: 30 };
const entradas = Object.entries(persona); // [['nombre', 'Ana'], ['edad', 30]]

// Object.keys(): array solo de claves
const claves = Object.keys(persona); // ['nombre', 'edad']

// Object.values(): array solo de valores
const valores = Object.values(persona); // ['Ana', 30]

//----------------------------------------------------------
// 🔄 OPERADOR SPREAD (...) y REST
//----------------------------------------------------------

// Spread (expandir contenido):
const original = [1, 2, 3];
const copia = [...original]; // copia sin mutar

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest (agrupar valores en un array o objeto):
function sumar(...numeros) {
    return numeros.reduce((acc, val) => acc + val, 0);
}
// sumar(1, 2, 3) → 6

//----------------------------------------------------------
// 🎯 DESTRUCTURING PROFUNDO
//----------------------------------------------------------

// Arrays
const coords = [10, 20, 30];
const [x, , z] = coords; // x = 10, z = 30

// Objetos
const usuario = {
    nombre: 'Carlos',
    direccion: {
        ciudad: 'Madrid',
        cp: 28001
    }
};

const {
    direccion: { ciudad, cp }
} = usuario; // ciudad = 'Madrid', cp = 28001

// También se puede renombrar:
const { nombre: nombreUsuario } = usuario; // nombreUsuario = 'Carlos'