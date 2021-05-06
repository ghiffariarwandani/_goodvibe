const Merch = require('../models/m_merch');

class MerchController {

  static create(req, res, next) {
    Merch.create({
      name: req.body.name,
      quantity: req.body.quantity,
      type: req.body.type,
      picture: req.body.picture,
      artisId: req.body.artisId
    })
      .then(response => {
        res.status(201).json(response);
      })
      .catch(next);
  }

  static findAll(req, res, next) {
    Merch.find()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(next)
  }

  static findOne(req, res, next) {
    Merch.findOne({
      _id: req.params.id
    })
      .then(response => {
        res.status(200).json(response);
      })
      .catch(next)
  }

  static update(req, res, next) {
    const entries = Object.keys(req.body)
    const updates = {}

    // constructing dynamic query
    for (let i = 0; i < entries.length; i++) {
      updates[entries[i]] = Object.values(req.body)[i]
    }

    Merch.updateOne({ id: req.params._id }, {
      $set: updates
    })
      .then(response => {
        res.status(200).json(response);
      })
      .catch(next)
  }

  static delete(req, res, next) {
    Merch.deleteOne({ _id: req.params.id })
      .then(response => {
        res.status(200).json(response)
      })
      .catch(next)
  }


}

module.exports = MerchController;