const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Show = new Schema({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    date: {
        type: String
    },
    location: {
        type: String
    },
    subtitle: {
        type: String
    },
    genre: {
        type: String
    }
})

module.exports = mongoose.model('Show', Show);