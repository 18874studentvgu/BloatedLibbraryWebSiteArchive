const BorrowedBookSchema = require('../models/BorrowedBook')

module.exports = (req, response) => {
    response.render('payCash')
}