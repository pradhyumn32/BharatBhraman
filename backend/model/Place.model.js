const mongoose = require('mongoose');
const { Schema } = mongoose;

// Place Schema:
const PlaceSchema = new Schema({
    City: {type: String, required: true},
    Place: {type: String, required: true},
    Place_desc: {type: String, required: true},
    Ratings: Number,
    Distance: Number,
});

// Place Model:
exports.Places = mongoose.model('Places', PlaceSchema, 'Places');