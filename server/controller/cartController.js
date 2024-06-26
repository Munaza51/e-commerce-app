const { addToCart, getCartByUserId } = require('../models/Cart');

const add = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  const cartItem = await addToCart(userId, productId, quantity);
  res.status(201).json(cartItem);
};

const getByUser = async (req, res) => {
  const { userId } = req.params;
  const cart = await getCartByUserId(userId);
  res.status(200).json(cart);
};

module.exports = { add, getByUser };
