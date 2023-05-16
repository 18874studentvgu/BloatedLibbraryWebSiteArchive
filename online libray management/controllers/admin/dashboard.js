const UsersAdmin = require("../../models/userAdmin.js");
const Books = require("../../models/Book.js");

var mysort = { updatedAt: -1 };
module.exports = (request, response) => {
    var query = 
    [
        users = UsersAdmin.find({}).sort(mysort),
        books = Books.find({}).sort(mysort),
    ];
    Promise.all(query)
    .then ( (query) => {
        response.render('adminDashboard', { usersList : query[0], booksList : query[1] });
        console.log(request.session);
    })
    .catch ( (error) => {
        console.log(error);
    })
}
