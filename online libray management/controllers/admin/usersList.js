const UsersAdmin = require("../../models/userAdmin.js")
module.exports = (request, response) => {
    UsersAdmin.find({})
    .then ( (users) => {
        response.render('adminUsersList', { usersList : users });
    })
    .catch ( (error) => {
        console.log(error);
    })
}
