const mongoose = require('mongoose');

const menuItemSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: Number,
});

module.exports = mongoose.model('MenuItem', menuItemSchema);