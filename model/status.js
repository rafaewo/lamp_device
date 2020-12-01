module.exports = function() {
    var db = require('./../libs/connect')()
    var mongoose = require('mongoose')

    var status = mongoose.Schema({
        name: String,
        status: Boolean
    })

    return mongoose.model('status', status)
}