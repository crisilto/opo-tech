import { ConnectionError, ValidationError } from "./errors"
export const validateUser = ({ name, age, email } = {}) => {
    if (!name) throw new ValidationError("name is required")
    if (!age) throw new ValidationError("age is required")
    if (!email) throw new ValidationError("email is required")
    // call to the db to save the user
    try {
        mongodb.connect()
    } catch (e) {
        //send the original trace to an own service or whatever
        //sendBeaconError(e)
        throw new ConnectionError("db is not available")
    }
}