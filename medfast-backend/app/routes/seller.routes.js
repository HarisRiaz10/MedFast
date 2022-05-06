module.exports = app => {
    const seller = require("../controllers/seller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", seller.create);
    // Retrieve all Tutorials
    router.get("/name/:name/:password", seller.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", seller.findOne);
    // Update a Tutorial with id
    router.put("/:id", seller.update);
    // Delete a Tutorial with id
    router.delete("/:id", seller.delete);
    // Delete all Tutorials
    router.delete("/", seller.deleteAll);
    app.use('/api/seller', router);
  };