const path = require('path');
module.exports = (request, response) => {
    response.render('booksList')
    // response.sendFile(path.resolve('../online libray management/public', 'admin-book-board.html'))
}
