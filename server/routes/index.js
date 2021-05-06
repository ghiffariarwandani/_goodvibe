const route = require('express').Router();

const artisRoute = require('./r_artist');
const albumRoute = require('./r_album');
const merchRoute = require('./r_merch');

route.use('/artist', artisRoute);
route.use('/album', albumRoute);
route.use('/merch', merchRoute);

module.exports = route;