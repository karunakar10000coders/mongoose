const studentsModel = require("../models/studentsModel");

exports.getStudents = async (req, res) => {
  try {
    console.log("Model:", studentsModel.modelName);

    const count = await studentsModel.countDocuments();
    console.log("Count:", count);

    const students = await studentsModel.find({});
    console.log("Students:", students);

    res.json(students);
  } catch (err) {
    console.log(err);
  }
};
