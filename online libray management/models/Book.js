const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    internationalNumber: { type: Number, required: true}, //IBSN for books and ISSN for mangazines
    author: [ {type: String, required: true }],
    synopsis: String,
    copiesAvailable: {type: Number, min: [0,'Availables copies cannot be negative ({VALUE})!']},
    PDFPreviewLink: String,
    totalRating:{
        recommended: Number,
        notRecommended: Number
    },
    reviewPreview: [{
        reviewID: String,
        userID: String,
        rating: {
            type: String,
            default: '',
            enum: ['Recommended', 'Not Recommended','','._.']
        },
        title: String,
        body: String,
        dayCreated: Date,
        dayModified: Date,
    }]

},
{ timestamps: true});

const Book = mongoose.model('Book',BookSchema);
module.exports = Book;
