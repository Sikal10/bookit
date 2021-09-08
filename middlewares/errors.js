import ErrorResponse from "../utils/errorHandler";

const onError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    let error = {...err};

    error.message = err.message
    res.status(err.statusCode).json({success: false, error, message: error.message, stack: error.stack});
}

export default onError;