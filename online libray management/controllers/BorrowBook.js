const Borrow = require('../models/BorrowRecord')
module.exports=(req,res) =>{
    Borrow.create(req.body)
    .then(()=>{
        res.send({
           text:"sucessfully send"
        });
    })
}
