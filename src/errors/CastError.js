import BasicError from "./BasicError.js";

class CastError extends BasicError {
    constructor(message = "One or more of the data provided is incorrect") {
        super(message, 400);
    }
}

export default CastError;