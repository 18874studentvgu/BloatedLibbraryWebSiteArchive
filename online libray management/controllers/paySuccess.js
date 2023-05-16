const PaySuccess = require("../models/BorrowRecord");

module.exports = (req, response) => {
    PaySuccess.findById(req.params.id)
    .then( (paySuccess) => {
        console.log(paySuccess)
        response.render('paySuccess', { paySuccess : paySuccess })
    })
}