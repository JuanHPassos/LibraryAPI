class BasicError extends Error {
    constructor(message = "Internal server error", status = 500) {
        super(message);
        this.status = status;
    }

    sendResponse(res) {
        res.status(this.status).send({
            message: this.message,
            status: this.status,
        });
    }
}

export default BasicError;