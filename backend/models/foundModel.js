const db = require("../config/db");

// Insert Found Item
const createFoundItem = async (
  item_name,
  category,
  location,
  found_date,
  description,
  image,
  contact_email,
  contact_phone
) => {

  const sql = `
    INSERT INTO found_items
    (item_name, category, location, found_date, description, image, contact_email, contact_phone)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  return db.promise().query(sql, [
    item_name,
    category,
    location,
    found_date,
    description,
    image,
    contact_email,
    contact_phone,
  ]);
};

// Get All Found Items
const getAllFoundItems = async () => {

  return db.promise().query(
    "SELECT * FROM found_items ORDER BY created_at DESC"
  );

};

module.exports = {
  createFoundItem,
  getAllFoundItems,
};