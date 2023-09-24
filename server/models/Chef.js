const mongoose = require('mongoose');

const ChefSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,  
    imagePath: String  
});

const ChefModel = mongoose.model('chef', ChefSchema);
module.exports = ChefModel;