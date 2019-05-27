const { Router } = require("express");
const router = Router();
const inventory = require("../data/inventory.json");

const getAllInventory = (req, res) => {
  res.json(inventory);
};
const postInventory = (req, res) => {
  Object.values(req.body).forEach(element => {
    if (!element) {
      return res.status(400).end();
    }
  });
  const { name, id, description, quantity, lastOrdered, location, isInstock, categories, warehouseID } = req.body;
  const newInvItem = {
    id,
    name,
    description,
    quantity,
    lastOrdered,
    location,
    isInstock,
    categories,
    warehouseID 
  };
  inventory.push(newInvItem);
  res.json(inventory);
};

router.get("/", getAllInventory);
router.post("/", postInventory);

module.exports = router;
