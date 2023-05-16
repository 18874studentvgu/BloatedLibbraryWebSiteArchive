const Books = require("../../models/Book.js");

module.exports = (req,res) => 
{
    req.body.author = req.body.author.split(',');
    console.log(req.body)
    Books.create(req.body)
    .then ( (book) => {
        console.log(book);
        res.redirect("/adminBooksList")
    })
    .catch ( (error) => {
        console.log(error);
    })
}
