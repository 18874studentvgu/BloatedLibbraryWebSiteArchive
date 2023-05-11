const BooksAdmin = require("../../models/bookAdmin.js");

module.exports = (req,res) => 
{
    BooksAdmin.findByIdAndUpdate(req.params.id, req.body)
    .then ( (book) => {
        res.redirect("/adminBooksList")
    })
    .catch ( (error) => {
        console.log(error);
    })
}
