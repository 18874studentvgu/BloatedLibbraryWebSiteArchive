const mongoose = require('mongoose');
const path = require('path');
const BooksAdmin = require("../models/bookAdmin.js");

mongoose.connect('mongodb://0.0.0.0:27017/web', {useNewUrlParser: true}) 

BooksAdmin.findByIdAndUpdate('64586542cc58326c4ef4ab81', { Quantity: 7, Recommendation: 4, Author: 'Edgar Allan Poe' }, { new: true }).then((book) => {console.log(book)})
