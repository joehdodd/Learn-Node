const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.render('index');
}
exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store'});
}
exports.createStore = async (req, res) => {
  const store = await (new Store(req.body)).save();
  req.flash('success', `Successfully created ${store.name}!`);
  res.redirect(`/store/${store.slug}`);
}
exports.getStores = async (req, res) => {
  const stores = await Store.find();
  res.render('stores', { title: 'Stores', stores });
}
exports.editStore = async (req, res) => {
  const store = await Store.findOne({ _id: req.params.id });
  console.log(store);
  res.render('editStore', { title: 'Edit Store', store })
}
exports.updateStore = async (req, res) => {
  req.body.location.type = 'Point';
  const store = await Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true, // return the new store, instead of old
    runValidators: true //
  }).exec();
  req.flash('success', `Successfully update ${store.name} <a href="/stores/${store.slug}">View</a>`)
  res.redirect(`/stores/${store._id}/edit`)
}
