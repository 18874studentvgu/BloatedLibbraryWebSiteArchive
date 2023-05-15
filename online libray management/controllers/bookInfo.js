const Review = require("../models/Review");
const Book = require("../models/Book")
module.exports = (req, response) => {
    Promise.all ([ Book.find({}), Review.find({})]) 
    .then(([book, reviews])=>{
        //this is for when there are reviews
        var id = "yes"
        console.log(req.session)
        //console.log(post)
        response.render('book-info',{
            reviews:reviews,
            book:book,
            id: id
        });
    })
    .catch((error, reviews) => { 
        //if there are no reviews
        id = "no"
        response.render('book-info',{
            reviews:reviews,
            id: id
        });
    })
}
