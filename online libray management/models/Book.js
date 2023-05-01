const mongoose = require('mongoose');
// import './Review';

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    internationalNumber: { type: Number, required: true}, //IBSN for books and ISSN for mangazines
    author: [ {type: String, required: true }],
    synopsis: String,
    copiesAvailable: {type: Number, min: [0,'Availables copies cannot be negative ({VALUE})!']},
    PDFPreviewLink: String,
    pagePerviewLink:[{page: Number, link: String}],

    totalRating:{
        recommended: {type: Number, default: 0},
        notRecommended: {type: Number, default: 0}
    },
    reviewPreview: [{
        // review: {type: mongoose.Schema.Types.ObjectId, ref: 'Review'},
        // user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        // rating: {
        //     type: String,
        //     default: '',
        //     enum: ['Recommended', 'Not Recommended','','._.']
        // },
        // title: String,
        // body: String,
        // dayCreated: Date,
        // dayModified: Date,
        type: String,
        // type: ReviewSchema,
        // default: {}
    }]

},
{ timestamps: true});

const Book = mongoose.model('Book',BookSchema);
module.exports = Book;
