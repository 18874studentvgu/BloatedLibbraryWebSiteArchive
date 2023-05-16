const Books = require("../../models/Book.js");

module.exports = (req,res) => 
{
    Books.findByIdAndDelete(req.params.id)
    .then ( (book) => {
        res.redirect("/adminBooksList")
    })
    .catch ( (error) => {
        console.log(error);
    })
}