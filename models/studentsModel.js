const mongoose = require("mongoose");

const studentScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    collection: "students_test_table",
  },
);

module.exports = mongoose.model(
  "Student",
  studentScheme,
  "students_test_table",
);
