// TRY-CATCH
// Allows to try a block of code and to catch any error that might occurs
try {
    // this code could fail
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // block executed if an error occurs
    console.log("Error catched: ", error.message);
}

// FINALLY
// An optional block that always executes, regardless if there was an error or not
try {
    let data = fetchData();
    console.log("Data obtained: ", data);
} catch (error) {
    console.log("Error getting the data: ", error.message);
} finally {
    console.log("Resource cleanup");
}

// THROW
// Throws an error manually
function validateAge(age) {
    if (age < 18) {
        throw new Error("You should be equal or greater than 18");
    }
    return true;
}
try {
    validateAge(16);
} catch (error) {
    console.log("Error: ", error.message);
}

// CUSTOM EXCEPTIONS
// They allow to create specifically errors to your application
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
try {
    throw new CustomError("This is a custom error");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// CASE STUDIES
// FORM VALIDATIONS
function validateForm(data) {
    if (!data.username) {
        throw new Error("Username is required");
    }
    if (!data.email.includes("@")) {
        throw new Error("Invalid email");
    }
    return "Form accepted";
}

try {
    const form = { username: "", email: "invalidEmail" };
    console.log(validateForm(form));
} catch (error) {
    console.log("Error: ", error.message);
}

// API CONSUMPTION WITH ERROR HANDLING
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error getting the data: ", error.message);
    }
}
fetchData("https://jsonplaceholder.typicode.com/posts/1");

// RETRIES ON FAILED OPERATIONS
function unstableOperation() {
    if (Math.random() > 0.7) {
        return "Success";
    }
    throw new Error("Failed");
}

function retryOperation(maxRetries) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            return unstableOperation();
        } catch (error) {
            console.log(`Attempt ${attempts} failed`);
            attempts++;
        }
    }
    throw new Error("Limit of attempts reached");
}

try {
    console.log(retryOperation(5));
} catch (error) {
    console.log("Final error: ", error.message);
}

// VERIFY OBJECT PROPERTIES
function checkProperty(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new Error(`The property ${prop} does not exist in the object`);
    }
    return obj[prop];
}

try {
    const user = { name: "Lilith" };
    console.log(checkProperty(user, "name"));
    console.log(checkProperty(user, "email"));
} catch (error) {
    console.log("Error: ", error.message);
}

// CATCH MULTIPLE TYPES OF ERRORS
try {
    riskyOperation(); // ReferenceError/TypeError
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error: ", error.message);
    } else if (error instanceof TypeError) {
        console.log("Type error: ", error.message);
    } else {
        console.log("Unexpected error: ", error.message);
    }
}

// CLEAN CODE
// Do not use errors for flow control-> Errors should be used only for exceptional cases.
// Provide clear messages-> Help other developers (and yourself) understand the problem.
// Use custom exceptions-> They are useful for identifying and handling errors specific to your application.
// Always clean up resources-> Use finally to free memory, close connections, or perform necessary tasks.
// Test and simulate errors-> Make sure your application behaves correctly under unexcpected conditions.

// EXERCISES
// 1 - BASIC ERROR HANDLING WITH TRY-CATCH
//      Write a function called divideNumbers that takes two parameters a and b.
//      If b is 0, raise an error with message "Cannot divide by zero".
//      Handle the error using a try-catch block and return an appropiate message if an error occurs.
function divideNumbers(a, b) {
    if (b == 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
function safeDivide(a, b) {
    try {
        return divideNumbers(a, b);
    } catch (error) {
        return `Error: ${error.message}`;
    }
}
console.log(safeDivide(10, 2));
console.log(safeDivide(10, 0));

// 2 - ERROR HANDLING IN API REQUESTS
//      Create a function called fetchPost that makes a fetch call to the URL "https://jsonplaceholder.typicode.com/posts/1".
//      If an error occurs in the connection or the response is not OK, catch the error and return "Error fetching post".
//      If the request is successful, return the title of the post.

async function fetchPost(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error fetching post");
        }
        const data = await response.json(); // invokes json() as a method
        return data.title; // returns the title of the post
    } catch (error) {
        return "Error fetching post";
    }
}

fetchPost("https://jsonplaceholder.typicode.com/posts/1")
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message)); // in case fetchPost throws an error

