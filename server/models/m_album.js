const { Schema, model, ObjectId } = require('mongoose');;

const AlbumSchema = new Schema({
  name: { type: String },
  cover: { type: String },
  trackList: { type: [String] },
  quantity: { type: Number },
  price: { type: Number },
  year: { type: Number },
  genre: { type: String },
  artistId: { type: ObjectId, ref: 'Artist' }
}, {
  timestamps: true
});

const Album = model('Album', AlbumSchema);

module.exports = Album;

