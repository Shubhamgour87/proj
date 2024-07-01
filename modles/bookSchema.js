const mongoose = require("mongoose");

const schemanode = mongoose.Schema({
    email: String
})

const collection = mongoose.model("NOdeMailer", schemanode);
module.exports = collection;