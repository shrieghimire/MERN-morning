// const productData = require("../data/productData.json");
const ProductModel = require("../models/ProductModels");

const returnAllProducts = async (req, res) => {
  const productData = await ProductModel.find();
  const { category } = req.query;
  if (category) {
    const filteredProducts = productData.filter((product) => {
      return product.category === category;
    });
    res.json(filteredProducts);
  } else {
    res.json(productData);
  }
};

const returnSingleProduct = async (req, res) => {
  const productData = await ProductModel.find();
  //1. Destructure productID from req.params
  const { productID } = req.params;
  //2. Filter product from the array
  const selectedProduct = productData.find((product) => {
    return product.id === Number(productID);
  });
  if (selectedProduct) {
    res.json(selectedProduct);
  } else {
    res.send("Index doesn't exist");
  }
};
const createProduct = async (req, res) => {
  try {
    const result = await ProductModel.create(req.body);
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};
const updateProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    const result = await ProductModel.findByIdAndUpdate(productID, req.body,{new:true});
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};
const deleteProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    const result = await ProductModel.findByIdAndDelete(productID);
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
