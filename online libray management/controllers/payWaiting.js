const PayWaiting = require("../models/BorrowRecord");

module.exports = (req, response) => {
    PayWaiting.findById(req.params.id)
    .then( (payWaiting) => {
        console.log(payWaiting)
        response.render('payWaiting', { payWaiting : payWaiting })
    })
}