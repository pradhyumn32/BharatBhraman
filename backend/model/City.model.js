const mongoose = require('mongoose');
const { Schema } = mongoose;

// Place Schema:
const CitySchema = new Schema({
    City: {type: String, required: true},
    Ratings: Number,
    Ideal_duration: String,
    Best_time_to_visit: {type: String, required: true},
    City_desc: {type: String, required: true},
});

// Place Model:
exports.Cities = mongoose.model('Cities', CitySchema, 'Cities');