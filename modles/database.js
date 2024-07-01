const mongoose = require("mongoose");

try {
    const conn = mongoose.connect("mongodb://localhost:27017/nodemailer");
    console.log("db connected");
}
catch (err) {
    console.log(err.message);
}