const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
         unique: true
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
    permissions: {
        makeAndModifyAccounts: { type: Boolean, default: false },
        makeAndModifyAdminAccounts: { type: Boolean, default: false },
        addAndEditBooks: { type: Boolean, default: false },
        trackBooks: { type: Boolean, default: false },
        trackBooks: { type: Boolean, default: false },
        removeReviews: { type: Boolean, default: false },
    }
},
{ timestamps: true});
const Admin = mongoose.model('Admin',AdminSchema);
module.exports = Admin;
