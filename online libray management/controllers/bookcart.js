const BorrowRecords = require("../models/BorrowRecord");
const Users = require("../models/User.js");
const WishList = require('../models/WishList')
var mongoose = require('mongoose');
module.exports = (req, response) => {
    const id = req.session.userId;
    var objectId = new mongoose.Types.ObjectId(id);
    Promise.all
    ([
        Users.findById(req.session.userId), 
        BorrowRecords.find({userID : req.session.userId}),
        WishList.find({userID: objectId.toString()})
    ])
    .then( ([user, record, wishlist]) => {
        idk = "yes"
        console.log("have it")
        console.log(user)
        console.log(record)
        console.log(wishlist[0].books)
        a = wishlist[0].books
        response.render('bookcart', {
             borrowedList : record, 
             user: user,
             wishlist: wishlist,
             a: a
            })
    })

    .catch ((error, user, record) => {
        idk = "no"
        console.log("don't have")
        response.render('bookcart', {
            borrowedList : record, 
            user: user,
            idk : idk
           })
    })
}