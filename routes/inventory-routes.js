const { Router } = require("express");
const router = Router();
const inventory = require("../data/inventory.json");

const getAllInventory = (req, res) => {
  res.json(inventory);
};

router.get("/", getAllInventory);

module.exports = router;
