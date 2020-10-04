var express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { routes } = require("../app");
const Question = require("../schemas/Question");
const Result = require("../schemas/Result");

// Add question and save
router.post("/", async function (req, res) {
  const question = new Question(req.body);
  try {
    question.sku = uuidv4();
    await question.save();
    res.send(question);
  } catch (err) {
    res.json({ msg: "Can't add question" });
  }
});

// Save result
router.post("/result", async function (req, res) {
  const result = new Result(req.body);
  console.log(req.body);
  try {
    await result.save();
    res.send(result);
  } catch (err) {
    res.json({ msg: "Result not saved" });
  }
});

// GET  questions by difficulity
router.get("/", async function (req, res) {
  try {
    const difficulty = req.query.difficulty;
    const category = req.query.category;
    console.log(difficulty);
    const questions = await Question.aggregate([
      { $match: { level: difficulty, category: category } },
      { $sample: { size: 10 } },
    ]);
    res.send(questions);
  } catch (err) {
    console.log(err);
  }
});
//categories
router.get("/category", async function (req, res) {
  try {
    const categories = await Question.find({}).distinct("category");
    console.log(categories);
    res.send(categories);
  } catch (err) {
    console.log(err);
  }
});
// GET points
router.get("/points", async function (req, res) {
  try {
    const point = await Result.find();
    res.json(point);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
