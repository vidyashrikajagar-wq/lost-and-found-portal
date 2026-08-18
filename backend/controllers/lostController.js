const lostModel = require("../models/lostModel");

// Create Lost Item
const createLostItem = async (req, res) => {
  try {

    const {
      item_name,
      category,
      location,
      lost_date,
      description,
      image,
      contact_email,
      contact_phone,
    } = req.body;

    if (
      !item_name ||
      !category ||
      !location ||
      !lost_date ||
      !contact_email ||
      !contact_phone
    ) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    await lostModel.createLostItem(
      item_name,
      category,
      location,
      lost_date,
      description,
      image,
      contact_email,
      contact_phone
    );

    res.status(201).json({
      message: "Lost Item Report Submitted Successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

// Get All Lost Items
const getAllLostItems = async (req, res) => {
  try {

    const [items] = await lostModel.getAllLostItems();

    res.status(200).json(items);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

module.exports = {
  createLostItem,
  getAllLostItems,
};