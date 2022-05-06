module.exports = (app) => {
  const search = require("../controllers/search.controller.js");
  var router = require("express").Router();
  router.get("/", search.find);
  
  router.post("/create", search.create);
  app.use('/api/search', router);
};
