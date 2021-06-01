const mongoose = require('mongoose');

let user =new mongoose.Schema({
    firstName: String,     
    lastName: String,
    email: String,
    password: String
});


module.exports = user = mongoose.model('user',user);
