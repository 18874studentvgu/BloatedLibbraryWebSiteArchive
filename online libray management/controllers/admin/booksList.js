const path = require('path');
module.exports = (request, response) => {
    response.render('adminBooksList')
    // response.sendFile(path.resolve('../online libray management/public', 'admin-book-board.html'))
}
