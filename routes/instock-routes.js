const { Router } = require("express");
const router = Router();

const postWarehouse = (req, res) => {
  res.send("hello");
};

router.post("/warehouse", postWarehouse);

module.exports = router;
