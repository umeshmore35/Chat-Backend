const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { router } = require("./router/userRoute");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    const app = express();

    app.use(cors());

    app.use("/chat", router);

    app.listen(process.env.PORT, () => {
      console.log(`On Port ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
    return e;
  });
