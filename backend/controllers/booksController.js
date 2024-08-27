const Books = require("../models/booksModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");

//Create Product
exports.createBookEntry = catchAsyncErrors(async (req, res, next) => {
  const book = await Books.create(req.body);
  res.status(201).json({
    success: true,
    message: "new book entry is created",
    book,
  });
});

//Get all Books
exports.getAllBooks = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 5;
  const booksCount = await Books.countDocuments();
  let query = Books.find();

  const apiFeature = new ApiFeatures(query, req.query)
  .search() 
  .filter()
  .applySort()
  .pagination(resultPerPage);

  const books = await apiFeature.query.exec();
  res.status(200).json({
    success: true,
    message: "all books found",
    books,
    booksCount
  });
});

//Get a book by a specific id
exports.getBook = catchAsyncErrors(async (req, res, next) => {
  const book = await Books.findById(req.params.id);
  if (!book) {
    return next(new ErrorHandler("Book not found", 404));
  }
  res.status(200).json({
    succes: true,
    message: "book found",
    book,
  });
});

//update book details
exports.updateBook = catchAsyncErrors(async (req, res, next) => {
  let book = await Books.findById(req.params.id);
  if (!book) {
    return next(new ErrorHandler("Book not found", 404));
  }

  book = await Books.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    message: "book details updated",
    book,
  });
});

//delete a book
exports.deleteBook = catchAsyncErrors(async (req, res, next) => {
  const book = await Books.findById(req.params.id);
  if (!book) {
    return next(new ErrorHandler("Book not found", 404));
  }

  await Books.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "book deleted successfully",
  });
});
