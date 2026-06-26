const mongoose = require("mongoose");

const studentScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentScheme);
