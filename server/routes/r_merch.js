const route = require('express').Router();
const MerchController = require('../controllers/c_merch');

route.use('/', MerchController.create)

module.exports = route;