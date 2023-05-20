const WishList = require('../models/WishList')
const Book = require('../models/Book')
const Book1 = require('../models/Book')
const { promises } = require('nodemailer/lib/xoauth2')
var mongoose = require('mongoose');

module.exports = (req, response) => {
        
        const id = req.session.userId;
        var objectId = new mongoose.Types.ObjectId(id);
               console.log(id)
               mongoose.set('debug',true)
               Promise.all ([ Book.find({}).sort({ rating: -1 }).limit(8), WishList.find({userID: objectId.toString()}), Book1.find().limit(1)])
                .then (([book, wishlist, book1]) => {                        
                //        console.log(wishlist)
                //        console.log(book1)
                if (book.length != 0 && book1.length!= 0){
                       if(wishlist.length != 0) {
                                //if have wishlist and
                                idk = "yes"
                                let a = wishlist[0].books;
                                console.log(a[0])
 
                                console.log("u have it ye...")
                                response.render('index', 
                                {
                                        
                                        wishlists: wishlist,
                                        idk: idk,
                                        book: book,
                                        a: a,
                                        book1: book1
                                        
                                })  
                        } else {
                                console.log("idk")
                                idk = "no"
                                response.render('index', 
                                {
                                        wishlists: wishlist,
                                        idk: idk,
                                        book: book,
                                        book1: book1
                                })  
                        }
                } else {

                        idk = "idk"
                        console.log("u don't have book")
                        response.render('index', 
                        {
                                
                                wishlists: wishlist,
                                idk: idk,
                                book: book,
                                book1: book1
                                
                        })  
                }
                })
              .catch((error, book, wishlist)=> {
                //if there is no book or wishlist
                console.log("can't find book bro")        
                idk = "no"
                        response.render('index',
                        {
                                idk: idk,
                                book: book
                                
                        }
                         )  
              })
                
}

