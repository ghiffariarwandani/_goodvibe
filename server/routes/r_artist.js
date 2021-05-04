const route = require('express').Router();
const ArtistController = require('../controllers/c_artist');

route.post('/', ArtistController.create);

module.exports = route;