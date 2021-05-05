const route = require('express').Router();
const ArtistController = require('../controllers/c_artist');

route.post('/', ArtistController.create);
route.get('/', ArtistController.findAll);
route.get('/:id', ArtistController.findOne);

module.exports = route;