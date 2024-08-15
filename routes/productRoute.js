const express = require("express");
const {
  getProductById,
  AddProducts,
  getAllProducts,
  deleteProduct,
  UpdateProduct,
} = require("../controllers/produCtcontrollers");
const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/add", AddProducts);
productRouter.put("/:id", UpdateProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
