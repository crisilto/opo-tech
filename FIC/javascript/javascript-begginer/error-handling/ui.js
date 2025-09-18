import { ConnectionError, ValidationError } from "./errors";
import { validateUser } from "./validations";

const name = "cris"
const age = 27
const email = ""

try {
    validateUser({ name, age, email })
} catch (e) {
    console.log(e.name)
    if (e instanceof ConnectionError) {
        //retry after a few seconds
        setTimeout(() => {
            validateUser({ name, age, email })
        })
    }

    if (e instanceof ValidationError) {
        //showUIModalValidation()
    }
}