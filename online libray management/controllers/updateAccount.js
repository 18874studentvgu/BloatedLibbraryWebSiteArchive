const User = require('../models/User')
module.exports = (req, res) => {
    const username = user1;
    console.log(username);
    User.findOne({username: username})
    .then((user)=>{
        
        user.updateOne(req.body)
            
            .then((update) => {
                console.log(update);
                user1 = req.body.username;
                res.send({
                    text:"sucess"
                 });
            })
    })
    .catch((error,user) =>{
        console.log(error,user)
    })
    
}
