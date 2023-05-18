const BorrowRecords = require("../models/BorrowRecord");
const Users = require("../models/User.js");

module.exports = (req, response) => {
    Promise.all
    ([
        Users.find({userID : req.session.userId}), 
        BorrowRecords.find({userID : req.session.userId})
    ])
    .then( ([user, record]) => {
        console.log(record)
        response.render('bookcart', {
             borrowedList : record, 
             user
            })
    })
}