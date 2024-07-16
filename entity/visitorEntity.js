const mongoose = require('mongoose')

const visitorSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    createdAt: { type: Date, default: Date.now },
})

const Visitor = mongoose.model('Visitor', visitorSchema)

module.exports = Visitor