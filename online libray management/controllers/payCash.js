const PayCash = require("../models/BorrowRecord");

module.exports = (req, response) => {
    PayCash.findById(req.params.id)
    .then( (payCash) => {
        console.log(payCash)
        response.render('payCash', { payCash : payCash })
    })
}