import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productMode.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  //const product = products.find((p) => p._id === req.params.id);
  if (product) {
    return res.json(product);
  }
  res.status(404);
  throw new Error("Resource not found");
});

export { getProducts, getProductsById };
