const route = require('express').Router();
const AlbumController = require('../controllers/c_album');

route.post('/', AlbumController.create);
route.get('/', AlbumController.findAll);

module.exports = route;