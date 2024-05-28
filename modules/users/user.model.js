const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, //unique: true },
  name: { type: String },
  phone: Number,
  role: {
    type: [String],
    enum: ["admin", "user"],
    default: "user",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = new model("User", userSchema);
