const { uploader } = require("cloudinary");

const saveImage = (req, res, next) => {
  if (!req.file) {
    res.send(" please Uploade Image");
  }

  uploader
    .upload(
      `data:${req.file.mimetype};base64,` + req.file.buffer.toString("base64")
    )
    .then((data) => {
      req.body.imageUrl = data.url;
      next();
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

module.exports.saveImage = saveImage;
