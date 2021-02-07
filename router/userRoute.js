const { Router } = require("express");
const { cloudinaryConfig } = require("../cloudnary/config");
const { saveImage } = require("../cloudnary/saveImage");
const { uplaodImage } = require("../cloudnary/uploadImage");
const { signUpUser } = require("../controller/user");
const { allReadyUser } = require("../middlerware/usersignUp");

router = Router();

router
  .route("/signUp")
  .post(cloudinaryConfig, uplaodImage, saveImage, signUpUser);

router.route("/logIn").post();

module.exports.router = router;
