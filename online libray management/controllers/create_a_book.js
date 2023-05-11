const mongoose = require('mongoose');
const path = require('path');
const BooksAdmin = require("../models/bookAdmin.js");

mongoose.connect('mongodb://0.0.0.0:27017/web', {useNewUrlParser: true}) 

BooksAdmin.findByIdAndUpdate('645a66d9cac4e3df4a3a3b86', { Quantity: 7, Recommendation: 4, Author: 'Edgar Allan Poe' }, { new: true }).then((book) => {console.log(book)})
