const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'API em NODE para o sistemaa MVB',
    version: '1.0.0'});
});


module.exports = router;
