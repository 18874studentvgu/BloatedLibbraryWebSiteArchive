const mongoose = require('mongoose');

const BorrowedBookSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    bookID: {
        type: String,
        required: true
    },
    leaseDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
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
