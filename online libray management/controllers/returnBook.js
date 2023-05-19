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
        Borrow.findOneAndDelete({bookID : objectId .toString(), userID: userId.toString() }),
    ])
    .then(()=>{
        console.log("delete")
        res.redirect('/bookcart')
        
    })
}