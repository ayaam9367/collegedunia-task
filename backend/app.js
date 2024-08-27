const express = require("express");
const app = express();
const errorMiddelware = require("./middleware/error");

app.use(express.json());

const product = require("./routes/booksRoute");

app.use("/api", product);


//middelware for Errors
app.use(errorMiddelware);

module.exports = app