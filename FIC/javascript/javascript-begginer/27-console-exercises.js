// 1. Crea un funciÃ³n que utilice error correctamente.
class Form {
    constructor(name, age, email) {
        this.name = name
        this.age = age
        this.email = email
    }
}
const checkForm = (form) => {
    if (!form || typeof form.name !== "string" || typeof form.age !== "number" || !form.email.includes("@")) {
        console.error("Value not allowed")
    } else {
        console.log("Correct")
    }
}
let myForm = new Form(2, "1", "wrongemail.es")
checkForm(myForm)

// 2. Crea una funciÃ³n que utilice warn correctamente.
function deprecatedFunctionality(func) {
    if (func === "depecrated") {
        console.warn("This functionality is depecrated")
    } else {
        console.log("Nice")
    }
}
let myFunc = "depecrated"
deprecatedFunctionality(myFunc)

// 3. Crea una funciÃ³n que utilice info correctamente.
let usefulInfo = ["This works"]
function checkWorks(action) {
    if (action) {
        console.info("Congrats, that works correctly")
    }
}
checkWorks(usefulInfo)

// 4. Utiliza table.

let myProducts = [
    { name: "keyboard", price: 89.99 },
    { name: "mouse", price: 49.99 },
    { name: "monitor", price: 289.99 },
]
console.table(myProducts)

// 5. Utiliza group.
console.group("User Details:")
console.group("Name: Lilith")
console.log("First Name: Lilith")
console.log("Last Name: Unknown")
console.groupEnd()

console.group("Additional Info:")
console.log("Age: 4")
console.log("Address: Valencia")
console.groupEnd()

// 6. Utiliza time.
const myStack = ["HTML", "CSS", "JS", "React", "Java", "SpringBoot", "SQL"]
console.time("Execution time")
for (const element of myStack) {
    console.log(element)
}
console.timeEnd("Execution time")

// 7. Valida con assert si un nÃºmero es positivo.
let n = -4
console.assert(n >= 0, "number must be positive")
let password = "false123"
console.assert(password.length >= 8, "The password must be at least 8 characters long")

// 8. Utiliza count.
const click = () => {
    console.count("Button Clicked")
}
click();
click();
click();
console.countReset("Button Clicked");
click();

// 9. Utiliza trace.
function sayHello() {
    myHello()
}
function myHello() {
    console.log("Hello")
    console.trace("Execution monitoring")
}
sayHello()

// 10. Utiliza clear.
clearConsole = () => {
    console.clear()
    console.log("Console cleared")
}
clearConsole()