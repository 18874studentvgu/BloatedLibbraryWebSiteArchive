const Review = require('../models/Review')
module.exports=(req,res) =>{
    Review.create(req.body)
    .then(()=>{
        res.redirect('/book-info')
    })
}