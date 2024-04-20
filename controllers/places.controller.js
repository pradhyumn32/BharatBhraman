const placeModel = require('../models/place.model');
const cityModel = require('../models/city.model');

const Place = placeModel.Place;
const City = cityModel.City;

exports.getCities = async (req, res) => {
    try{
        const cities = await City.find();   // What frontend want
        res.status(200).json(cities);
    }catch(error){
        res.status(404).json({
            error: error,
            message: "Bad request"
        })
    }
}
exports.getCityPlaces = async (req, res) => {
    try{
        const city = req.params.city;
        const places = await Place.find({City:city});
        res.status(200).json(places);
    }catch(error){
        res.status(404).json({
            error: error,
            message: "Bad request"
        })
    }
}