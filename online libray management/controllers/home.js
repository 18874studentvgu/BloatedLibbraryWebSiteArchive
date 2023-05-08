const WishList = require('../models/WishList')
var mongoose = require('mongoose');

module.exports = (req, response) => {
        console.log(req.session)
        const id = req.session.userId ;
        var objectId = new mongoose.Types.ObjectId(id);
        console.log(objectId)
        console.log(loggedIn);
        WishList.findOne({userID: objectId}).exec()
        // await WishList.findOne({userID: id})
        .then((wishlist) => {
                console.log(wishlist)
                response.render('index', {
                        wishlists: wishlist
                })
        })
        
        WishList.findOne({})
        .then((wishlist) => {
                console.log("I AM THE STROM THAT IS APPROACHING")
                console.log(wishlist)
        })

        
}
