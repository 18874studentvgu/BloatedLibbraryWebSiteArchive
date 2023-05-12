const BooksAdmin = require("../../models/bookAdmin.js");

module.exports = (req,res) => 
{
    BooksAdmin.findByIdAndDelete(req.params.id)
    .then ( (book) => {
        res.redirect("/adminBooksList")
    })
    .catch ( (error) => {
        console.log(error);
    })
}