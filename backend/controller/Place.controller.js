const PlaceModel = require("../model/Place.model");
const CityModel = require("../model/City.model");

const Place = PlaceModel.Places;
const City = CityModel.Cities;

// Will return JSON of all city names for dropdown menu in frontend
exports.getCities = async (req, res) => {
    try{
        const cities = await City.find();
        res.status(200).json(cities);
    } catch (error) {
        res.status(404).json(error);
    }
}

exports.getCityPlaces = async (req, res) => {
    const city = req.params.city;
    const places = await Place.find({ City: city });
    if (places[0]==undefined) {
        res.status(404).json({
            Error: "City not found",
            Message: "Enter a valid city",
            status: 404
        })
    }
    else
    {
        res.status(200).json(places);
    }
};