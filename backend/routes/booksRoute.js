const express = require("express");
const {getAllBooks, createBookEntry, getBook, updateBook, deleteBook } = require("../controllers/booksController");

const router = express.Router();

router.route("/books").get(getAllBooks);
router.route("/books/:id").get(getBook);
router.route("/books").post(createBookEntry); 
router.route("/books/:id").put(updateBook);
router.route("/books/:id").delete(deleteBook);

module.exports = router;