const express = require("express");
const app = express();
var mongodb = require("./config/db");
app.use(express.json());

app.use("/api/question", require("./routes/questions"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:5000`);
});

module.exports = app;
