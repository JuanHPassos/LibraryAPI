import mongoose from "mongoose";
import BasicError from "../errors/BasicError.js";
import CastError from "../errors/CastError.js";
import ValidationError from "../errors/ValidationError.js";

function errorHandler (error, req, res, next) {
    console.log(error);

    if (error instanceof mongoose.Error.CastError) {
        // Bad request
        new CastError().sendResponse(res);
    } else if (error instanceof mongoose.Error.ValidationError) {
        new ValidationError(error).sendResponse(res);
    } else {
        new BasicError().sendResponse(res);
    }
}

export default errorHandler;