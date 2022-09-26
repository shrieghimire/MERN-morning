const mongoose = require("mongoose");
const connectDatabase = () => {     
  mongoose.connect("mongodb://localhost:27017/doko", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database connnected succesfully");
    }
  });
};
module.exports = connectDatabase;
