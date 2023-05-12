const UsersAdmin = require("../../models/userAdmin.js")
module.exports = (request, response) => {
    UsersAdmin.findById(request.params.id)
    .then ( (detailedUser) => {
        response.render('adminWarnDeleteUser', { detailedUser });
    })
    .catch ( (error) => {
        console.log(error);
    })
}