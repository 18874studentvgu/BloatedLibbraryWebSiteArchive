const Review = require("../models/Review");

module.exports = (req, response) => {
    Review.find({})
    .then((reviews)=>{
        console.log(req.session)
        //console.log(post)
        response.render('book-info',{
            reviews:reviews
        });
    })
    .catch((error, post) => { 
        console.log(error, post)
    })
}
