const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

const product = require("./routes/booksRoute");

app.use("/api", product);


//middleware for Errors
app.use(errorMiddleware);

module.exports = app