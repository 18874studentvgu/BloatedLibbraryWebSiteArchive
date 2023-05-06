const mongoose = require('mongoose');

const WishListSchema = new mongoose.Schema({
    userID: {
        type: String,
        //required: true,
        unique: true //should each user only have 1 wish list? 
    },
    books: [{
        bookName: String,
        Author: [String],
        bookID: {
            type: String,
           // required: true,
            unique: true
        },
    }]
},
{ timestamps: true});
const WishList = mongoose.model('WishList',WishListSchema);
module.exports = WishList;