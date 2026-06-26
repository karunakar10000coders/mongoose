const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const studentRouter = require("./routers/studentsRouter");

dotenv.config();

const app = express();
app.use(express.json());

dbConnect();

app.use("/students", studentRouter);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
