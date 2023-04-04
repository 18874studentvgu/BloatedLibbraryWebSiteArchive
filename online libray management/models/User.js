const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        Required: true,
        Unique: true
    },
    iconLink: {
        type: String,
        default: "" /*link to defaut profile picture here*/
    },
    email: {
        type: String,
        required: true,
        Unique: true
    },
    passHash: {
        type: String,
        Required: true,
        Unique: true
    },
    dateCreated: {
        type: Date,
    },
    dateLastActive: {
        type: Date,
        Required: true
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
            Required: true
        },
        bookID: {
            type: String,
            Required: true
        },
        borrowID: {
            type: String,
            Required: true
        },
        dueDate: {
            type: Date,
            Required: true
        }
    }]
},
{ timestamps: true});
const User = mongoose.model('User',UserSchema);
module.exports = User;