const { createOrder, getOrdersByUserId } = require('../models/Order');

const create = async (req, res) => {
  const { userId, total } = req.body;
  const order = await createOrder(userId, total);
  res.status(201).json(order);
};

const getByUser = async (req, res) => {
  const { userId } = req.params;
  const orders = await getOrdersByUserId(userId);
  res.status(200).json(orders);
};

module.exports = { create, getByUser };
