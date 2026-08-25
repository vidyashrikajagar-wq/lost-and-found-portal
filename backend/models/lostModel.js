const db = require("../middleware/config/db.js");

// Insert Lost Item
const createLostItem = async (
  item_name,
  category,
  location,
  lost_date,
  description,
  image,
  contact_email,
  contact_phone
) => {

  const sql = `
    INSERT INTO lost_items
    (item_name, category, location, lost_date, description, image, contact_email, contact_phone)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  return db.promise().query(sql, [
    item_name,
    category,
    location,
    lost_date,
    description,
    image,
    contact_email,
    contact_phone,
  ]);
};

// Get All Lost Items
const getAllLostItems = async () => {

  const sql = "SELECT * FROM lost_items ORDER BY created_at DESC";

  return db.promise().query(sql);
};

module.exports = {
  createLostItem,
  getAllLostItems,
};