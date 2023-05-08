const Mongo = require('mongoose')
const Schema = Mongo.Schema;
const userAdminSchema = new Schema ({
    fullName: String,
    userName: String,
    Age: Number,
    Email: String,
    Created: {
        type: Date,
        default: new Date()
    },
    lastActive: {
        type: Date,
        default: new Date()
    },
    borrowedBook: Number
});

const UsersAdmin = Mongo.model('UsersAdmin',userAdminSchema);
module.exports = UsersAdmin