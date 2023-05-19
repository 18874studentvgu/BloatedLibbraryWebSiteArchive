const User = require('../models/User')
const Review = require('../models/Review')
module.exports = (req, response) => {
    const username = user1;
    console.log(username);
    Promise.all([
        User.findById(req.session.userId),
        Review.find({userID: req.session.userId})
    ])
    .then(([user,reviews])=>{
        console.log("hi")
        console.log(user)
        response.render('userprofile', {
            user,
            reviews
        })
    })
    .catch((error,user) =>{
        console.log(error,user)
    })
}
