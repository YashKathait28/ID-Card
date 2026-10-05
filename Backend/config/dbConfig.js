const mongoose = require("mongoose");
// const user = require("../models/userModel");

const dbConnect = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected Successfully!");
    })
    .catch((error) => {
      console.log("message:", error);
    });
};

module.exports = dbConnect;
