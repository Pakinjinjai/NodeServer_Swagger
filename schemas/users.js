const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "users",
    },
  },
  { timestamps: true }
);

module.exports = model("users", userSchema);
