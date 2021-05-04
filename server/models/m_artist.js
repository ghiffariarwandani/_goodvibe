const { Schema, model } = require('mongoose');

const ArtistSchema = new Schema({
  name: { type: String }
});

const Artis = model('Artis', ArtistSchema);

module.exports = Artis;
