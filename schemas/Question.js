const mongoose = require("mongoose");

const { Schema } = mongoose;

const questionSchema = new Schema({
  question: String,
  answer: String,
  level: String,
  point: Number,
  category: String,
});
const Question = mongoose.model("Questions", questionSchema);
module.exports = Question;
