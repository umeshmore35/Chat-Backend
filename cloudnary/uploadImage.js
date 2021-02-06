const { memoryStorage } = require("multer");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

const uplaodImage = upload.single("image");

module.exports.uplaodImage = uplaodImage;
