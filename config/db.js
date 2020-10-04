const dbUrl =
  "mongodb+srv://luka123:luka123@devconnector.xfmqi.mongodb.net/tester?authSource=admin&replicaSet=atlas-2mdjtj-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

const mongoose = require("mongoose");
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((er) => {
    console.log(er);
  });
