const BooksAdmin = require("../../models/bookAdmin.js")
module.exports = (request, response) => {
    BooksAdmin.findById(request.params.id)
    .then ( (detailedBook) => {
        response.render('adminEditBook', { detailedBook });
    })
    .catch ( (error) => {
        console.log(error);
    })
}