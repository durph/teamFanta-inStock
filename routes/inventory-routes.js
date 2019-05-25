const { Router } = require("express")
const router = Router();
const inventory = require("../data/inventory.json");

const getInventory = (req, res) => {
  res.json(inventory);
};
//copied from Andrew's warehouse as boilerplate code
// const postWarehouse = (req, res) => {
//   res.send("hello");
//   Object.values(req.body).forEach(element => {
//     if (!element) {
//       return res.status(404).end();
//     }
//   });
// }
router.get("/", getInventory);

module.exports = router;
