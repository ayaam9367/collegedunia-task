const express = require("express");
const {getAllBooks } = require("../controllers/booksController");

const router = express.Router();

router.route("/books").get(getAllBooks);

module.exports = router;