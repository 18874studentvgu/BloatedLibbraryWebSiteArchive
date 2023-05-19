const BorrowRecords = require("../models/BorrowRecord");
const Users = require("../models/User.js");
const WishList = require('../models/WishList')
const Book = require('../models/Book')
var mongoose = require('mongoose');
module.exports = (req, response) => {
    const id = req.session.userId;
    var objectId = new mongoose.Types.ObjectId(id);
    Promise.all
    ([
        Users.findById(req.session.userId), 
        BorrowRecords.find({userID : objectId.toString()}),
        WishList.find({userID: objectId.toString()}),
        Book.find(),
    ])
    .then( ([user, record, wishlist, book]) => {
      
        console.log("have it")
        // console.log(user)
         //console.log(record[0].bookID)
        // console.log(wishlist[0].books)
        if (wishlist[0] != null) {
            idk = "yes"
        a = wishlist[0].books
        response.render('bookcart', {
             borrowedList : record, 
             user: user,
             wishlist: wishlist,
             a: a,
             book: book,
             idk: idk
            })

        } else {
            idk = "no"
            response.render('bookcart', {
                borrowedList : record, 
                user: user,
                wishlist: wishlist,
                book: book,
                idk: idk
               })
        }

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