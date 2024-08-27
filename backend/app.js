const express = require("express");
const app = express();

app.use(express.json());

const product = require("./routes/booksRoute");

app.use("/api", product);

module.exports = app