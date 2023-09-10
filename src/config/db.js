/* eslint-disable no-undef */
const  mongoose = require("mongoose");
const { DB_URL } = require("./variables");
const uri =  DB_URL;
mongoose.set("strictQuery", false);
mongoose.connect(uri);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Database Connection Successful");
});

db.on("error", () => {
  console.log("Error in MongoDB connection");
});

module.exports = mongoose;