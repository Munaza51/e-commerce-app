const pool = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const createOrder = async (userId, total) => {
  const id = uuidv4();
  await pool.query(
    'INSERT INTO orders (id, user_id, status, total) VALUES ($1, $2, $3, $4)',
    [id, userId, 'processing', total]
  );
  return { id, userId, status: 'processing', total };
};

const getOrdersByUserId = async (userId) => {
  const result = await pool.query('SELECT * FROM orders WHERE user_id = $1', [userId]);
  return result.rows;
};

module.exports = { createOrder, getOrdersByUserId };
