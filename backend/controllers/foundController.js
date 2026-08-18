const foundModel = require("../models/foundModel");

// Create Found Item
const createFoundItem = async (req, res) => {

  try {

    const {
      item_name,
      category,
      location,
      found_date,
      description,
      image,
      contact_email,
      contact_phone,
    } = req.body;

    if (
      !item_name ||
      !category ||
      !location ||
      !found_date ||
      !contact_email ||
      !contact_phone
    ) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    await foundModel.createFoundItem(
      item_name,
      category,
      location,
      found_date,
      description,
      image,
      contact_email,
      contact_phone
    );

    res.status(201).json({
      message: "Found Item Submitted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

};

// Get All Found Items
const getAllFoundItems = async (req, res) => {

  try {

    const [items] = await foundModel.getAllFoundItems();

    res.status(200).json(items);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

};

module.exports = {
  createFoundItem,
  getAllFoundItems,
};