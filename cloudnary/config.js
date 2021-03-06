const { v2 } = require("cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinaryConfig = async (req, res, next) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
  next();
};

module.exports.cloudinaryConfig = cloudinaryConfig;
