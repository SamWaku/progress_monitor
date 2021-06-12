const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
    skill: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);