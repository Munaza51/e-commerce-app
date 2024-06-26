const pool = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const createUser = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const id = uuidv4();
  await pool.query(
    'INSERT INTO users (id, username, email, password) VALUES ($1, $2, $3, $4)',
    [id, username, email, hashedPassword]
  );
  return { id, username, email };
};

const getUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

module.exports = { createUser, getUserByEmail };
