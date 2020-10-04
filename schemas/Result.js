const mongoose = require("mongoose");

const { Schema } = mongoose;

const resultSchema = new Schema({
  point: Number,
  level: String,
  category: String,
  resultDate: {
    type: Date,
    default: new Date(),
  },
});
const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
