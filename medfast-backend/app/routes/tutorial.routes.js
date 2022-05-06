module.exports = app => {
    const tutorials = require("../controllers/buyer.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", tutorials.create);
    // Retrieve all Tutorials
    //router.get("/", tutorials.findAll);
    // Retrieve all published Tutorials
    // Retrieve a single Tutorial with id
    router.get("/test", tutorials.findOne);
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);
    // Retrieve a single Tutorial with name
    router.get('/name/:name/:pass',tutorials.findAll);
    app.use('/api/tutorials', router);
  };