const express = require("express");
const router = express.Router();

const {
  createLostItem,
  getAllLostItems,
} = require("../controllers/lostController");

// Create Lost Item
router.post("/", createLostItem);

// Get All Lost Items
router.get("/", getAllLostItems);

module.exports = router;