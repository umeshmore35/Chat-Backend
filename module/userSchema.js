const { Schema, model } = require("mongoose");
const uniqid = require("uniqid");
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    userId: {
      type: String,
      default: uniqid(),
    },

    email: {
      type: String,
      required: [true, "Email Is Required  "],
      validate: {
        validator: function () {
          console.log(this.email);
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(this.email).toLowerCase());
        },
        message: "invalid Email",
      },
    },

    password: {
      type: String,
    },

    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  try {
    console.log(this.password);
    let salt = await bcrypt.genSaltSync(10);
    let hash = await bcrypt.hash(this.password, salt);
    this.password = await hash;
    next();
  } catch (e) {
    console.log(e);
    return e;
  }
});

const User = model("USER", UserSchema);

module.exports.User = User;
