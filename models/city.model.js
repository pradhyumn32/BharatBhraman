const mongoose = require('mongoose');
const { Schema } = mongoose;

const citySchema = new Schema({
    City: {type: String, required: true},
    City_desc: {type: String, required: true},
    Rating: Number,
    Best_time_to_visit: String
});

exports.City = mongoose.model('City', citySchema, 'cities');