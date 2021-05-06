const { Schema, ObjectId, model } = require('mongoose');

const MerchSchema = new Schema({
  name: { type: String },
  quantity: { type: Number },
  type: { type: String },
  picture: [{ type: String }],
  artisId: { type: ObjectId, ref: 'Artist' },
}, {
  timestamps: true
});

const Merch = model('Merch', MerchSchema);

module.exports = Merch;