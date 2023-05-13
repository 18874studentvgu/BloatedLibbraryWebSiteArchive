/** Use to keeping track of individual copies of a given book */

const mongoose = require('mongoose');

const BookCopieSchema = new mongoose.Schema({
    bookID: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    outOfCommission: {type: Boolean, default:false}
    
},
{ timestamps: true});


const BookCopie = mongoose.model('BookCopie',BookCopieSchema);
module.exports = BookCopie;