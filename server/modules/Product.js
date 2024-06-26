const pool = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const createProduct = async (name, description, price, category) => {
  const id = uuidv4();
  await pool.query(
    'INSERT INTO products (id, name, description, price, category) VALUES ($1, $2, $3, $4, $5)',
    [id, name, description, price, category]
  );
  return { id, name, description, price, category };
};

const getProducts = async () => {
  const result = await pool.query('SELECT * FROM products');
  return result.rows;
};

module.exports = { createProduct, getProducts };
