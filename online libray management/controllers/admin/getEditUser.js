const UsersAdmin = require("../../models/userAdmin.js")
module.exports = (request, response) => {
    UsersAdmin.findById(request.params.id)
    .then ( (detailedUser) => {
        response.render('adminEditUser', { detailedUser });
    })
    .catch ( (error) => {
        console.log(error);
    })
}