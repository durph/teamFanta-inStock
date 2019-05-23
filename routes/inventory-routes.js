const router = Router();
const inventory = require("../data/inventory.json");

//copied from Andrew's warehouse as boilerplate code
// const postWarehouse = (req, res) => {
//   res.send("hello");
//   Object.values(req.body).forEach(element => {
//     if (!element) {
//       return res.status(404).end();
//     }
//   });
// }

module.exports = router;
