const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const warehouseRoutes = require("./routes/warehouse-routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => res.send("hello world"));

app.use("/warehouse", warehouseRoutes);
app.listen(port, function() {
  console.log(`app listening on port ${port}`);
});

//
