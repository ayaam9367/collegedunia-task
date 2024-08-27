const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //Wrong mnongodb id error
  if (err.name === "CastError") {
    const message = `Resource not founcd. Invalid : ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //Mongoose duplicate key error
  if (err.code == 11000) {
    const message = `Duplicate ${Object.keys(err.keyvalue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    error: err.stack,
  });
};
