const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String    
});

const MenuModel = mongoose.model('menu', MenuSchema);
module.exports = MenuModel;