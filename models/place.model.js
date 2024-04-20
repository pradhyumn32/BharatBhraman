const mongoose = require('mongoose');
const { Schema } = mongoose;

const citySchema = new Schema({
    City: {type: String, required: true},
    Place: {type: String, required: true},
    Place_desc: {type: String, required: true},
    Rating: Number
});

exports.Place = mongoose.model('Place', citySchema, 'places');