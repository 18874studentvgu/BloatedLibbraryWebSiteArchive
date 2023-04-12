
module.exports = (req, response) => {
        console.log(req.session)
        response.render('index')

        
}
