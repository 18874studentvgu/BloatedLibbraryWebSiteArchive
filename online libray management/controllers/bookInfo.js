const Review = require("../models/Review");
const Book = require("../models/Book")
module.exports = (req, response) => {
    id = req.params.id
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId, proceed with `findById` call.
    Promise.all ([ Book.findById(req.params.id), Review.find({})]) 
    .then(([book, reviews])=>{
        //this is for when there are reviews
        var id = "yes"
        console.log("have reviews")
        //console.log(post)
        response.render('book-info',{
            reviews:reviews,
            book:book,
            id: id
        });
    })
    .catch((error, book ,reviews) => { 
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
