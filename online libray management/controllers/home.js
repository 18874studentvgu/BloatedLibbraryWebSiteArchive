const WishList = require('../models/WishList')
var mongoose = require('mongoose');

module.exports = (req, response) => {
        console.log(req.session)
        const id = req.session.userId;
        var objectId = new mongoose.Types.ObjectId(id);
                console.log(objectId)
                WishList.findOne({userID: objectId.toString()})
                .then((wishlist) => {
                      
                        
                        if (id) {
                                if (wishlist) {
                                        var idk = "yes"
                                        console.log(wishlist)
                                        response.render('index', {
                                                wishlists: wishlist,
                                                idk: idk,
                                        })
                                } else {
                                        idk = "no"
                                        console.log(wishlist)
                                        response.render('index', {
                                                wishlists: wishlist,
                                                idk: idk,
                                        })  
                                }

                        } else {

                                idk = "no"
                                response.render('index',
                                        {
                                                wishlists: wishlist,
                                                idk: idk
                                        }
                                )
                        }
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
