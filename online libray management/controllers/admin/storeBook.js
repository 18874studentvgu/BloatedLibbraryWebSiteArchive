const BooksAdmin = require("../../models/bookAdmin.js");

module.exports = (req,res) => 
{
    BooksAdmin.create(req.body)
    .then ( (book) => {
        console.log(book);
        res.redirect("/adminBooksList")
    })
    .catch ( (error) => {
        console.log(error);
    })}
