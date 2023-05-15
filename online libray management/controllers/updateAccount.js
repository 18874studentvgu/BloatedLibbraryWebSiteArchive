const User = require('../models/User')
module.exports = (req, res) => {
    const username = user1;
    console.log(username);
    User.findOneAndUpdate({username: username}, req.body, {upsert: true})
    .then((user)=>{
                console.log(user);
                user1 = req.body.username;
                res.send({
                    text:"sucess"
                 });
           
    })
    .catch((error,user) =>{
        console.log(error,user)
    })
    
}
