// CONSOLE

// LOG
console.log("Hello, JavaScript!")

// ERROR
console.error("Error")
console.error("Error connecting to db", new Error("Connection failed"))

// WARN
console.warn("This is a warning message")

// INFO
console.info("This is a message with aditional information")

// TABLE
let data = [
    ["Lilith", 4],
    ["Kenneth", 1]
]
console.table(data)

data = [
    {name: "Lilith", age: 4},
    {name: "Kenneth", age: 1}
]
console.table(data)

// GROUP 
console.group("User:")
console.group("Name: Cris")
console.group("Age: 27")
console.groupEnd()

// TIME
console.time("Execution time 1")
for(let i = 0; i < 10000; i++){

}
console.timeEnd("Execution time 1")

console.time("Execution time 2")
for(let i = 0; i < 10000; i++){

}
console.timeEnd("Execution time 2")

// ASSERT
let age = 12
console.assert(age >= 18, "user must be older than 18")

// COUNT
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// TRACE
function funcA(){
    funcB()
}
function funcB(){
    console.trace("Execution monitoring")
}
funcA()

// CLEAR
console.clear()