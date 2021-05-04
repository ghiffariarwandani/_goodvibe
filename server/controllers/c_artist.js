const Artist = require('../models/m_artist');

class ArtistController {

  static create(req, res, next) {
    Artist.create({ name: req.body.name })
      .then(response => {
        console.log(response, 'success')
      })
      .catch(error => {
        console.log('error geng')
      })
  }

}

module.exports = ArtistController;