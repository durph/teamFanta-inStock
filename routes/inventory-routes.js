const { Router } = require("express");
const router = Router();
const inventory = require("../data/inventory.json");

const getAllInventory = (req, res) => {
  res.json(inventory);
};

const getItemById = (req, res) => {
  const foundItem = inventory.find(i => i.id === req.params.inventoryId);
  if (foundItem) {
    res.json(foundItem);
  } else {
    res.status(404).json({
      error: "No item with that ID was found"
    });
  }
};

const deleteItemById = (req, res) => {
  let targetItem = inventory.find(i => i.id === req.params.inventoryId);
  if (!targetItem) {
    res.status(404).json({
      error: "No item with that ID was found"
    });
  }
  let index = inventory.indexOf(targetItem);
  inventory.splice(index, 1);
  res.json(inventory);
};

router.get("/:inventoryId", getItemById);
router.get("/", getAllInventory);
router.delete("/delete/:inventoryId", deleteItemById);

module.exports = router;
