const route = require('express').Router();
const AlbumController = require('../controllers/c_album');

route.use('/', AlbumController.create)

module.exports = route;