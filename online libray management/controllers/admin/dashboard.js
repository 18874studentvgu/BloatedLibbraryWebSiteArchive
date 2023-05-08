const UsersAdmin = require("../../models/userAdmin.js");
const BooksAdmin = require("../../models/bookAdmin.js");
module.exports = (request, response) => {
    var query = 
    [
        users = UsersAdmin.find({}),
        books = BooksAdmin.find({}),
    ];
    Promise.all(query)
    .then ( (query) => {
        response.render('adminDashboard', { usersList : query[0], booksList : query[1]});
    })
    .catch ( (error) => {
        console.log(error);
    })
}
