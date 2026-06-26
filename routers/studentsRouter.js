const express = require("express");
const { getStudents } = require("../controllers/studentsController");

const studentRouter = express.Router();

studentRouter.get("/", getStudents);

module.exports = studentRouter;
