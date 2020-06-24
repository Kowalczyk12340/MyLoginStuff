const mongoose = require("mongoose");

const educationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      lowecase: true,
    },
    startingYear: String,
    endingYear: String,
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = educationSchema;
