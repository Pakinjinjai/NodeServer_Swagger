const { Schema, model } = require("mongoose");

const healthSchema = new Schema(
  {
    userId: {
        type: String,
        required: true,
      },
    oxyGen: {
      type: Number,
      default: null,
    },
    sysTolic: {
      type: Number,
      default: null,
    },
    diasTolic: {
      type: Number,
      default: null,
    },
    pulse: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = model("health", healthSchema);
