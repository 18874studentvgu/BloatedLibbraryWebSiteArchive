const WishList = require('../models/WishList')
var mongoose = require('mongoose');

module.exports = (req, response) => {
        console.log(req.session)
        const id = req.session.userId;
                var objectId = new mongoose.Types.ObjectId(id);
                console.log(objectId)
                WishList.find({userID: objectId.toString()})
                .then((wishlist) => {
                        idk ="yes"
                        console.log(wishlist)
                        response.render('index', {
                                wishlists: wishlist,
                                idk: idk
                        })
                })
                .catch((error, wishlist) => {
                        idk ="no"
                        response.render('index',
                        {
                                wishlists: wishlist,
                                idk: idk
                        }
                         )  
                })
                
}
