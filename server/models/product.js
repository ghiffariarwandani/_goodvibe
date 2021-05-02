const { Schema, model, objectId } = require('mongoose');

const ProductSchema = new Schema({
  artisName: { type: String }
})