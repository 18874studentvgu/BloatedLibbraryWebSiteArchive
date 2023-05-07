const WishList = require('../models/WishList')
var mongoose = require('mongoose');

module.exports = (req, response) => {
        console.log(req.session)
        const id = req.session.userId ;
        var objectId = mongoose.Types.ObjectId(id);
        WishList.findOne({userID: objectId})
        .then((wishlist) => {
                console.log(wishlist)
                response.render('index', {
                        wishlists: wishlist
                })
        })
        

        
}
