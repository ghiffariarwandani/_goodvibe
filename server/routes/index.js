const route = require('express').Router();

const productRoute = require('./product');

route.use('/product', productRoute);


module.exports = route;