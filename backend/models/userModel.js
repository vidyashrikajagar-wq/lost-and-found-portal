const db = require("../config/db");

const createUser = async (name, email, phone, password) => {
  const sql = `
    INSERT INTO users (name, email, phone, password)
    VALUES (?, ?, ?, ?)
  `;

  return db.promise().query(sql, [name, email, phone, password]);
};

const findUserByEmail = async (email) => {
  const sql = "SELECT * FROM users WHERE email = ?";

  return db.promise().query(sql, [email]);
};

module.exports = {
  createUser,
  findUserByEmail,
};