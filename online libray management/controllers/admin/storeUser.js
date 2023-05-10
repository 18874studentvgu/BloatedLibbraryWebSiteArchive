const UsersAdmin = require("../../models/userAdmin.js");

module.exports = (req,res) => 
{
    UsersAdmin.create(req.body)
    .then ( (user) => {
        console.log(user);
        res.redirect("/adminUsersList")
    })
    .catch ( (error) => {
        console.log(error);
    })}
