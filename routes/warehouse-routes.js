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

const getWarehouses = (req, res) => {
  res.json(warehouses);
};

const getWarehouseDetails = (req, res) => {
  let warehouse = warehouses.find(
    warehouse => warehouse.id === req.params.warehouseId
  );
  let warehouseInventory = inventory.filter(
    inventory => inventory.warehouseId === req.params.warehouseId
  );

  res.json({ warehouse, warehouseInventory });
};

router.post("/", postWarehouse);
router.get("/", getWarehouses);
router.get("/:warehouseId", getWarehouseDetails);

module.exports = router;
