const models = require('../database/model.js')

const controller = {
  getAll: (req, res) => {
    models.get((err, result) => {
      if (err) {
        res.status(404).send('ERROR ' + err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postOne: (req, res) => {
    models.post(req.body, (err, result) => {
      if (err) {
        res.status(400).send('ERROR ' + err);
      } else {
        res.status(200).send(req.body);
      }
    });
  },
  deleteOne: (req, res) => {
    models.delete(req.params.id, (err, result) => {
      if (err) {
        res.status(400).send('ERROR ' + err);
      } else {
        res.status(200).send(`DELETED ${req.params.id}`);
      }
    })
    res.status(200).send('deleteOne');
  },
}

module.exports = controller;