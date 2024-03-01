const { Schema, model } = require("mongoose");
const userSchema = new Schema(
    {
        _id:{
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        status:{
            type: String,
            required: true,
            // Default '2' == Users
            default: "2"
        },
    },
    { timestamps: true }
);

module.exports = model("users", userSchema);
