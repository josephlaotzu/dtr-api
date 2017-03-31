'use strict';


var mongoose = require('mongoose'),
    Users = mongoose.model('Users');

exports.list_all_users = function (req, res) {
    Users.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};




exports.create_a_user = function (req, res) {
    var new_user = new Users(req.body);
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.fetch_a_user = function (req, res) {
    Users.findById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.update_a_user = function (req, res) {
    Users.findOneAndUpdate(req.params.userId, req.body, { new: true }, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.delete_a_user = function (req, res) {
    Users.remove({
        _id: req.params.userId
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'User successfully deleted' });
    });
};