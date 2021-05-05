const Artist = require('../models/m_artist');

class ArtistController {

  static create(req, res, next) {
    Artist.create({ name: req.body.name })
      .then(response => {
        res.status(201).json(response);
      })
      .catch(next);
  }

  static findAll(req, res, next) {
    Artist.find()
      .then(response => res.status(200).json(response))
      .catch(next);
  }

  static findOne(req, res, next) {
    Artist.findOne({ _id: req.params.id })
      .then(response => res.status(200).json(response))
      .catch(next);
  }

}

module.exports = ArtistController;