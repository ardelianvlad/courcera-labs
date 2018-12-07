var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLoccalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    facebookId: {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLoccalMongoose);

module.exports = mongoose.model('User', User);