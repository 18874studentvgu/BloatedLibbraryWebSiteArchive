const BooksAdmin = require("../../models/bookAdmin.js")
module.exports = (request, response) => {
    BooksAdmin.find({})
    .then ( (books) => {
        response.render('adminBooksList', { booksList : books });
        // console.log(users);
    })
    .catch ( (error) => {
        console.log(error);
    })
}
