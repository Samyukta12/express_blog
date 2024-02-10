const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  title: { type: String, required: [true, "Title is missing"] },
  author: { type: String, required: [true] },
  tag: [String], //array of string
  words: { type: Number, default: 10 },
  status: { type: String, enum: ["published", "draft"], default: "draft" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = new model("Blog", blogSchema);
