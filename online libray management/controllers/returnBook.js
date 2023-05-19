const Borrow = require('../models/BorrowRecord')
var mongoose = require('mongoose');
module.exports=(req,res) =>{
    var id = req.body.ID
    console.log(id)
    var objectId = new mongoose.Types.ObjectId(id);
    var user = loggedIn
    var userId = new mongoose.Types.ObjectId(user);
    Promise.all
    ([
        Borrow.findOneAndUpdate({bookID : objectId .toString(), userID: userId.toString() }, {hasReturned: true}),
    ])
    .then(()=>{
        console.log("delete")
        res.redirect('/bookcart')
        
    })
}