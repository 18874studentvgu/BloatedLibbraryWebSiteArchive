const mongoose = require('mongoose');
const path = require('path');
const Books = require("../models/Book.js");

mongoose.connect('mongodb://0.0.0.0:27017/web', {useNewUrlParser: true}) 
var author = "Robert C Martin, Stryker Lawton, Strucker";
var sample = 
{
    name: "Clean code : a handbook of agile software craftsmanship" ,
    author: author.split(","),
    copiesAvailable: 7, 
    sypnopsis: "",
    PDFPreviewLink: "",
}

Books.create(sample).then((book) => {console.log(book)})
