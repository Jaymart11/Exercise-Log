const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://admin:admin@cluster0.xywgh.gcp.mongodb.net/Exercises?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const exercisesRouter = require("./routes/exercise");
const usersRouter = require("./routes/users");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
