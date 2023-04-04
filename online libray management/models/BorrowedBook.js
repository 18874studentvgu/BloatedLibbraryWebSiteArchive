const mongoose = require('mongoose');

const BorrowedBookSchema = new mongoose.Schema({
    userID: {
        type: String,
        Required: true
    },
    bookID: {
        type: String,
        Required: true
    },
    leaseDate: {
        type: Date,
        Required: true
    },
    dueDate: {
        type: Date,
        Required: true
    },
    paymentAmount: {
        type: Number,
        min: [0,'Payment cannot be <0, got {VALUE}.']
    },
    hasReturned: Boolean
},
{ timestamps: true});
const BorrowedBook = mongoose.model('BorrowedBook',BorrowedBookSchema);
module.exports = BorrowedBook;