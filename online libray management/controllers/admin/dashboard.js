const Users = require("../../models/User.js");
const Books = require("../../models/Book.js");

var mysort = { updatedAt: -1 };
module.exports = (request, response) => {
    Promise.all([
        Users.find({}).sort(mysort), 
        Books.find({}).sort(mysort)])
    .then ( ([usersDoc, booksDoc]) => {
        var totalBorrowed = 0;
        for (var i = 0; i < usersDoc.length; i++)
        {
            totalBorrowed += usersDoc[i].booksBorrowing.length;
        }
        response.render('adminDashboard', { 
            usersList: usersDoc,
            booksList: booksDoc, 
            totalBorrowed
        });
        console.log(request.session);
    })
    .catch ( (error) => {
        console.log(error);
    })
}
