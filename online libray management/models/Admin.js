const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    userName: {
        type: String,
        Required: true,
        Unique: true
    },
    email: {
        type: String,
        Required: true,
        Unique: true
    },
    passHash: {
        type: String,
        Required: true,
        Unique: true
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