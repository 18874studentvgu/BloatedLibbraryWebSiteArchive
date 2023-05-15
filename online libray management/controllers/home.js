const WishList = require('../models/WishList')
const Book = require('../models/Book')
const { promises } = require('nodemailer/lib/xoauth2')
var mongoose = require('mongoose');

module.exports = (req, response) => {
        
        const id = req.session.userId;
        var objectId = new mongoose.Types.ObjectId(id);
               console.log(id)
               mongoose.set('debug',true)
               Promise.all ([ Book.find({}), WishList.find({userID: objectId.toString()})])
                .then (([book, wishlist]) => {
                        
                       console.log(wishlist)
                       console.log(book)

                                
                       if(wishlist.length != 0 ) {
                                idk = "yes"
                                let a = wishlist[0].books;
                                console.log(a[0].bookID)
 
                                console.log("u have it ye...")
                                response.render('index', 
                                {
                                        
                                        wishlists: wishlist,
                                        idk: idk,
                                        book: book,
                                        a: a
                                        
                                })  
                        } else {
                                console.log("idk")
                                idk = "no"
                                response.render('index', 
                                {
                                        wishlists: wishlist,
                                        idk: idk,
                                        book: book
                                        
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

