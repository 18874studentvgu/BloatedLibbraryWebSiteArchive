const mongoose = require('mongoose');
const User = require('./models/User');
const Admin = require('./models/Admin');
const Book = require('./models/Book');
const Review = require('./models/Review');
const WishList = require('./models/WishList');
const BorrowedBook = require('./models/BorrowedBook');

mongoose.connect('mongodb://127.0.0.1:27017/dabase',{ useNewUrlParser: true });

// User.create({
//     userName: "ss",
//     icon: '/uvu.png',
//     email: 'abc',
//     passHash: 'abv',
//     dateLastActive: new Date("2020-01-02"),
//     userInfo: {
//         lName: "S",
//         fName: "O",
//         age: 23,
//         userDescription: "Obema"
//     },
//     booksBorrowing: [{
//         bookName: "The Bolf Of Ball Street",
//         bookID: "Owo",
//         borrowID: "xyz",
//         dueDate: new Date("2029-01-02")
//     }]
// }) .then((result) => {
//     console.log("Yes")
// }) .catch((err) => {
//     console.log("uh oh" + err)
// });

// Admin.create({
//     userName: 'UwU',
//     email: 'a@gmayl.com',
//     passHash: 'ooooo',
//     permissions: {
//         makeAndModifyAccounts: true,
//         trackBooks: false,
//         removeReviews: true,
//     }
// }) .then((result) => {
//     console.log("Yes")
// }) .catch((err) => {
//     console.log("uh oh" + err)
// });
let bookid = new mongoose.Types.ObjectId;

Book.create({
    _id: bookid,
    title: '{ type: String, Required: true }',
    internationalNumber: 1234, //IBSN for books and ISSN for mangazines
    author: [ 'OwO'],
    synopsis: 'this is a thing',
    copiesAvailable: 2,
    PDFPreviewLink: 'String',
}) .then((result) => {
    console.log("Yes book has bean been")
}) .catch((err) => {
    console.log("uh oh" + err)
});



Review.create([{
    writtenBy: {
        userName: 'String',
        userID: 'qwertyui'
    },
    ofBook: bookid,
    rating: 'Recommended',
    title: 'Not enough bones',
    body: 'too meaty'
    },
   {
    writtenBy: {
        userName: 'String2',
        userID: 'qertyui'
    },
    ofBook: bookid,
    rating: 'Not Recommended',
    title: 'Just enough bones',
    body: 'Not too meaty'
}
]) .then((result) => {
    console.log("Yes")
}) .catch((err) => {
    console.log("uh oh" + err)
});
// WishList.create({
//     userID: 'qwertyuio',
//     books: [{
//         bookName: 'String',
//         Author: ['String','Lmao Johnson'],
//         bookID: 'John-Celery',
//     },
//     {
//         bookName: 'String2',
//         Author: ['String'],
//         bookID: 'John-Celooooery',
//     }]
// }) .then((result) => {
//     console.log("Yes")
// }) .catch((err) => {
//     console.log("uh oh" + err)
// });
// BorrowedBook.create({
//     userID: '12345',
//     bookID: '12345',
//     leaseDate: Date("2022-10-9"),
//     dueDate: Date("2022-12-9"),
//     paymentAmount: 9,
//     hasReturned: false
// }) .then((result) => {
//     console.log("Yes")
// }) .catch((err) => {
//     console.log("uh oh" + err)
// });
