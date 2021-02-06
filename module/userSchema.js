const { Schema, model } = require("mongoose");
const uniqid = require("uniqid");

const UserSchema = new Schema(
  {
    userId: {
      type: String,
      default: uniqid(),
    },

    email: {
      type: String,
    },

    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = model("USER", UserSchema);

module.exports.User = User;
