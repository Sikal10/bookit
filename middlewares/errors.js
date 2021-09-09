import ErrorResponse from "../utils/errorHandler";
import colors from "colors";

const onError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    let error = {...err};
    error.message = err.message
    console.log(err.stack.red)

    //Mongoose bad ObjectID
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`
        error = new ErrorResponse(message, 404);
    }
    //Mongoose validation error
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorResponse(message, 400)
    }
    //Mongoose duplicate key
    if (err.code === 11000) {
        const message = "Duplicate field value entered"
        error = new ErrorResponse(message, 400)
    }


    res.status(err.statusCode).json({success: false, error, message: error.message, stack: error.stack});
}

export default onError;