const WishList = require('../models/WishList')
module.exports=(req,res) =>{
    WishList.create(req.body)
    .then(()=>{
        res.send({
           text:"sucessfully send"
        });
    })
}
