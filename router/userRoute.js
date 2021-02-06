const { Router } = require("express");
const { allReadyUser } = require("../middlerware/usersignUp");

router = Router();

router.route("/signUp").post(allReadyUser);

router.route("/logIn").post();

module.exports.router = router;
