const PayOnline = require("../models/BorrowRecord");

module.exports = (req, response) => {
    PayOnline.findById(req.params.id)
    .then( (payOnline) => {
        console.log(payOnline)
        response.render('payOnline', { payOnline : payOnline })
    })
}