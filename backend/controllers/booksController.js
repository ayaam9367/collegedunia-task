const Books = require("../models/booksModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Create Product
exports.createBookEntry = catchAsyncErrors(async(req, res, next) => {
    const book = await Books.create(req.body);
    res.status(201).json({
        success : true,
        message : "new book entry is created",
        book
    });
});


//Get all Books
exports.getAllBooks = catchAsyncErrors(async (req, res, next) => {
    const books = await Books.find();
    res.status(200).json({
        success : true,
        message : "all books found",
        books
    });
});

//Get a book by a specific id
exports.getBook = catchAsyncErrors(async(req, res, next) => {
    const book = await Books.findById(req.params.id);
    if(!book){
        return next(new ErrorHandler("Book not found", 404));
    }
    res.status(200).json({
        succes : true,
        message : "book found",
        book
    })
});

//update book details
exports.updateBook = catchAsyncErrors(async(req, res, next) => {
    let book = await Books.findById(req.params.id);
    if(!book){
        return next(new ErrorHandler("Book not found", 404));
    }

    book = await Books.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
        runValidators : true,
    });
    res.status(200).json({
        success : true,
        message : "book details updated",
        book
    });
});


//delete a book
exports.deleteBook = catchAsyncErrors(async(req, res, next) => {
    const book  = await Books.findById(req.params.id);
    if(!book){
        return next(new ErrorHandler("Book not found", 404));
    }

    await Books.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success : true,
        message : "book deleted successfully"
    })
});