const Users = require("../../models/User.js");

module.exports = (req,res) => 
{
    console.log(req.body)
    Users.create(req.body)
    .then ( (user) => {
        console.log(user);
        res.redirect("/adminUsersList")
    })
    .catch ( (error) => {
        console.log(error);
    })
}
