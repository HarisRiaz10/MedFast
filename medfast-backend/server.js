const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Haris application." });
});

// set port, listen for requests
require("./app/routes/tutorial.routes")(app);
require("./app/routes/seller.routes")(app);
require("./app/routes/search.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync({ force: false,alter:false }).then(() => {
    console.log("Drop and re-sync db.");
  });