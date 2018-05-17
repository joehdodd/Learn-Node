const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')

// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);
router.get('/secret-query', (req, res) => {
  res.render('secret', {
    secret: req.query.secret
  });
})

module.exports = router;
