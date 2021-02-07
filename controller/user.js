const { User } = require("../module/userSchema");

const signUpUser = (req, res, next) => {
  let newUser = new User({
    email: req.body.email,
    password: req.body.password,
    imageUrl: req.body.imageUrl,
  });

  newUser
    .save()
    .then((user) => {
      return res.status(200).json({
        status: "Successfully",
        data: user,
      });
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

module.exports.signUpUser = signUpUser;
