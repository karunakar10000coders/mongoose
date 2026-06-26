const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.DBURL;

const dbConnect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("mongoose connection succesful");
  } catch (err) {
    console.log(
      "config -> dbconnect -> dbconnect fn -> error ->>",
      err.message,
    );
  }
};

module.exports = dbConnect;
