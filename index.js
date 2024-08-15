

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.js");
const productRouter = require("./routes/productRoute.js");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("supp");
});

mongoose
  .connect(
    "mongodb+srv://mstafa7814:oJY1nbsOVFu8dM88@backend.efuvj.mongodb.net/node-api?retryWrites=true&w=majority&appName=BackEnd"
  )
  .then(() => {
    console.log("connection to DB success");
    app.listen(4000, () => {
      console.log("server running on port 4000");
    });
  })
  .catch(() => {
    console.log("connection faild");
  });
