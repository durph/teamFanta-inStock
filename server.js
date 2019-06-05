const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const warehouseRoutes = require("./routes/warehouse-routes");
const inventoryRoutes = require("./routes/inventory-routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/warehouse", warehouseRoutes);
app.use("/inventory", inventoryRoutes);

app.listen(port, function() {
  console.log(`app listening on port ${port}`);
});
