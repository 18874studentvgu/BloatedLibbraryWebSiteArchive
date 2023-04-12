const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
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
    password: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
    },
    dateLastActive: {
        type: Date,
        //required: true
    },
    userInfo: {
        lastname: String,
        firstname: String,
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

UserSchema.pre('save', function (next) {
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})

const User = mongoose.model('User',UserSchema);
module.exports = User;
