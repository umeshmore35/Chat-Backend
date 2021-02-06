const { uplaoder } = require("cloudinary");

const saveImage = (req, res, next) => {
  if (!req.file.buffer) {
    res.send("Uploade Image");
  }

  uplaoder
    .update(
      `data:${req.file.mimetype};base64,` + req.file.buffer.toString("base64")
    )
    .then((data) => {
      req.body.imageurl = data.url;
      next();
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};
