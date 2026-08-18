const express = require("express");

const router = express.Router();

const {
  createFoundItem,
  getAllFoundItems,
} = require("../controllers/foundController");

router.post("/", createFoundItem);

router.get("/", getAllFoundItems);

module.exports = router;