const UsersAdmin = require("../../models/userAdmin.js");

module.exports = (req,res) => 
{
    UsersAdmin.findByIdAndDelete(req.params.id)
    .then ( (user) => {
        res.redirect("/adminUsersList")
    })
    .catch ( (error) => {
        console.log(error);
    })
}