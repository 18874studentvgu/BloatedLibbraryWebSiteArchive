const Review = require("../models/Review");
const Book = require("../models/Book");
const User = require('../models/User')
module.exports = (req, response) => {
    var id1 = req.params.id
    var username = user1
    if (id1.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId, proceed with `findById` call.
    if(loggedIn) {
    Promise.all ([ Book.findById(req.params.id), Review.find({}), User.findOne({username : username})]) 
    .then(([book, reviews, user])=>{
        //this is for when there are reviews
        var id = "yes"
        console.log("have reviews")
        console.log(book.title)
        console.log(user.iconLink)
        response.render('book-info',{
            reviews:reviews,
            book:book,
            id: id,
            user: user
        });
    })
    .catch((error, book ,reviews,) => { 
        //if there are no reviews
        id = "no"
        response.render('book-info',{
            reviews:reviews,
            book: book,
            id: id
        });
    })
    } else {
    Promise.all ([ Book.findById(req.params.id), Review.find({})]) 
    .then(([book, reviews])=>{
        //this is for when there are reviews
        var id = "yes"
        console.log("have reviews")
        response.render('book-info',{
            reviews:reviews,
            book:book,
            id: id,
        });
    })
    .catch((error, book ,reviews,) => { 
        //if there are no reviews
        id = "no"
        response.render('book-info',{
            reviews:reviews,
            book: book,
            id: id
        });
    })
    }
}
    
}
