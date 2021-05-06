const Album = require('../models/m_album');

class AlbumController {

  static create(req, res, next) {
    Album.create({
      name: req.body.name,
      cover: req.body.cover,
      trackList: req.body.trackList,
      quantity: req.body.quantity,
      price: req.body.price,
      year: req.body.year,
      genre: req.body.genre,
      artisId: req.body.artisId
    })
      .then(response => {
        res.status(201).json(response);
      })
      .catch(next);
  }

  static findAll(req, res, next) {
    Album.find()
      .then(response => {
        res.status(200).json(response)
      })
      .catch(next);
  }

  static findOne(req, res, next) {
    Album.findOne({ _id: req.params.id })
      .then(response => {
        res.status(200).json(response)
      })
      .catch(next);
  }

  static update(req, res, next) {
    const entries = Object.keys(req.body)
    const updates = {}

    for (let i = 0; i < entries.length; i++) {
      updates[entries[i]] = Object.values(req.body)[i]
    }

    Album.updateOne({ id: req.params._id }, {
      $set: updates
    })
      .then(response => {
        res.status(200).json({ message: 'updated', result: response });
      })
      .catch(next);
  }

  static delete(req, res, next) {
    Album.deleteOne({ _id: req.params.id })
      .then(response => {
        res.status(200).json({ message: 'deleted', result: response })
      })
      .catch(next);
  }

}

module.exports = AlbumController;