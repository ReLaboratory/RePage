const mongoose = require('mongoose');

const subject = new mongoose.Schema({
    name: String,
    lectures: [{
        no: Number,
        title: String,
        content: String,
        src: String
    }]
});

module.exports = mongoose.model('subject', subject);
