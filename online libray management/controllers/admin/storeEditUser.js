const UsersAdmin = require("../../models/userAdmin.js");

module.exports = (req,res) => 
{
    UsersAdmin.findByIdAndUpdate(req.params.id, req.body)
    .then ( (user) => {
        res.redirect("/adminUsersList")
    })
    .catch ( (error) => {
        console.log(error);
    })
}
