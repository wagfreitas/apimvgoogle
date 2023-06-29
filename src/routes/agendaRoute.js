const express= require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const controller = require('../controllers/agenda');

router.get('/', controller.getAll);
router.post('/create', controller.create);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;
