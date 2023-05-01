const path = require('path');
module.exports = (request, response) => {
    response.render('usersList')
    // response.sendFile(path.resolve('../online libray management/public', 'admin-user-board.html'))
}
