const mongoose = require('mongoose');
const path = require('path');
const UsersAdmin = require("../models/userAdmin.js");

mongoose.connect('mongodb://0.0.0.0:27017/web', {useNewUrlParser: true}) 

// for (var i = 0; i < 24; i++ )
// {
    UsersAdmin.create({
    fullName: "Nicolò Zaniolo",
    userName: "catOverlord",
    Age: 23,
    Email: "anhkoanmung@gmail.com",
    // borrowedBook: 3
})
.then ( (users) => {
        console.log(users);
    })
    .catch ( (error) => {
        console.log(error);
    })
// }
