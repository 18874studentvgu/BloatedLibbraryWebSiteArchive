const BlogPost = require('../models/BlogPost.js')
module.exports = (req, response) => {
    BlogPost.find({})
    .then((post)=>{
        console.log(req.session)
        //console.log(post)
        response.render('index',{
            blogposts:post
        });
    })
    .catch((error, post) => { 
        console.log(error, post)
    })
}
