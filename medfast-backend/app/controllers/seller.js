const db = require("../models");
const Seller = db.seller;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {

        // Create a Tutorial
        const seller = {
          name: req.body.name,
          password: req.body.password,
          address:req.body.address,
          email:req.body.email,
          phone:req.body.phone


        //   description: req.body.description,
        //   published: req.body.published ? req.body.published : false
        };
        // Save Tutorial in the database
        Seller.create(seller)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
          });

  
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const name = req.params.name;
    const password=req.params.password;
    var condition = name ? { name: { [Op.like]: `${name}` } } : null;
    
    var condition2 = password ? { password: { [Op.like]: `${password}` } } : null;
    Seller.findAll({ where: condition && condition2 })
      .then(data => {
        console.log('I am here');
        res.send([...data,{seller:true}]);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};