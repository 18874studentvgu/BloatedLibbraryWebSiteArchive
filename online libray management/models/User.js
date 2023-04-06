const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    iconLink: {
        type: String,
        default: "" /*link to defaut profile picture here*/
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passHash: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
    },
    dateLastActive: {
        type: Date,
        required: true
    },
    userInfo: {
        lName: String,
        fName: String,
        age: {
            type: Number,
            min: [0, 'Age cannot be negative, got {VALUE}!']
        },
        userDescription: String
    },
    booksBorrowing: [{
        bookName: {
            type: String,
            required: true
        },
        bookID: {
            type: String,
            required: true
        },
        borrowID: {
            type: String,
            required: true
        },
        dueDate: {
            type: Date,
            required: true
        }
    }]
},
{ timestamps: true});
const User = mongoose.model('User',UserSchema);
module.exports = User;
