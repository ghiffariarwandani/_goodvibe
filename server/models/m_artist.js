const { Schema, model } = require('mongoose');

const ArtistSchema = new Schema({
  name: { type: String }
});

const Artist = model('Artist', ArtistSchema);

module.exports = Artist;