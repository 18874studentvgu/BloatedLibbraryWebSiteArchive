const Borrow = require('../models/BorrowRecord')
module.exports=(req,res) =>{
    Borrow.create(req.body)
    .then(()=>{
        //res.redirect('/bookcart')
        res.send({
           text:"sucessfully send"
        });
    })
}
