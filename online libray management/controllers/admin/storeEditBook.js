const Books = require("../../models/Book.js");

module.exports = (req,res) => 
{
    req.body.author = req.body.author.split(',');
    Books.findByIdAndUpdate(req.params.id, req.body)
    .then ( (book) => {
        res.redirect("/adminBooksList")
    })
    .catch ( (error) => {
        console.log(error);
    })
}
