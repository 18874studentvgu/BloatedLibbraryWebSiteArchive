const BorrowRecords = require("../models/BorrowRecord");

module.exports = (req, response) => {
    BorrowRecords.find({userID : '6458776ef767fe588f962b0b'})
    .then( (borrowrecords) => {
        console.log(borrowrecords)
        response.render('bookcart', { borrowedList : borrowrecords })
    })
}