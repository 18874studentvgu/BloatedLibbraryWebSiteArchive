const WishList = require('../models/WishList')
var mongoose = require('mongoose');

module.exports = (req, response) => {
        console.log(req.session)
        const id = req.session.userId ;
        if(id){ 
                var objectId = new mongoose.Types.ObjectId(id);
                console.log(objectId)
                WishList.find({userID: objectId.toString()})
                .then((wishlist) => {
                        console.log(wishlist)
                        response.render('index', {
                                wishlists: wishlist
                        })
                })
                
        } else response.render('index');
       
        
}
