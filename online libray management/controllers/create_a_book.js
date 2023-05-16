const mongoose = require('mongoose');
const path = require('path');
const BorrowRecordSchema = require("../models/BorrowRecord.js");

mongoose.connect('mongodb://0.0.0.0:27017/web', {useNewUrlParser: true}) 

BorrowRecordSchema.create(
    {
        userID: '6458776ef767fe588f962b0b',
        bookID: '64627016b3bbb50adafe8dec',
        dueDate: Date("2022-10-9"),
        returnDate: Date("2022-12-9"),
        paymentAmount: 9,
        hasReturned: false
    }
    ).then((record) => {console.log(record)})
