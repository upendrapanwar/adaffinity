"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (err, req, res, next) => {
    // Default status code if not explicitly set
    const status = err.status || 500;
    // Default error message if not explicitly set
    const message = err.message || 'Internal Server Error';
    // Log the error for debugging purposes
    console.error(`Error: ${message} | Status Code: ${status}`);
    if (err.stack)
        console.error(err.stack);
    // Send a structured error response
    res.status(status).json({
        success: false,
        status,
        message,
    });
};
exports.default = errorMiddleware;
