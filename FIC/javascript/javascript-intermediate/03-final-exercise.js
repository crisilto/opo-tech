// Ejercicio práctico final
// Enunciado:

// Tienes un listado de usuarios registrados en diferentes plataformas.
// Cada usuario tiene nombre, edad, y email.

const rawUsers = [
    [
        { name: "Alice", age: 17, email: "alice@mail.com" },
        { name: "Bob", age: 30, email: "bob@mail.com" }
    ],
    [
        { name: "Charlie", age: 22, email: "charlie@mail.com" },
        { name: "Alice", age: 17, email: "alice@mail.com" },
        { name: "Cris", age: 19, email: "alice@mail.com" }
    ],
    [
        { name: "Fay", age: 26, email: "fay@mail.com" }
    ]
]

//1- Aplanar, eliminar duplicados por email y guardar en Map
const uniqueUsersMap = new Map(
    rawUsers.flat().map(u => [u.email, u])
)

//2- Array de objetos único
const uniqueUsers = [...uniqueUsersMap.values()]

//3- Transformaciones y cálculos
const upperNames = uniqueUsers.map(u => u.name.toUpperCase())
const averageAge = uniqueUsers.reduce((acc, u) => acc + u.age, 0) / uniqueUsers.length
const adults = uniqueUsers.filter(u => u.age >= 18)
const ordenatedUsers = [...uniqueUsers].sort((a, b) => b.age - a.age)

//4- Mostrar resultados
console.log('Nombres en mayúsculas:', upperNames)
console.log('Edad promedio:', averageAge)
console.log('Adultos:', adults)
console.log('Ordenados por edad:', ordenatedUsers)

uniqueUsersMap.forEach((u, email) => console.log(`${email} -> ${u.name}, ${u.age}`))