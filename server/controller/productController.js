const { createProduct, getProducts } = require('../models/Product');

const create = async (req, res) => {
  const { name, description, price, category } = req.body;
  const product = await createProduct(name, description, price, category);
  res.status(201).json(product);
};

const getAll = async (req, res) => {
  const products = await getProducts();
  res.status(200).json(products);
};

module.exports = { create, getAll };
