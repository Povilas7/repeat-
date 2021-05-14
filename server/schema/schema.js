const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const upload = mongoose.model("uploadForm", userSchema)

module.exports = upload