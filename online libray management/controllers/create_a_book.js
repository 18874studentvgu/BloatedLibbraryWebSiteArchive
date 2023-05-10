const mongoose = require('mongoose');
const path = require('path');
const BooksAdmin = require("../models/bookAdmin.js");

mongoose.connect('mongodb://0.0.0.0:27017/web', {useNewUrlParser: true}) 

// for (var i = 0; i < 24; i++ )
// {
    BooksAdmin.create({
    Title: "The Narrative of Arthur Gordon Pym of Nantucket",
    Author: "Edgar Allan Poe",
    Category: "Fantasy, Adventure",
    publishedDate: "31/07/1838",
    Quantity: 3,
})
.then ( (books) => {
        console.log(books);
    })
    .catch ( (error) => {
        console.log(error);
    })
// }
