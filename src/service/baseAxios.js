require("dotenv").config();
const axios = require('axios');


const tchedelivery = axios.create({
    baseURL: process.env.TCHE_URL
});

const googlemaps = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/"
});

module.exports = {
   tchedelivery,
   googlemaps,
}