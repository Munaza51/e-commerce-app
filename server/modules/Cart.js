const pool = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const addToCart = async (userId, productId, quantity) => {
  const id = uuidv4();
  await pool.query(
    'INSERT INTO carts (id, user_id, product_id, quantity) VALUES ($1, $2, $3, $4)',
    [id, userId, productId, quantity]
  );
  return { id, userId, productId, quantity };
};

const getCartByUserId = async (userId) => {
  const result = await pool.query('SELECT * FROM carts WHERE user_id = $1', [userId]);
  return result.rows;
};

module.exports = { addToCart, getCartByUserId };
