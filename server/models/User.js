const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String,
    },
    email: String,
    password: String,
    checkout: [{
        name : String, 
        description : String,
        price : Number, 
        count : Number
    }],  
})

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;