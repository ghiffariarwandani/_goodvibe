const route = require('express').Router();
const MerchController = require('../controllers/c_merch');

route.post('/', MerchController.create);
route.get('/', MerchController.findAll);
route.get('/:id', MerchController.findOne);
route.patch('/:id', MerchController.update);

module.exports = route;