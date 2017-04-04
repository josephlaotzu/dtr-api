(function () {
    'use strict';

    var express = require('express'),
        app = express(),
        port = process.env.PORT || 3000,
        mongoose = require('mongoose'),
        Task = require('./api/models/users.model'),
        bodyParser = require('body-parser');

    mongoose.Promise = global.Promise;
    var connection = 'mongodb://username:password@ds139470.mlab.com:39470/api-dtr';
    mongoose.connect(connection, function (err) {
        if (err) throw err;
        console.log('Successfully connected to Database');
    });


    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    var routes = require('./api/routes/user.routes');
    routes(app);


    app.listen(port);

    app.use(function (req, res) {
        res.status(404).send({ url: req.originalUrl + ' not found' });
    });
    console.log('Server started on: ' + port);

})();

