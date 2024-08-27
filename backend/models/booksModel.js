const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
    title : {
        type : String,
        required : [true, "Please enter the title"]
    },

    author : {
        type : String,
        required : [true, "Please enter the author name"]
    },

    isbn : {
        type : String,
        unique : true,
        required : [true, "Please enter the isbn number"]
    },

    publishedDate : {
        type : Date,
    },

    createdAt : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model("Books", booksSchema);