const express= require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const controller = require('../controllers/clientes');

router.get('/', controller.getAllClientes);
router.post('/create', controller.create);

module.exports = router;
