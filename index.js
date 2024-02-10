require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;
const indexRouter = require("./routes");

mongoose
  .connect("mongodb://localhost:27017/blog_app")
  .then(() => console.log("database connected"));

app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString : "Something went wrong";
  res.status(500).json({ msg: err });
});

app.listen(PORT, () => {
  console.log(`app is running at http://localhost:${PORT} `);
});
