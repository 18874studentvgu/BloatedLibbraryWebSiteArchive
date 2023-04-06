const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    writtenBy: {
        userName: String,
        userID: {
            type: String,
            required: true,
        }
    },
    bookID: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        default: '',
        enum: ['Recommended', 'Not Recommended','','._.']
    },
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    removedAt: Date
},
{ timestamps: true});
const Review = mongoose.model('Review',ReviewSchema);
module.exports = Review;
