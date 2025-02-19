import BasicError from "./BasicError.js";

class NotFound extends BasicError {
    constructor(message = "Page not found") {
        super(message, 404);
    }
}

export default NotFound;