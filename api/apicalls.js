var item = require("../models/item");
exports.showall = function(req, res) {
    item.find({}, { __v: 0 })
        .then(function(item) {
            res.json(item)
        })
        .catch(function(err) {
            res.send(err)
        })
}
exports.newitem = function(req, res) {
    item.create(req.body)
        .then(function(item) {
            res.status(201).json(item);
        })
        .catch(function(err) {
            res.send(err)
        })
}
exports.getitem = function(req, res) {
    item.findById(req.params.id, { _id: 0, __v: 0 })
        .then(function(item) {
            res.json(item)
        })
        .catch(function(err) {
            res.send(err)
        })
}
exports.updateitem = function(req, res) {
    item.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(function(item) {
            res.json(item)
        })
        .catch(function(err) {
            res.send(err)
        })
}
exports.deleteitem = function(req, res) {
    item.findByIdAndDelete(req.params.id)
        .then(function(item) {
            res.json({ message: "deleted!" })
        })
        .catch(function(err) {
            res.send(err)
        })
}
module.exports = exports;