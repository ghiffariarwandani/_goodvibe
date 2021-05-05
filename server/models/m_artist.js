const { Schema, model } = require('mongoose');

const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: [true, 'username already use']
  }
});

const Artist = model('Artist', ArtistSchema);

module.exports = Artist;