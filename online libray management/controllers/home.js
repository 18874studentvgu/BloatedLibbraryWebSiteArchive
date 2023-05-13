const WishList = require('../models/WishList')
const Book = require('../models/Book')
const { promises } = require('nodemailer/lib/xoauth2')
//var mongoose = require('mongoose');

module.exports = (req, response) => {
        
        
               console.log(loggedIn)
               Promise.all ([ Book.find({}), WishList.find({})])
                .then (([book, wishlist]) => {
                       console.log(wishlist)
                       console.log(book)
                                
                       if(wishlist.length != 0) {
                                idk = "yes"
                                console.log("u have it ye...")
                                response.render('index', 
                                {
                                        
                                        wishlists: wishlist,
                                        idk: idk,
                                        book: book
                                        
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
                       
                       

                //         var idk1 = "yes";
                //         const id = req.session.userId;
                //        //var objectId = new mongoose.Types.ObjectId(id);
                //        console.log(WishList.userID)
                //        console.log(objectId)
                //         WishList.find({userID: loggedIn})
                //         .then((wishlist) => {
                //                 console("whhhhhh")
                        

                //                         if (wishlist) {
                //                                 console.log("huh")
                //                                 var idk = "yes"
                //                                 response.render('index', {
                //                                         wishlists: wishlist,
                //                                         idk: idk,
                //                                         books: book
                //                                 })

                //                         } 
                //                         else {
                //                                 console.log("no")
                //                                 idk = "no"
                //                                 response.render('index', {
                //                                         wishlists: wishlist,
                //                                         idk: idk,
                //                                         books: book
                //                                 })  
                //                         }
        
                //         })
                //         .catch((error, wishlist) => {
                //                 console.log("can't find the thing bro")
                //                 idk ="no"
                //                 //if there is now wishlist
                //                         response.render('index',
                //                         {
                //                                 wishlists: wishlist,
                //                                 idk: idk,
                //                                 books: book
                                                
                //                         }
                //                          )  
                //         })
                })
              .catch((error, book, wishlist)=> {
                //if there is no book
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
