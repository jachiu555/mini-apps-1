const router = require('express').Router();
const controller = require('./controller.js');

router.route('/connectFour')
  .get(controller.getAll)

module.exports = router;