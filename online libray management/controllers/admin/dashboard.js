const path = require('path');
module.exports = (request, response) => {
    response.render('dashboard')
    // response.sendFile(path.resolve('../online libray management/public', 'admin.html'))
}
