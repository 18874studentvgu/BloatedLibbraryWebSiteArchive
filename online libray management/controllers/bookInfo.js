const Review = require("../models/Review");

module.exports = (req, response) => {
    Review.find({})
    .then((reviews)=>{
        var id = "yes"
        console.log(req.session)
        //console.log(post)
        response.render('book-info',{
            reviews:reviews,
            id: id
        });
    })
    .catch((error, reviews) => { 
        id = "no"
        response.render('book-info',{
            reviews:reviews,
            id: id
        });
    })
}
