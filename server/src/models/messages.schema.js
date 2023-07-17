const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})


module.exports = mongoose.model('messages', messagesSchema);