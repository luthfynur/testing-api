const mongoose = require('mongoose')

const queueSchema = new mongoose.Schema({
    number: String,
    served: {type: Boolean, default: false},
    createdAt: { type: Date, default: Date.now },
})

const Queue = mongoose.model('Queue', queueSchema)

module.exports = Queue