const path = require('path');
module.exports = (request, response) => {
    response.render('adminUsersList')
    // response.sendFile(path.resolve('../online libray management/public', 'admin-user-board.html'))
}
