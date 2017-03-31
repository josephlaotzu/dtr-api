'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    name: {
        type: String,
        required: 'Full name is required'
    },
    username: {
        type: String,
        required: 'Username is required'
    },
    password: {
        type: String,
        required: 'Password is required'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    position: {
        type: [{
            type: String,
            enum: ['IT', 'Sales', 'Reports', 'Protocol']
        }],
        default: ['IT']
    }
});

module.exports = mongoose.model('Users', UserSchema);