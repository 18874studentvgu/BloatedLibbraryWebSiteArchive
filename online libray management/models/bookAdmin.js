const Mongo = require('mongoose')
const Schema = Mongo.Schema;
const bookAdminSchema = new Schema ({
    Title: String,
    Author: String,
    Category: String,
    publishedDate: String,
    uploadedDate: {
        type: Date,
        default: new Date()
    },
    Quantity: Number,
    Recommendation: Number
});

const BooksAdmin = Mongo.model('BooksAdmin',bookAdminSchema);
module.exports = BooksAdmin