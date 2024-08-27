const Books = require("../models/booksModel");

//Create Product
exports.createBookEntry = async(req, res, next) => {
    const book = await Books.create(req.body);
    res.status(201).json({
        success : true,
        message : "new book entry is created",
        book
    });
}


//Get all Books
exports.getAllBooks = async (req, res, next) => {
    const books = await Books.find();
    res.status(200).json({
        success : true,
        message : "all books found",
        books
    });
}

//Get a book by a specific id
exports.getBook = async(req, res, next) => {
    const book = await Books.findById(req.params.id);
    res.status(200).json({
        succes : true,
        message : "book found",
        book
    })
}

//update book details
exports.updateBook = async(req, res, next) => {
    let book = await Books.findById(req.params.id);
    if(!book){
        return res.status(404).json({
            success : false,
            message : "no book found"
        });
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
}


//delete a book
exports.deleteBook = async(req, res, next) => {
    const book  = await Books.findById(req.params.id);
    if(!book){
        return res.staus(404).json({
            success : false,
            message : "no book found"
        });
    }

    await Books.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success : true,
        message : "book deleted successfully"
    })
}