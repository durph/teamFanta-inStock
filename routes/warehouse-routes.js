const { Router } = require("express");
const router = Router();
const inventory = require("../data/inventory.json");
const warehouses = require("../data/warehouses.json");

const postWarehouse = (req, res) => {
  Object.values(req.body).forEach(element => {
    if (!element) {
      return res.status(404).end();
    }
  });
  const { name, id, address, contact, inventoryCategories } = req.body;
  const newWareHouse = {
    id,
    name,
    address,
    contact,
    inventoryCategories
  };
  warehouses.push(newWareHouse);
  res.json(warehouses);
};

const getWarehouse = (req, res) => {
  res.json(warehouses);
};

router.post("/", postWarehouse);
router.get("/", getWarehouse);

module.exports = router;
