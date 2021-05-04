const { Schema, ObjectId, model } = require('mongoose');

const MerchSchema = new Schema({
  name: { type: String },
  quantity: { type: Number },
  type: { type: String },
  picture: { type: String },
  artisName: { type: ObjectId },
}, {
  timestamps: true
});

const Merch = model('Merch', MerchSchema);

module.exports = Merch;