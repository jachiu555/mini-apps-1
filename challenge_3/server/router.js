const router = require('express').Router();
const controller = require('./controller.js');

router.route('/home')
  .get(controller.getAll)
  .post(controller.postOne);

router.route('/home/:id')
  .delete(controller.deleteOne);

module.exports = router;