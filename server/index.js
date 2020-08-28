const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("MongoDB database established successfully");
// });

const exercisesRouter = require("./routes/exercise");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
