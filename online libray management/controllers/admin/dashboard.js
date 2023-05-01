const path = require('path');
module.exports = (request, response) => {
    response.render('adminDashboard')
    // response.sendFile(path.resolve('../online libray management/public', 'admin.html'))
}