// 3 - CUSTOM EXCEPTIONS
//      Create a class called ValidationError that extends Error.
//      Then, write a validateUser function that validates a user object with the following rules:
//          ·It must have an non-empty name property.
//          ·It must have an age property greater or equal to 18.
//      If any validation fails, raise a ValidationError with a descriptive message.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function validateUser(user) {
    if (!user.name || user.name.trim() === "") {
        throw new ValidationError("Name is required and cannot be empty");
    }
    if (user.age === undefined || user.age < 18) {
        throw new ValidationError("User must be at least 18 years old");
    }
    return "Valid user";
}

try {
    const user = { name: "Kenneth", age: 1 };
    console.log(validateUser(user));
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`${ValidationError.name}: ${error.message}`);
    } else {
        console.log(`Unexpected error ${error.message}`);
    }
}

// 4 - RETRIES ON UNSTABLE OPERATIONS
//      Modify the retryOperation function from the manual to:
//          · Return a message like "Operation successful after X attempts" if successful.
//          · Throw an error with the message "Operation failed after X attempts" if it exceeds the maximum number of retries.
//      Test the function with a maximum of 3 attempts.
function unstableOperation() {
    if (Math.random() > 0.7) {
        return "Success";
    }
    throw new Error("Fail");
}

function retryOperation(maxRetries) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            return `Operation successful after ${attempts + 1
                } attempts: ${unstableOperation()}`;
        } catch (error) {
            attempts++;
            console.log(`Attempt ${attempts} failed.`);
        }
    }
    throw new Error(`Operation failed after ${maxRetries} attempts.`);
}

try {
    console.log(retryOperation(3));
} catch (error) {
    console.log("Final error:", error.message);
}

// 5 - CATCHING MULTIPLE TYPES OF ERRORS
//      Create a function called processData that accepts an array of numbers. For each number:
//          · If it is not a number (typeof num !== 'number'), raise a TypeError.
//          · If it is negative, raise a RangeError.
//      The function should catch both errors separately and display specific messages for each type.
let numbers = [32, "12", true, 12, -3, -1, 22]
function processData(arr) {
    for (const el of arr) {
        try {
            if (typeof el !== "number") {
                throw new TypeError(`Element "${el}" is not a number.`)
            }
            if (el < 0) {
                throw new RangeError(`Element "${el}" is a negative number.`)
            }
            console.log(`Element "${el}" is valid.`);
        } catch (error) {
            if (error instanceof TypeError) {
                console.log(`Type Error: ${error.message}`)
            } else if (error instanceof RangeError) {
                console.log(`Range Error: ${error.message}`)
            } else {
                console.log(`Unexpected Error: ${error.message}`)
            }
        }
    }
}
processData(numbers)

// 7 - VALIDATING OBJECT PROPERTIES
//      Create a function called validateObjectProperty that receives an object and a list of properties.
//      If any property does not exist on the object, throw a custom error with the name of the missing property.
const myObj = { name: "Lilith", species: "cat" }
class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = "CustomError"
    }
}
function validateObjectProperty(obj, properties) {
    for (const prop of properties) {
        if (!obj.hasOwnProperty(prop)) {
            throw new CustomError(`Property "${prop}" has not been found.`)
        }
    }
    return "All properties are valid"
}
try {
    console.log(validateObjectProperty(myObj, ["name", "species"]))
    console.log(validateObjectProperty(myObj, ["name", "age"]))
} catch (error) {
    if (error instanceof CustomError) {
        console.log(`${error.name}: ${error.message}`)
    } else {
        console.log(`Unexpected error: ${error.message}`)
    }
}


// 8 - SAFE VALUE CONVERSION
//      Create a function called safeParseFloat that takes an array of values (numbers, strings, etc.).
//      It attempts to convert each value to a float and catches errors on invalid values, returning an array of valid numbers.

function safeParseFloat(arr){
    
}
// function divideNumbers(a, b) {
//     if (b == 0) {
//         throw new Error("Cannot divide by zero");
//     }
//     return a / b;
// }
// function safeDivide(a, b) {
//     try {
//         return divideNumbers(a, b);
//     } catch (error) {
//         return `Error: ${error.message}`;
//     }
// }
// console.log(safeDivide(10, 2));
// console.log(safeDivide(10, 0));


// 9 - TIMEOUT WITH ERROR HANDLING
//      Write a waitAndFail function that returns a Promise that rejects after 2 seconds with the message "Timeout reached".
//      Catch and handle this error using try-catch inside an async function.

// 10 - ERRORS IN CHAINED PROMISES
//      Create a series of functions that chain promises:
//          · A fetchData function that returns mock data or throws an error if something fails.
//          · A processData function that takes the data and processes it, throwing another error if the format is incorrect.
//      Handle both errors in a single catch block.
