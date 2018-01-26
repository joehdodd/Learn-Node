const mongoose = require('mongoose');
csont Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.render('index');
}
exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store'});
}
exports.createStore = (req, res) => {
  res.json(req.body);
}
