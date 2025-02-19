import CastError from "./CastError.js";

class ValidationError extends CastError {
    constructor(error) {
        const errorMessages = Object.values(error.errors)
            .map(error => error.message)
            .join("; ");

        super(`The following errors were found: ${errorMessages}`);
    }
}

export default ValidationError;