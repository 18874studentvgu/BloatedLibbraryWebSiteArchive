const Borrow = require("../models/BorrowRecord");
const Users = require("../models/User.js");
const Borrow1 = require("../models/BorrowRecord");
const Book = require('../models/Book')
var mongoose = require('mongoose');
const sendEmail=require('../controllers/sendEmail')
module.exports = (req, res, next) => {
    Promise.all
    ([
        Users.find(), 
        Borrow.find(),
    ])
        .then(([user, borrow]) => {
            //caculate the date
           
                var dif = []
                var due = []
                for (var i = 0; i < borrow.length; i++) {
                    var now = new Date().getTime();
                    // dif[i] = (Math.abs(now - borrow[i].createdAt)) / (1000 * 3600 * 24);
                    // due[i] = (Math.abs(borrow[i].dueDate - borrow[i].createdAt)) / (1000 * 3600 * 24);
                    dif[i] = 0;
                    due[i] = 0;
                    console.log(dif[i])
                    console.log(due[i])
                    
                    if (dif[i] != due[i] &&  due[i]- dif[i] <= 1 ){
                        console.log("one or less than one day left")
                        for (var k = 0; k < user.length; k++) {
                            if (user[k]._id.equals(borrow[i].userID) ){
                                console.log("help")
                                sendEmail(user[k].email,
                                'Password reset link', 'the book is almost due bro'
                                )
                            }
                            
                        }
                    } else if (dif[i] == due[i] ){
                        console.log("time out")
                        for (var k = 0; k < user.length; k++) {
                            if (user[k]._id.equals(borrow[i].userID) ){
                                console.log("help")
                                borrow[i].hasReturned = false;
                                borrow[i].status = "returned";
                                borrow[i].save()
                            }
                        }
                    }
                }
         
            next(); 
            // //var date1 = date.toString()  
            // // Set the date we're counting down to
            // var countDownDate = new Date(date).getTime();

            // // Update the count down every 1 second
            

            //     // Get today's date and time
            //     var now = new Date().getTime();

            //     // Find the distance between now and the count down date
            //     var distance = countDownDate - now;

            //     // Time calculations for days, hours, minutes and seconds
            //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            //     // Output the result in an element with id="demo"
            //     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            //         + minutes + "m " + seconds + "s ";

            //     // If the count down is over, write some text 
            //     if (distance < 0) {
            //         clearInterval(x);
            //         document.getElementById("demo").innerHTML = "EXPIRED";
            //     }
        


        })
}